// Using the javascript_openai integration
import OpenAI from "openai";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
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

export async function generateChatResponse(
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
    console.error('Error generating chat response:', error);
    throw new Error('Failed to generate chat response');
  }
}