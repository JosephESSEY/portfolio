// Système de traduction pour le portfolio

export const translations = {
  fr: {
    // Page d'accueil
    home: {
      hero: {
        title1: "Créateur d'",
        title2: "expériences digitales",
        title3: "et d'",
        title4: "événements mémorables",
        description: "avec +8 ans d'expérience et passionné, j'offre une expertise unique à 360°. Je conçois des solutions web innovantes et orchestre des événements qui marquent les esprits. Une double compétence rare pour des projets exceptionnels.",
        developerLabel: "Full-Stack Developer",
        plannerLabel: "Event Planner",
      },
      stats: {
        dev: "Années en Dev",
        events: "Événements organisés",
        projects: "Projets réalisés",
        satisfaction: "Satisfaction client",
      },
      expertise: {
        title: "Mon expertise à double facette",
        devTitle: "Développement Web",
        dev1Title: "Applications Full-Stack",
        dev1Desc: "React, Next.js, Node.js, PostgreSQL, API REST",
        dev2Title: "Plateformes E-commerce",
        dev2Desc: "Solutions sur-mesure avec paiement & gestion",
        dev3Title: "Sites Web & Landing Pages",
        dev3Desc: "Design moderne, SEO optimisé, ultra-performant",
        eventTitle: "Event Planning",
        event1Title: "Événements Corporate",
        event1Desc: "Séminaires, conférences, team building",
        event2Title: "Événements Privés",
        event2Desc: "Mariages, anniversaires, célébrations",
        event3Title: "Expériences Digitales",
        event3Desc: "Événements hybrides avec technologies immersives",
      },
      social: {
        title: "Connectons-nous",
      },
    },
    // Navigation
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      events: "Événements",
      services: "Services",
      blog: "Blog",
      contact: "Contact",
    },
    // Profil Sidebar
    profile: {
      createBento: "Create Your Bento",
      login: "Log In",
      available: "Disponible pour de nouveaux projets",
    },
    // Autres sections communes
    common: {
      learnMore: "En savoir plus",
      seeAll: "Voir tout",
      contactMe: "Me contacter",
      sendMessage: "Envoyer un message",
    },
  },
  en: {
    // Home page
    home: {
      hero: {
        title1: "Creator of",
        title2: "digital experiences",
        title3: "and",
        title4: "memorable events",
        description: "with +8 years of experience and passion, I offer a unique 360° expertise. I design innovative web solutions and orchestrate events that leave a lasting impression. A rare dual skill set for exceptional projects.",
        developerLabel: "Full-Stack Developer",
        plannerLabel: "Event Planner",
      },
      stats: {
        dev: "Years in Dev",
        events: "Events Organized",
        projects: "Projects Completed",
        satisfaction: "Client Satisfaction",
      },
      expertise: {
        title: "My Dual Expertise",
        devTitle: "Web Development",
        dev1Title: "Full-Stack Applications",
        dev1Desc: "React, Next.js, Node.js, PostgreSQL, REST API",
        dev2Title: "E-commerce Platforms",
        dev2Desc: "Custom solutions with payment & management",
        dev3Title: "Websites & Landing Pages",
        dev3Desc: "Modern design, SEO optimized, ultra-fast",
        eventTitle: "Event Planning",
        event1Title: "Corporate Events",
        event1Desc: "Seminars, conferences, team building",
        event2Title: "Private Events",
        event2Desc: "Weddings, birthdays, celebrations",
        event3Title: "Digital Experiences",
        event3Desc: "Hybrid events with immersive technologies",
      },
      social: {
        title: "Let's Connect",
      },
    },
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      events: "Events",
      services: "Services",
      blog: "Blog",
      contact: "Contact",
    },
    // Profile Sidebar
    profile: {
      createBento: "Create Your Bento",
      login: "Log In",
      available: "Available for new projects",
    },
    // Other common sections
    common: {
      learnMore: "Learn more",
      seeAll: "See all",
      contactMe: "Contact me",
      sendMessage: "Send message",
    },
  },
}

export type Locale = keyof typeof translations
export type TranslationKeys = typeof translations.fr
