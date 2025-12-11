// ============================================================
// MOCK DATA - Replace with PostgreSQL queries later
// ============================================================

import type {
  Profile,
  Project,
  Skill,
  Service,
  SocialLink,
  CustomBlock,
  BlogPost,
  TimelineItem,
  ContactMessage,
} from "./types"

export const mockProfile: Profile = {
  id: "1",
  name: "Joseph ESSEY",
  role: "Full-Stack Developer & Event Planner",
  tagline: "Je crée des expériences digitales innovantes et des événements mémorables",
  bio: `Professionnel aux multiples talents, je combine deux passions : le développement web et l'organisation d'événements. Avec +8 ans d'expérience en développement, je crée des solutions digitales performantes et élégantes. En tant qu'Event Planner, je conçois et orchestre des événements uniques qui marquent les esprits.

Ma double expertise me permet d'apporter une vision 360° à vos projets : des plateformes web sur-mesure pour vos événements, des expériences digitales immersives, et une approche unique alliant technologie et créativité événementielle.`,
  avatarUrl: "/joseph.jpg",
  email: "hello@alexandre.dev",
  location: "Paris, France",
  available: true,
}

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "Luminance",
    description: "Application SaaS de gestion de projets créatifs avec collaboration en temps réel",
    longDescription:
      "Luminance est une plateforme complète pour les équipes créatives. Elle permet de gérer les projets, suivre les tâches, et collaborer en temps réel avec une interface moderne et intuitive.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "WebSocket"],
    imageUrl: "/modern-saas-dashboard-dark-theme.jpg",
    liveUrl: "https://luminance.app",
    githubUrl: "https://github.com/alex/luminance",
    featured: true,
    order: 1,
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Velvet Commerce",
    description: "Plateforme e-commerce headless avec expérience d'achat personnalisée",
    longDescription:
      "Solution e-commerce moderne construite avec une architecture headless pour une flexibilité maximale et des performances optimales.",
    technologies: ["React", "Node.js", "GraphQL", "Stripe", "Algolia"],
    imageUrl: "/elegant-ecommerce-website-minimal.jpg",
    liveUrl: "https://velvet.shop",
    featured: true,
    order: 2,
    createdAt: "2023-11-20",
  },
  {
    id: "3",
    title: "Mindful",
    description: "Application mobile de méditation et bien-être avec IA personnalisée",
    technologies: ["React Native", "TensorFlow", "Firebase", "Node.js"],
    imageUrl: "/meditation-app-mobile-interface-calm.jpg",
    liveUrl: "https://mindful.health",
    featured: true,
    order: 3,
    createdAt: "2023-08-10",
  },
  {
    id: "4",
    title: "DataFlow",
    description: "Dashboard analytique pour visualisation de données en temps réel",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
    imageUrl: "/data-analytics-dashboard-charts-dark.jpg",
    featured: false,
    order: 4,
    createdAt: "2023-05-05",
  },
  {
    id: "5",
    title: "Archetype",
    description: "Système de design open-source pour applications React",
    technologies: ["React", "Storybook", "Tailwind CSS", "Radix UI"],
    imageUrl: "/design-system-library.png",
    githubUrl: "https://github.com/alex/archetype",
    featured: false,
    order: 5,
    createdAt: "2023-03-22",
  },
  {
    id: "6",
    title: "Pulse",
    description: "Outil de monitoring et alerting pour infrastructures cloud",
    technologies: ["Go", "Kubernetes", "Prometheus", "React"],
    imageUrl: "/server-monitoring-dashboard.png",
    featured: false,
    order: 6,
    createdAt: "2022-12-01",
  },
]

export const mockSkills: Skill[] = [
  // Frontend
  { id: "1", name: "React / Next.js", category: "Frontend", level: 95, icon: "react" },
  { id: "2", name: "TypeScript", category: "Frontend", level: 90, icon: "typescript" },
  { id: "3", name: "Vue.js", category: "Frontend", level: 80, icon: "vue" },
  { id: "4", name: "Tailwind CSS", category: "Frontend", level: 95, icon: "tailwind" },
  { id: "5", name: "Framer Motion", category: "Frontend", level: 85, icon: "framer" },
  // Backend
  { id: "6", name: "Node.js", category: "Backend", level: 90, icon: "node" },
  { id: "7", name: "PostgreSQL", category: "Backend", level: 85, icon: "postgresql" },
  { id: "8", name: "GraphQL", category: "Backend", level: 80, icon: "graphql" },
  { id: "9", name: "Python", category: "Backend", level: 75, icon: "python" },
  { id: "10", name: "Docker", category: "Backend", level: 80, icon: "docker" },
  // Design
  { id: "11", name: "Figma", category: "Design", level: 90, icon: "figma" },
  { id: "12", name: "UI/UX Design", category: "Design", level: 85, icon: "design" },
  { id: "13", name: "Motion Design", category: "Design", level: 70, icon: "motion" },
]

export const mockServices: Service[] = [
  {
    id: "1",
    name: "Développement Web",
    description: "Applications web modernes, performantes et scalables avec les dernières technologies",
    icon: "code",
    price: "À partir de 5 000€",
    features: ["Architecture moderne", "Performance optimisée", "SEO-ready", "Responsive design"],
  },
  {
    id: "2",
    name: "Design UI/UX",
    description: "Interfaces élégantes et expériences utilisateur mémorables",
    icon: "palette",
    price: "À partir de 2 500€",
    features: ["Recherche utilisateur", "Wireframes", "Prototypes interactifs", "Design system"],
  },
  {
    id: "3",
    name: "Consulting Technique",
    description: "Accompagnement stratégique et technique pour vos projets digitaux",
    icon: "lightbulb",
    price: "150€/heure",
    features: ["Audit technique", "Architecture", "Code review", "Formation équipe"],
  },
  {
    id: "4",
    name: "MVP & Prototypage",
    description: "Du concept au produit fonctionnel en un temps record",
    icon: "rocket",
    price: "Sur devis",
    features: ["Validation rapide", "Itérations agiles", "Lancement accéléré", "Support post-launch"],
  },
]

export const mockSocialLinks: SocialLink[] = [
  { id: "1", platform: "GitHub", url: "https://github.com/alexandre", icon: "github", username: "@alexandre" },
  {
    id: "2",
    platform: "LinkedIn",
    url: "https://linkedin.com/in/alexandre",
    icon: "linkedin",
    username: "Alexandre Dupont",
  },
  { id: "3", platform: "Twitter", url: "https://twitter.com/alexandre", icon: "twitter", username: "@alexandre_dev" },
  { id: "4", platform: "Dribbble", url: "https://dribbble.com/alexandre", icon: "dribbble", username: "@alexandre" },
  { id: "5", platform: "Email", url: "mailto:hello@alexandre.dev", icon: "mail", username: "hello@alexandre.dev" },
]

export const mockCustomBlocks: CustomBlock[] = [
  {
    id: "1",
    type: "stats",
    title: "Statistiques",
    content: "",
    metadata: {
      stats: [
        { label: "Années d'expérience", value: "8+" },
        { label: "Projets livrés", value: "50+" },
        { label: "Clients satisfaits", value: "40+" },
        { label: "Lignes de code", value: "500k+" },
      ],
    },
    order: 1,
  },
  {
    id: "2",
    type: "quote",
    title: "Citation",
    content: '"Simplicité est la sophistication suprême." — Léonard de Vinci',
    order: 2,
  },
  {
    id: "3",
    type: "achievement",
    title: "Récompense",
    content: "Best Design Award 2024 - Awwwards",
    metadata: { icon: "trophy", year: "2024" },
    order: 3,
  },
]

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Architecture moderne avec Next.js 15",
    slug: "architecture-moderne-nextjs-15",
    excerpt: "Découvrez les meilleures pratiques pour structurer vos applications Next.js en 2024.",
    content: "Contenu complet de l'article...",
    coverImage: "/modern-code-architecture-diagram.jpg",
    publishedAt: "2024-03-15",
    tags: ["Next.js", "Architecture", "React"],
    published: true,
  },
  {
    id: "2",
    title: "Design System : de la théorie à la pratique",
    slug: "design-system-theorie-pratique",
    excerpt: "Comment créer et maintenir un design system efficace pour votre équipe.",
    content: "Contenu complet de l'article...",
    coverImage: "/design-system-components-ui.jpg",
    publishedAt: "2024-02-28",
    tags: ["Design", "UI/UX", "Components"],
    published: true,
  },
  {
    id: "3",
    title: "Performance Web : les métriques qui comptent",
    slug: "performance-web-metriques",
    excerpt: "Un guide complet pour mesurer et optimiser la performance de vos applications.",
    content: "Contenu complet de l'article...",
    coverImage: "/web-performance-metrics-chart.jpg",
    publishedAt: "2024-01-20",
    tags: ["Performance", "Web", "Optimization"],
    published: true,
  },
]

export const mockTimeline: TimelineItem[] = [
  {
    id: "1",
    year: "2024",
    title: "Lead Developer @ TechCorp",
    description: "Direction technique d'une équipe de 8 développeurs",
    type: "work",
  },
  {
    id: "2",
    year: "2022",
    title: "Senior Developer @ StartupX",
    description: "Développement de la plateforme principale",
    type: "work",
  },
  {
    id: "3",
    year: "2020",
    title: "Freelance Full-Stack",
    description: "Lancement de mon activité indépendante",
    type: "work",
  },
  {
    id: "4",
    year: "2018",
    title: "Developer @ AgencyY",
    description: "Création de sites et applications pour clients variés",
    type: "work",
  },
  {
    id: "5",
    year: "2016",
    title: "Master Informatique",
    description: "Université Paris-Saclay - Spécialisation Web",
    type: "education",
  },
]

export const mockMessages: ContactMessage[] = [
  {
    id: "1",
    name: "Marie Martin",
    email: "marie@company.com",
    subject: "Projet e-commerce",
    message: "Bonjour, je souhaiterais discuter d'un projet de refonte de notre boutique en ligne...",
    read: true,
    createdAt: "2024-03-18T10:30:00Z",
  },
  {
    id: "2",
    name: "Pierre Bernard",
    email: "pierre@startup.io",
    subject: "Collaboration",
    message: "Nous cherchons un développeur senior pour un projet innovant...",
    read: false,
    createdAt: "2024-03-17T14:15:00Z",
  },
]


