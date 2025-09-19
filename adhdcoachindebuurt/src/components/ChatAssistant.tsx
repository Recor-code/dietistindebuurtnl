'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, Bot } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ADHDAnalysis {
  summary: string;
  painPoints: string[];
  recommendations: string[];
  urgencyLevel: 'low' | 'medium' | 'high';
  suggestedActions: string[];
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hallo! Ik ben je AI ADHD Assistente. Ik ben hier om je te helpen met vragen over ADHD en om je te ondersteunen bij het vinden van de juiste hulp. Vertel me, waarmee kan ik je vandaag helpen?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<ADHDAnalysis | null>(null);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, er ging iets mis. Probeer het opnieuw.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const generateAnalysis = async () => {
    if (messages.length < 4) return; // Need some conversation first
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: messages.map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) throw new Error('Failed to generate analysis');

      const analysisData = await response.json();
      setAnalysis(analysisData);
      setShowAnalysis(true);
    } catch (error) {
      console.error('Analysis error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2"
        >
          <MessageCircle size={24} />
          <span className="hidden sm:inline">Chat met AI Assistente</span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg border">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bot size={24} />
          <div>
            <h3 className="font-semibold">AI ADHD Assistente</h3>
            <p className="text-blue-100 text-sm">Hier om je te helpen</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-blue-100 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="h-64 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString('nl-NL', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t p-4">
        <div className="flex gap-2 mb-3">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Typ je vraag over ADHD..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
        
        {messages.length > 4 && !showAnalysis && (
          <button
            onClick={generateAnalysis}
            disabled={isLoading}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white py-2 rounded-lg text-sm transition-colors"
          >
            {isLoading ? 'Bezig met analyseren...' : 'Krijg je persoonlijke ADHD analyse'}
          </button>
        )}
      </div>

      {/* Analysis Panel */}
      {showAnalysis && analysis && (
        <div className="border-t bg-green-50 p-4">
          <h4 className="font-semibold text-green-800 mb-3">Je Persoonlijke ADHD Analyse</h4>
          
          <div className="space-y-3 text-sm">
            <div>
              <h5 className="font-medium text-green-700">Samenvatting:</h5>
              <p className="text-green-600">{analysis.summary}</p>
            </div>
            
            {analysis.painPoints.length > 0 && (
              <div>
                <h5 className="font-medium text-green-700">Belangrijkste uitdagingen:</h5>
                <ul className="list-disc list-inside text-green-600">
                  {analysis.painPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {analysis.recommendations.length > 0 && (
              <div>
                <h5 className="font-medium text-green-700">Aanbevelingen:</h5>
                <ul className="list-disc list-inside text-green-600">
                  {analysis.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {analysis.suggestedActions.length > 0 && (
              <div>
                <h5 className="font-medium text-green-700">Concrete volgende stappen:</h5>
                <ul className="list-disc list-inside text-green-600">
                  {analysis.suggestedActions.map((action, index) => (
                    <li key={index}>{action}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="mt-4 pt-3 border-t border-green-200">
            <p className="text-xs text-green-600">
              💡 Bekijk de ADHD coaches in jouw stad voor professionele ondersteuning
            </p>
          </div>
        </div>
      )}
    </div>
  );
}