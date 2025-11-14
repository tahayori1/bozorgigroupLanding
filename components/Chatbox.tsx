import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { ChatMessage } from '../types';

interface ChatboxProps {
  isHidden: boolean;
}

const Chatbox: React.FC<ChatboxProps> = ({ isHidden }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatboxRef = useRef<HTMLDivElement>(null);
  const { t, locale } = useLanguage();
  const initialMessage = t['chatbox.initialMessage'];

  useEffect(() => {
    if (initialMessage) {
      setMessages([
        { id: Date.now(), text: initialMessage, sender: 'bot' }
      ]);
    }
  }, [locale, initialMessage]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Close chat window if parent component requests it to be hidden (e.g. mobile menu opens)
  useEffect(() => {
    if (isHidden) {
      setIsOpen(false);
    }
  }, [isHidden]);

  // Focus trapping for accessibility
  useEffect(() => {
    if (!isOpen) return;

    const focusableElements = chatboxRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else { // Tab
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    
    firstElement?.focus();

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', handleEscape);
    };

  }, [isOpen]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate a bot response after a short delay
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        text: t['chatbox.cannedResponse'],
        sender: 'bot',
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <>
      <div className={`fixed bottom-5 transition-all duration-300 z-50 ${locale === 'ar' ? 'left-5' : 'right-5'} ${isHidden ? 'opacity-0 scale-75 pointer-events-none' : ''}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transform transition-transform hover:scale-110"
          aria-label={t['chatbox.title']}
          aria-expanded={isOpen}
          aria-controls="chatbox-window"
          tabIndex={isHidden ? -1 : 0}
        >
          {isOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="chatbox-window"
        ref={chatboxRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="chatbox-header"
        className={`fixed bottom-24 z-50 w-[90vw] max-w-sm h-[60vh] bg-card text-card-foreground border border-border rounded-lg shadow-2xl flex flex-col transition-all duration-300 ease-in-out ${locale === 'ar' ? 'left-5' : 'right-5'} ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <header className="flex items-center justify-between p-4 border-b border-border bg-muted/50 rounded-t-lg">
          <h3 id="chatbox-header" className="text-lg font-bold">{t['chatbox.title']}</h3>
          <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded" aria-label={t['chatbox.close']}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </header>

        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-md lg:max-w-xs px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted text-muted-foreground rounded-bl-none'}`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-end gap-2 justify-start">
                  <div className={`max-w-xs px-4 py-2 rounded-2xl rounded-bl-none bg-muted`}>
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                          <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></span>
                          <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></span>
                          <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></span>
                      </div>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t['chatbox.placeholder']}
              aria-label={t['chatbox.placeholder']}
              className="flex-1 w-full bg-muted text-foreground px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-ring"
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !inputValue.trim()} className="w-10 h-10 flex-shrink-0 bg-primary text-primary-foreground rounded-full flex items-center justify-center disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" aria-label={t['chatbox.send']}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chatbox;