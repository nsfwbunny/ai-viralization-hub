'use client';

import { useContext } from 'react';
import { LanguageContext } from '@/app/contexts/LanguageContext';
import { translations, TranslationKey } from '@/lib/translations';

export function useLanguage() {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de LanguageProvider');
  }

  const getTranslation = (key: TranslationKey): string => {
    return translations[context.language][key] || key;
  };

  return {
    language: context.language,
    setLanguage: context.setLanguage,
    t: getTranslation,
  };
}
