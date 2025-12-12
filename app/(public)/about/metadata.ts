import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "À propos",
  description: "Découvrez le parcours de Joseph ESSEY, Backend Developer spécialisé en Node.js, Python et PostgreSQL. Organisateur d'événements tech et formateur passionné avec +8 ans d'expérience.",
  keywords: [
    "parcours Joseph ESSEY",
    "expérience backend developer",
    "formation développeur",
    "timeline carrière",
    "expertise Node.js Python",
    "compétences backend",
    "certifications développeur"
  ],
  openGraph: {
    title: "À propos de Joseph ESSEY | Le Dev Absolu",
    description: "Parcours professionnel, expertise backend, organisation d'événements tech et formations.",
    url: "https://josephessey.dev/about",
    type: "profile",
    images: ["/joseph.jpg"],
  },
  alternates: {
    canonical: "https://josephessey.dev/about",
  },
}
