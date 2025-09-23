'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X } from 'lucide-react';

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
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<ADHDAnalysis | null>(null);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Initialize messages only on client side to avoid hydration mismatch
  useEffect(() => {
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: 'Hallo! Ik ben hier om je te helpen de juiste ADHD ondersteuning te vinden. Kun je me vertellen wat je zoekt? Bijvoorbeeld hulp voor jezelf of je kind, welke problemen je ervaart, of waar je woont?',
        timestamp: new Date()
      }
    ]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    console.log('🔄 Sending message...', inputValue.trim());

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Create a placeholder message for streaming content
    const assistantMessageId = (Date.now() + 1).toString();
    const assistantMessage: Message = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, assistantMessage]);

    try {
      console.log('📡 Making API request to /api/chat');
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

      console.log('📨 Response received:', response.status, response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ API Error:', errorText);
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No reader available for streaming');
      }

      console.log('🌊 Starting stream processing...');
      let streamedContent = '';
      let chunkCount = 0;

      while (true) {
        const { done, value } = await reader.read();
        
        if (done) {
          console.log('✅ Stream complete! Total chunks:', chunkCount);
          break;
        }
        
        const chunk = decoder.decode(value, { stream: true });
        streamedContent += chunk;
        chunkCount++;
        
        console.log(`📦 Chunk ${chunkCount}:`, chunk);
        
        // Update the assistant message with new content
        setMessages(prev => 
          prev.map(msg => 
            msg.id === assistantMessageId 
              ? { ...msg, content: streamedContent }
              : msg
          )
        );
      }
    } catch (error) {
      console.error('❌ Chat error:', error);
      // Update the assistant message with error
      setMessages(prev => 
        prev.map(msg => 
          msg.id === assistantMessageId 
            ? { ...msg, content: `Sorry, er ging iets mis: ${error instanceof Error ? error.message : 'Unknown error'}` }
            : msg
        )
      );
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
          className="bg-sky-400 hover:bg-sky-500 text-white p-4 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2"
        >
          <MessageCircle size={24} />
          <span className="hidden sm:inline">Hoi! Ik ben jouw ADHD Assistente</span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[800px] mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 relative">
      {/* Messages */}
      <div className="h-48 overflow-y-auto p-4 space-y-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.role === 'assistant' && (
              <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                E
              </div>
            )}
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.role === 'user'
                  ? 'bg-sky-400 text-white rounded-br-md'
                  : 'bg-gray-100 text-gray-800 rounded-bl-md'
              }`}
            >
              <p>{message.content}</p>
              <p className={`text-xs mt-1 ${message.role === 'user' ? 'text-sky-100' : 'text-gray-500'}`}>
                {message.timestamp.toLocaleTimeString('nl-NL', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
            {message.role === 'user' && (
              <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                U
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start gap-3 justify-start">
            <div className="w-8 h-8 bg-slate-400 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
              E
            </div>
            <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md">
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
      <div className="border-t border-gray-100 p-6">
        <div className="flex gap-3 mb-4">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type hier je vraag of situatie..."
            className="flex-1 border border-gray-200 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="bg-sky-500 hover:bg-sky-600 disabled:bg-gray-300 text-white p-3 rounded-full transition-colors flex items-center justify-center"
          >
            <Send size={18} />
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