// Système de traduction pour le portfolio

export const translations = {
  fr: {
    // Page d'accueil
    home: {
      hero: {
        title1: "Backend Developer",
        title2: "Tech Event Planner",
        title3: "&",
        title4: "Formateur",
        description: "Triple expertise unique : j'architecture des systèmes backend performants (APIs, databases, cloud), j'orchestre des événements tech mémorables (conférences, hackathons, meetups) et je forme des développeurs aux technologies modernes. +8 ans d'expérience.",
        developerLabel: "Backend Developer",
        plannerLabel: "Tech Event Planner & Formateur",
      },
      stats: {
        dev: "Années en Dev",
        events: "Événements organisés",
        projects: "Projets réalisés",
        satisfaction: "Satisfaction client",
      },
      expertise: {
        title: "Mon expertise à double facette",
        devTitle: "Architecture Backend",
        dev1Title: "APIs & Microservices",
        dev1Desc: "Node.js, Python, GraphQL, REST, WebSocket, gRPC",
        dev2Title: "Bases de Données & Cache",
        dev2Desc: "PostgreSQL, MongoDB, Redis, optimisation de requêtes",
        dev3Title: "Cloud & DevOps",
        dev3Desc: "Docker, Kubernetes, CI/CD, AWS, Azure, monitoring",
        eventTitle: "Tech Event Planning",
        event1Title: "Conférences & Meetups Tech",
        event1Desc: "Événements développeurs, talks tech, networking",
        event2Title: "Hackathons & Workshops",
        event2Desc: "Compétitions de code, formations techniques",
        event3Title: "Séminaires Corporate Tech",
        event3Desc: "Team building tech, innovation labs, démos produits",
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
      awards: "Awards",
      certifications: "Certifications",
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
        title1: "Backend Developer",
        title2: "Tech Event Planner",
        title3: "&",
        title4: "Trainer",
        description: "Unique triple expertise: I architect high-performance backend systems (APIs, databases, cloud), orchestrate memorable tech events (conferences, hackathons, meetups) and train developers in modern technologies. +8 years of experience.",
        developerLabel: "Backend Developer",
        plannerLabel: "Tech Event Planner & Trainer",
      },
      stats: {
        dev: "Years in Dev",
        events: "Events Organized",
        projects: "Projects Completed",
        satisfaction: "Client Satisfaction",
      },
      expertise: {
        title: "My Technical Expertise",
        devTitle: "Backend Architecture",
        dev1Title: "APIs & Microservices",
        dev1Desc: "Node.js, Python, GraphQL, REST, WebSocket, gRPC",
        dev2Title: "Databases & Cache",
        dev2Desc: "PostgreSQL, MongoDB, Redis, query optimization",
        dev3Title: "Cloud & DevOps",
        dev3Desc: "Docker, Kubernetes, CI/CD, AWS, Azure, monitoring",
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
      awards: "Awards",
      certifications: "Certifications",
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
