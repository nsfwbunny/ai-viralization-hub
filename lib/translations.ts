export const translations = {
  pt: {
    // Geral
    language: "Idioma",
    welcome: "Bem-vindo",
    loading: "Carregando...",
    error: "Erro",
    success: "Sucesso",
    cancel: "Cancelar",
    save: "Salvar",
    delete: "Deletar",
    edit: "Editar",
    back: "Voltar",
    close: "Fechar",
    submit: "Enviar",
    logout: "Sair",

    // Navegação
    home: "Início",
    dashboard: "Dashboard",
    login: "Login",
    register: "Cadastro",
    profile: "Perfil",
    settings: "Configurações",

    // Auth
    email: "Email",
    password: "Senha",
    name: "Nome",
    confirmPassword: "Confirmar Senha",
    signUp: "Cadastrar",
    signIn: "Entrar",
    alreadyHaveAccount: "Já tem conta?",
    dontHaveAccount: "Não tem conta?",
    accountCreated: "Conta criada com sucesso!",
    loginSuccess: "Login realizado com sucesso!",
    loginError: "Erro ao fazer login",
    registerError: "Erro ao cadastrar",
    passwordMismatch: "As senhas não conferem",
    emailAlreadyExists: "Email já cadastrado",
    requiredField: "Campo obrigatório",
    invalidEmail: "Email inválido",
    passwordTooShort: "Senha deve ter pelo menos 6 caracteres",

    // Home
    heroTitle: "500 Criativos IA para Perfis Dark",
    heroDesc: "Transforme seus Reels/TikToks em Máquinas de Vendas: Mansões, Supercarros, Iates de Luxo. Gerados por IA – Virais, Profissionais, R$27 Único. Monetize Agora!",
    buyNow: "Comprar por R$27",
    exploreMore: "Explorar Mais",

    // Features
    feature1Title: "1800+ Vídeos Premium",
    feature1Desc: "Luxúria Lifestyle: Motivação Dark, Riqueza Instantânea. Formatos MP4 Editáveis para Instagram/Pinterest.",
    feature2Title: "Perfis Dark de Alto Impacto",
    feature2Desc: "Criação Automática: Afiliados, Nichos Validados. Direitos Ilimitados – Escala para Milhões de Views.",
    feature3Title: "Monetização Imediata",
    feature3Desc: "ROI Explosivo: De Zero a Lucros Diários. Suporte Multiplataforma – TikTok, YouTube Shorts.",

    // Testimonials
    testimonial1: "Aumentei Seguidores em 10x!",
    testimonial1Author: "Rafael G.",
    testimonial2: "Lucros Diários com Luxúria Reels.",
    testimonial2Author: "Patrícia L.",
    seeMore: "Ver Mais",

    // Pricing
    pricingTitle: "Pacote Criativos Milionários",
    pricingDesc: "500 Assets IA + Guias de Viralização. Oferta Limitada – 80% Off Hoje!",
    price: "R$27",
    limited: "Oferta Limitada",

    // Dashboard
    dashboardTitle: "Dashboard",
    myTemplates: "Meus Templates",
    myStats: "Minhas Estatísticas",
    views: "Visualizações",
    likes: "Curtidas",
    shares: "Compartilhamentos",
    followers: "Seguidores",
    noTemplates: "Nenhum template criado ainda",
    createTemplate: "Criar Template",

    // Messages
    confirmDelete: "Tem certeza que quer deletar?",
    deleted: "Deletado com sucesso",
    updated: "Atualizado com sucesso",
    saved: "Salvo com sucesso",
    noResults: "Nenhum resultado encontrado",
    tryAgain: "Tente Novamente",
    goHome: "Ir para Início",
  },

  en: {
    // General
    language: "Language",
    welcome: "Welcome",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    back: "Back",
    close: "Close",
    submit: "Submit",
    logout: "Logout",

    // Navigation
    home: "Home",
    dashboard: "Dashboard",
    login: "Login",
    register: "Register",
    profile: "Profile",
    settings: "Settings",

    // Auth
    email: "Email",
    password: "Password",
    name: "Name",
    confirmPassword: "Confirm Password",
    signUp: "Sign Up",
    signIn: "Sign In",
    alreadyHaveAccount: "Already have an account?",
    dontHaveAccount: "Don't have an account?",
    accountCreated: "Account created successfully!",
    loginSuccess: "Login successful!",
    loginError: "Login error",
    registerError: "Registration error",
    passwordMismatch: "Passwords do not match",
    emailAlreadyExists: "Email already registered",
    requiredField: "Required field",
    invalidEmail: "Invalid email",
    passwordTooShort: "Password must be at least 6 characters",

    // Home
    heroTitle: "500 AI Creatives for Dark Profiles",
    heroDesc: "Transform Your Reels/TikToks into Sales Machines: Mansions, Supercars, Luxury Yachts. AI-Generated – Viral, Professional, $27 Only. Monetize Now!",
    buyNow: "Buy for $27",
    exploreMore: "Explore More",

    // Features
    feature1Title: "1800+ Premium Videos",
    feature1Desc: "Luxury Lifestyle: Dark Motivation, Instant Wealth. Editable MP4 Formats for Instagram/Pinterest.",
    feature2Title: "High-Impact Dark Profiles",
    feature2Desc: "Automatic Creation: Affiliates, Validated Niches. Unlimited Rights – Scale to Millions of Views.",
    feature3Title: "Immediate Monetization",
    feature3Desc: "Explosive ROI: From Zero to Daily Profits. Multi-Platform Support – TikTok, YouTube Shorts.",

    // Testimonials
    testimonial1: "Increased Followers 10x!",
    testimonial1Author: "Rafael G.",
    testimonial2: "Daily Profits with Luxury Reels.",
    testimonial2Author: "Patrícia L.",
    seeMore: "See More",

    // Pricing
    pricingTitle: "Millionaire Creatives Package",
    pricingDesc: "500 AI Assets + Viralization Guides. Limited Offer – 80% Off Today!",
    price: "$27",
    limited: "Limited Offer",

    // Dashboard
    dashboardTitle: "Dashboard",
    myTemplates: "My Templates",
    myStats: "My Statistics",
    views: "Views",
    likes: "Likes",
    shares: "Shares",
    followers: "Followers",
    noTemplates: "No templates created yet",
    createTemplate: "Create Template",

    // Messages
    confirmDelete: "Are you sure you want to delete?",
    deleted: "Deleted successfully",
    updated: "Updated successfully",
    saved: "Saved successfully",
    noResults: "No results found",
    tryAgain: "Try Again",
    goHome: "Go Home",
  }
};

export type Language = 'pt' | 'en';
export type TranslationKey = keyof typeof translations['pt'];
