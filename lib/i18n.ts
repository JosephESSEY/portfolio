// ============================================================
// INTERNATIONALIZATION - French & English
// ============================================================

export type Locale = "fr" | "en"

export const translations = {
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      services: "Services",
      blog: "Blog",
      contact: "Contact",
    },
    // Hero
    hero: {
      available: "Disponible pour de nouveaux projets",
      unavailable: "Actuellement occupé",
      greeting: "Bonjour, je suis",
      scrollDown: "Défiler",
    },
    // Cards
    cards: {
      about: "À propos",
      learnMore: "En savoir plus",
      projects: "Projets",
      viewAll: "Voir tout",
      skills: "Compétences",
      services: "Services",
      contact: "Contact",
      contactMe: "Me contacter",
      workTogether: "Travaillons ensemble",
      stats: "Statistiques",
      experience: "Expérience",
    },

    // Stats
    stats: {
      yearsExp: "Années d'expérience",
      projects: "Projets livrés",
      clients: "Clients satisfaits",
      linesOfCode: "Lignes de code",
    },
    // Contact
    contact: {
      title: "Me contacter",
      subtitle: "Une idée de projet ? Discutons-en !",
      name: "Nom",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer",
      sending: "Envoi...",
      success: "Message envoyé avec succès !",
      error: "Une erreur est survenue",
    },
    // Footer
    footer: {
      rights: "Tous droits réservés",
      madeWith: "Fait avec",
    },
    // Theme
    theme: {
      light: "Clair",
      dark: "Sombre",
      system: "Système",
    },
    // Common
    common: {
      readMore: "Lire plus",
      backHome: "Retour à l'accueil",
      loading: "Chargement...",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      services: "Services",
      blog: "Blog",
      contact: "Contact",
    },
    // Hero
    hero: {
      available: "Available for new projects",
      unavailable: "Currently busy",
      greeting: "Hi, I'm",
      scrollDown: "Scroll down",
    },
    // Cards
    cards: {
      about: "About",
      learnMore: "Learn more",
      projects: "Projects",
      viewAll: "View all",
      skills: "Skills",
      services: "Services",
      contact: "Contact",
      contactMe: "Contact me",
      workTogether: "Let's work together",
      stats: "Statistics",
      experience: "Experience",
    },

    // Stats
    stats: {
      yearsExp: "Years of experience",
      projects: "Projects delivered",
      clients: "Happy clients",
      linesOfCode: "Lines of code",
    },
    // Contact
    contact: {
      title: "Contact me",
      subtitle: "Have a project idea? Let's discuss!",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "An error occurred",
    },
    // Footer
    footer: {
      rights: "All rights reserved",
      madeWith: "Made with",
    },
    // Theme
    theme: {
      light: "Light",
      dark: "Dark",
      system: "System",
    },
    // Common
    common: {
      readMore: "Read more",
      backHome: "Back home",
      loading: "Loading...",
    },
  },
}

export function getTranslation(locale: Locale) {
  return translations[locale]
}
