// Translations for PT and EN
export const translations = {
  pt: {
    welcome: 'Bem-vindo',
    login: 'Entrar',
    logout: 'Sair',
    register: 'Registrar',
    email: 'E-mail',
    password: 'Senha',
    confirmPassword: 'Confirmar Senha',
    dashboard: 'Painel',
    profile: 'Perfil',
    settings: 'Configurações',
    language: 'Idioma',
    portuguese: 'Português',
    english: 'English',
    selectLanguage: 'Selecionar Idioma',
  },
  en: {
    welcome: 'Welcome',
    login: 'Login',
    logout: 'Logout',
    register: 'Register',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    dashboard: 'Dashboard',
    profile: 'Profile',
    settings: 'Settings',
    language: 'Language',
    portuguese: 'Português',
    english: 'English',
    selectLanguage: 'Select Language',
  },
};

export type Language = 'pt' | 'en';

export const getTranslation = (language: Language, key: keyof typeof translations.pt) => {
  return translations[language][key] || translations.en[key] || key;
};
