'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

const LanguageContext = createContext({
  lang: 'fr',
  setLang: (lang: string) => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState('fr');
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);