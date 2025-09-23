// Using the javascript_openai integration
import OpenAI from "openai";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Assistant configuration
const ASSISTANT_ID = process.env.OPENAI_ASSISTANT_ID;
const USE_ASSISTANTS = !!ASSISTANT_ID;

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export function getAssistantStatus(): { usingAssistant: boolean; assistantId?: string } {
  return {
    usingAssistant: USE_ASSISTANTS,
    assistantId: ASSISTANT_ID || undefined
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
    if (USE_ASSISTANTS && ASSISTANT_ID) {
      return await generateAssistantResponse(messages, sessionId);
    } else {
      return await generateChatCompletionResponse(messages);
    }
  } catch (error) {
    console.error('Error generating chat response:', error);
    throw new Error('Failed to generate chat response');
  }
}

// New streaming function - ALWAYS use chat completions for real-time streaming
export async function generateStreamingChatResponse(
  messages: ChatMessage[],
  sessionId: string = 'default'
): Promise<ReadableStream<Uint8Array>> {
  const encoder = new TextEncoder();
  
  return new ReadableStream({
    async start(controller) {
      try {
        // ALWAYS use streaming chat completions for real-time response (not Assistant API)
        const stream = await openai.chat.completions.create({
          model: "gpt-4o", // Use reliable model
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
          temperature: 0.7,
          max_tokens: 1000
        });

        for await (const chunk of stream) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            controller.enqueue(encoder.encode(content));
          }
        }
        
        controller.close();
      } catch (error) {
        console.error('Streaming error:', error);
        controller.enqueue(encoder.encode('Sorry, er ging iets mis. Probeer het opnieuw.'));
        controller.close();
      }
    }
  });
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
      assistant_id: ASSISTANT_ID!
    });

    // Wait for completion
    let runStatus = run;
    
    while (runStatus.status === 'queued' || runStatus.status === 'in_progress') {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const retrievedRun = await openai.beta.threads.runs.retrieve(threadId, { run_id: run.id });
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