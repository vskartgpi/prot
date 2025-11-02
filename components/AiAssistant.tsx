
import React, { useState, useRef, useEffect } from 'react';
import { chatWithAi } from '../services/geminiService';
import { ChatMessage } from '../types';
import Section from './Section';
import { SparklesIcon, UserIcon, SendIcon } from './Icons';

interface AiAssistantProps {
  id: string;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ id }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Hello! I'm an AI assistant. Ask me anything about Karthikeya's skills and experience." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await chatWithAi(input);
    
    const modelMessage: ChatMessage = { role: 'model', content: aiResponse };
    setMessages(prev => [...prev, modelMessage]);
    setIsLoading(false);
  };

  return (
    <Section title="AI Recruiter Assistant" id={id}>
      <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg shadow-2xl overflow-hidden">
        <div className="p-4 h-96 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role !== 'user' && (
                <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <SparklesIcon className="w-5 h-5 text-sky-400" />
                </div>
              )}
              <div className={`max-w-md p-3 rounded-lg ${
                msg.role === 'user' ? 'bg-sky-600 text-white rounded-br-none' : 'bg-gray-700 text-gray-200 rounded-bl-none'
              }`}>
                <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{msg.content}</p>
              </div>
               {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                  <UserIcon className="w-5 h-5 text-gray-300" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                <SparklesIcon className="w-5 h-5 text-sky-400" />
              </div>
              <div className="max-w-md p-3 rounded-lg bg-gray-700 text-gray-200 rounded-bl-none">
                <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse delay-75"></span>
                    <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse delay-150"></span>
                    <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse delay-300"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 border-t border-gray-700/50">
          <form onSubmit={handleSubmit} className="flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., What is his experience with TypeScript?"
              className="flex-grow bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-sky-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-sky-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition flex items-center"
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default AiAssistant;