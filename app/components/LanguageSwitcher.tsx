'use client';

import { useLanguage } from '@/app/hooks/useLanguage';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div style={{
      display: 'flex',
      gap: '0.5rem',
      padding: '0.75rem',
      background: 'rgba(0, 0, 0, 0.6)',
      borderRadius: '8px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(212, 175, 55, 0.2)',
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      zIndex: 1000,
    }}>
      <button
        onClick={() => setLanguage('pt')}
        aria-label="Português"
        style={{
          padding: '0.5rem 0.8rem',
          background: language === 'pt' ? 'rgba(212, 175, 55, 0.3)' : 'rgba(212, 175, 55, 0.1)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          color: language === 'pt' ? '#fff' : '#d4af37',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '0.85rem',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          boxShadow: language === 'pt' ? '0 0 15px rgba(212, 175, 55, 0.5)' : 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)';
          e.currentTarget.style.boxShadow = '0 0 10px rgba(212, 175, 55, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = language === 'pt' ? 'rgba(212, 175, 55, 0.3)' : 'rgba(212, 175, 55, 0.1)';
          e.currentTarget.style.boxShadow = language === 'pt' ? '0 0 15px rgba(212, 175, 55, 0.5)' : 'none';
        }}
      >
        🇧🇷 PT
      </button>
      <button
        onClick={() => setLanguage('en')}
        aria-label="English"
        style={{
          padding: '0.5rem 0.8rem',
          background: language === 'en' ? 'rgba(212, 175, 55, 0.3)' : 'rgba(212, 175, 55, 0.1)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          color: language === 'en' ? '#fff' : '#d4af37',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '0.85rem',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          boxShadow: language === 'en' ? '0 0 15px rgba(212, 175, 55, 0.5)' : 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)';
          e.currentTarget.style.boxShadow = '0 0 10px rgba(212, 175, 55, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = language === 'en' ? 'rgba(212, 175, 55, 0.3)' : 'rgba(212, 175, 55, 0.1)';
          e.currentTarget.style.boxShadow = language === 'en' ? '0 0 15px rgba(212, 175, 55, 0.5)' : 'none';
        }}
      >
        🇺🇸 EN
      </button>
    </div>
  );
}
