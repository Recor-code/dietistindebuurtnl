// Using the javascript_openai integration
import OpenAI from "openai";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Assistant configuration
const USE_ASSISTANTS = !!process.env.OPENAI_ASSISTANT_ID;

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export function getAssistantStatus(): { usingAssistant: boolean; assistantId?: string } {
  return {
    usingAssistant: USE_ASSISTANTS,
    assistantId: process.env.OPENAI_ASSISTANT_ID || undefined
  };
}

export interface ADHDAnalysis {
  summary: string;
  painPoints: string[];
  recommendations: string[];
  urgencyLevel: 'low' | 'medium' | 'high';
  suggestedActions: string[];
}

export async function generateADHDAnalysis(
  messages: ChatMessage[]
): Promise<ADHDAnalysis> {
  try {
    const conversation = messages.map(m => `${m.role}: ${m.content}`).join('\n');
    
    // Always use chat completions for analysis (more reliable for structured output)
    const response = await openai.chat.completions.create({
      model: "gpt-5", // the newest OpenAI model is "gpt-5" which was released August 7, 2025
      messages: [
        {
          role: "system",
          content: `Je bent een ervaren ADHD specialist die gesprekken analyseert om mensen te helpen hun ADHD-uitdagingen beter te begrijpen. 
          
          Analyseer het gesprek en geef terug in JSON format:
          {
            "summary": "Korte samenvatting van het gesprek en de belangrijkste punten",
            "painPoints": ["lijst", "van", "geïdentificeerde", "pijnpunten"],
            "recommendations": ["praktische", "aanbevelingen", "voor", "verbetering"],
            "urgencyLevel": "low/medium/high",
            "suggestedActions": ["concrete", "stappen", "om", "te", "ondernemen"]
          }
          
          Focus op ADHD-specifieke uitdagingen zoals concentratie, organisatie, emotieregulatie, impulsiviteit, etc.
          Geef praktische, bruikbare adviezen.`
        },
        {
          role: "user",
          content: `Analyseer dit gesprek: ${conversation}`
        }
      ],
      response_format: { type: "json_object" }
    });

    const result = JSON.parse(response.choices[0].message.content || '{}');
    
    return {
      summary: result.summary || '',
      painPoints: result.painPoints || [],
      recommendations: result.recommendations || [],
      urgencyLevel: result.urgencyLevel || 'medium',
      suggestedActions: result.suggestedActions || []
    };
  } catch (error) {
    console.error('Error generating ADHD analysis:', error);
    throw new Error('Failed to generate ADHD analysis');
  }
}

// Thread storage for assistant conversations
const threadStorage = new Map<string, string>();

function getThreadId(sessionId: string = 'default'): string | undefined {
  return threadStorage.get(sessionId);
}

function setThreadId(sessionId: string = 'default', threadId: string): void {
  threadStorage.set(sessionId, threadId);
}

export async function generateChatResponse(
  messages: ChatMessage[],
  sessionId: string = 'default'
): Promise<string> {
  try {
    if (USE_ASSISTANTS && process.env.OPENAI_ASSISTANT_ID) {
      return await generateAssistantResponse(messages, sessionId);
    } else {
      return await generateChatCompletionResponse(messages);
    }
  } catch (error) {
    console.error('Error generating chat response:', error);
    throw new Error('Failed to generate chat response');
  }
}

// New streaming function with Assistant support and function calling
export async function generateStreamingChatResponse(
  messages: ChatMessage[],
  sessionId: string = 'default'
): Promise<ReadableStream<Uint8Array>> {
  const encoder = new TextEncoder();
  
  return new ReadableStream({
    async start(controller) {
      try {
        if (USE_ASSISTANTS && process.env.OPENAI_ASSISTANT_ID) {
          // Use Assistant API with streaming for function calling support
          await streamAssistantResponse(controller, encoder, messages, sessionId);
        } else {
          // Fallback to chat completions
          await streamChatCompletionResponse(controller, encoder, messages);
        }
      } catch (error) {
        console.error('Streaming error:', error);
        controller.enqueue(encoder.encode('Sorry, er ging iets mis. Probeer het opnieuw.'));
        controller.close();
      }
    }
  });
}

async function streamAssistantResponse(
  controller: ReadableStreamDefaultController<Uint8Array>,
  encoder: TextEncoder,
  messages: ChatMessage[],
  sessionId: string = 'default'
): Promise<void> {
  // Get or create thread
  let threadId = getThreadId(sessionId);
  
  if (!threadId) {
    const thread = await openai.beta.threads.create();
    threadId = thread.id;
    setThreadId(sessionId, threadId);
  }

  // Add the latest user message to the thread
  const latestMessage = messages[messages.length - 1];
  if (latestMessage && latestMessage.role === 'user') {
    await openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: latestMessage.content
    });
  }

  // Send thread info to client
  controller.enqueue(encoder.encode(JSON.stringify({
    type: 'thread_info',
    threadId: threadId
  }) + '\n'));

  // Create streaming run
  const stream = openai.beta.threads.runs.stream(threadId, {
    assistant_id: process.env.OPENAI_ASSISTANT_ID!,
  });

  for await (const event of stream) {
    if (event.event === 'thread.message.delta' && event.data.delta.content) {
      const contentDeltas = event.data.delta.content;
      for (const delta of contentDeltas) {
        if (delta.type === 'text' && delta.text?.value) {
          // Send text chunks to client
          controller.enqueue(encoder.encode(delta.text.value));
        }
      }
    }

    if (event.event === 'thread.run.requires_action') {
      const toolCalls = event.data.required_action?.submit_tool_outputs.tool_calls;
      
      if (toolCalls) {
        const toolOutputs = [];
        
        for (const toolCall of toolCalls) {
          if (toolCall.function.name === 'send_questionnaire_report') {
            try {
              const args = JSON.parse(toolCall.function.arguments);
              
              // Notify client about function call
              controller.enqueue(encoder.encode('\n\n🔄 **Email rapport wordt verzonden...**\n\n'));
              
              // Call email sending function
              const emailResult = await sendQuestionnaireReport(args);
              
              toolOutputs.push({
                tool_call_id: toolCall.id,
                output: JSON.stringify({
                  success: emailResult.success,
                  message: emailResult.success 
                    ? `Email rapport succesvol verzonden naar ${args.email}` 
                    : `Fout bij verzenden email: ${emailResult.error}`,
                  timestamp: new Date().toISOString()
                })
              });

              // Notify client of result
              const statusMessage = emailResult.success
                ? `✅ **Email rapport succesvol verzonden naar ${args.email}!**\n\n`
                : `❌ **Fout bij verzenden email:** ${emailResult.error}\n\n`;
              
              controller.enqueue(encoder.encode(statusMessage));

            } catch (error) {
              console.error('Error processing function call:', error);
              const errorMessage = error instanceof Error ? error.message : 'Unknown error';
              toolOutputs.push({
                tool_call_id: toolCall.id,
                output: JSON.stringify({
                  success: false,
                  message: 'Er is een fout opgetreden bij het verwerken van de functie aanroep',
                  error: errorMessage
                })
              });
              controller.enqueue(encoder.encode('❌ **Er is een fout opgetreden bij het verzenden van het email rapport.**\n\n'));
            }
          }
        }

        // Submit tool outputs and continue streaming
        if (toolOutputs.length > 0) {
          const submitStream = openai.beta.threads.runs.submitToolOutputsStream(
            event.data.id,
            { thread_id: threadId, tool_outputs: toolOutputs }
          );

          for await (const submitEvent of submitStream) {
            if (submitEvent.event === 'thread.message.delta' && submitEvent.data.delta.content) {
              const contentDeltas = submitEvent.data.delta.content;
              for (const delta of contentDeltas) {
                if (delta.type === 'text' && delta.text?.value) {
                  controller.enqueue(encoder.encode(delta.text.value));
                }
              }
            }
          }
        }
      }
    }

    if (event.event === 'thread.run.completed') {
      break;
    }

    if (event.event === 'thread.run.failed') {
      controller.enqueue(encoder.encode('\n\n❌ **Er is een fout opgetreden bij het verwerken van je verzoek.**'));
      break;
    }
  }

  controller.close();
}

async function streamChatCompletionResponse(
  controller: ReadableStreamDefaultController<Uint8Array>,
  encoder: TextEncoder,
  messages: ChatMessage[]
): Promise<void> {
  const stream = await openai.chat.completions.create({
    model: "gpt-5", // the newest OpenAI model is "gpt-5" which was released August 7, 2025
    messages: [
      {
        role: "system",
        content: `Je bent een warme, begripvolle AI ADHD Assistente voor de website "ADHD Coach in de Buurt". 
        
        Je helpt bezoekers met:
        - Vragen over ADHD symptomen en uitdagingen
        - Informatie over wat een ADHD coach kan betekenen
        - Hulp bij het vinden van de juiste professionele ondersteuning
        - Praktische tips voor dagelijks leven met ADHD
        - Emotionele ondersteuning en begrip
        
        Spreek in warme, toegankelijke Nederlandse taal. Wees empathisch maar professioneel.
        Verwijs mensen altijd naar professionele hulp voor diagnoses of behandeling.
        Moedig mensen aan om de ADHD coaches in hun stad te bekijken op de website.`
      },
      ...messages
    ],
    stream: true,
    max_tokens: 1000
  });

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content;
    if (content) {
      controller.enqueue(encoder.encode(content));
    }
  }
  
  controller.close();
}

// Removed unused submitToolOutputs function - using server-side automatic function calling

// Email sending function for questionnaire reports
async function sendQuestionnaireReport(args: {
  name: string;
  email: string;
  responses: object;
}): Promise<{ success: boolean; error?: string }> {
  try {
    // Use full URL for server-side fetch
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : process.env.NEXT_PUBLIC_SITE_URL 
      ? process.env.NEXT_PUBLIC_SITE_URL 
      : 'http://localhost:5000';
    
    const response = await fetch(`${baseUrl}/api/send-report`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(args),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const error = await response.text();
      return { success: false, error };
    }
  } catch (error) {
    console.error('Error sending questionnaire report:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return { success: false, error: errorMessage };
  }
}

async function generateAssistantResponse(
  messages: ChatMessage[],
  sessionId: string = 'default'
): Promise<string> {
  try {
    // Get or create thread
    let threadId = getThreadId(sessionId);
    
    if (!threadId) {
      const thread = await openai.beta.threads.create();
      threadId = thread.id;
      setThreadId(sessionId, threadId);
    }

    // Add the latest user message to the thread
    const latestMessage = messages[messages.length - 1];
    if (latestMessage && latestMessage.role === 'user') {
      await openai.beta.threads.messages.create(threadId, {
        role: 'user',
        content: latestMessage.content
      });
    }

    // Run the assistant
    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: process.env.OPENAI_ASSISTANT_ID!
    });

    // Wait for completion
    let runStatus = run;
    
    while (runStatus.status === 'queued' || runStatus.status === 'in_progress') {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const retrievedRun = await openai.beta.threads.runs.retrieve(run.id, { thread_id: threadId });
      runStatus = retrievedRun;
    }

    if (runStatus.status === 'completed') {
      // Get the latest messages from the thread
      const threadMessages = await openai.beta.threads.messages.list(threadId);
      const latestResponse = threadMessages.data[0];
      
      if (latestResponse && latestResponse.content[0]) {
        const content = latestResponse.content[0];
        if (content.type === 'text') {
          return content.text.value;
        }
      }
    } else {
      console.error('Assistant run failed:', runStatus.status, runStatus.last_error);
      throw new Error(`Assistant run failed with status: ${runStatus.status}`);
    }

    return 'Sorry, ik kon geen antwoord genereren.';
  } catch (error) {
    console.error('Error with assistant response:', error);
    // Fallback to chat completion if assistant fails
    return await generateChatCompletionResponse(messages);
  }
}

async function generateChatCompletionResponse(
  messages: ChatMessage[]
): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5", // the newest OpenAI model is "gpt-5" which was released August 7, 2025
      messages: [
        {
          role: "system",
          content: `Je bent een warme, begripvolle AI ADHD Assistente voor de website "ADHD Coach in de Buurt". 
          
          Je helpt bezoekers met:
          - Vragen over ADHD symptomen en uitdagingen
          - Informatie over wat een ADHD coach kan betekenen
          - Hulp bij het vinden van de juiste professionele ondersteuning
          - Praktische tips voor dagelijks leven met ADHD
          - Emotionele ondersteuning en begrip
          
          Spreek in warme, toegankelijke Nederlandse taal. Wees empathisch maar professioneel.
          Verwijs mensen altijd naar professionele hulp voor diagnoses of behandeling.
          Moedig mensen aan om de ADHD coaches in hun stad te bekijken op de website.`
        },
        ...messages
      ]
    });

    return response.choices[0].message.content || 'Sorry, ik kon geen antwoord genereren.';
  } catch (error) {
    console.error('Error generating chat completion response:', error);
    throw new Error('Failed to generate chat response');
  }
}