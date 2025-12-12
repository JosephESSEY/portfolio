import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/lib/theme-context"
import { LocaleProvider } from "@/lib/locale-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://josephessey.dev'),
  title: {
    default: "Joseph ESSEY | Backend Developer, Tech Event Planner & Formateur | Le Dev Absolu",
    template: "%s | Joseph ESSEY - Le Dev Absolu"
  },
  description:
    "Joseph ESSEY, Le Dev Absolu - Backend Developer spécialisé en Node.js, Python, PostgreSQL & Redis. Organisateur d'événements tech (conférences, hackathons, meetups) et formateur expert. +8 ans d'expérience. Le développeur le plus transparent du game.",
  keywords: [
    "Joseph ESSEY",
    "Le Dev Absolu",
    "backend developer",
    "développeur backend",
    "Node.js expert",
    "Python developer",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "microservices",
    "API REST",
    "GraphQL",
    "Docker",
    "Kubernetes",
    "tech event planner",
    "organisateur événements tech",
    "conférences tech",
    "hackathons",
    "meetups développeurs",
    "formateur développeurs",
    "formation backend",
    "workshops Node.js",
    "bootcamp développement web",
    "freelance backend",
    "consultant backend",
    "architecture backend",
    "cloud AWS",
    "Azure",
    "CI/CD",
    "DevOps",
    "Lomé",
    "Togo",
    "développeur Togo",
    "backend developer Togo",
    "tech Afrique"
  ],
  authors: [{ name: "Joseph ESSEY", url: "https://josephessey.dev" }],
  creator: "Joseph ESSEY",
  publisher: "Joseph ESSEY",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://josephessey.dev",
    title: "Joseph ESSEY | Backend Developer, Tech Event Planner & Formateur | Le Dev Absolu",
    description: "Backend Developer spécialisé en Node.js, Python, PostgreSQL. Organisateur d'événements tech et formateur expert. +8 ans d'expérience.",
    siteName: "Joseph ESSEY - Le Dev Absolu",
    images: [
      {
        url: "https://josephessey.dev/joseph.jpg",
        width: 1200,
        height: 630,
        alt: "Joseph ESSEY - Le Dev Absolu - Backend Developer & Tech Event Planner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph ESSEY | Backend Developer & Tech Event Planner | Le Dev Absolu",
    description: "Backend Developer spécialisé en Node.js, Python, PostgreSQL. Organisateur d'événements tech et formateur. Le développeur le plus transparent du game.",
    creator: "@josephessey",
    images: ["https://josephessey.dev/joseph.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://josephessey.dev",
    languages: {
      'fr-FR': 'https://josephessey.dev',
      'en-US': 'https://josephessey.dev/en',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
  icons: {
    icon: [
      { url: "/joseph.jpg" },
    ],
    apple: "/joseph.jpg",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1f" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Joseph ESSEY",
    "alternateName": "Le Dev Absolu",
    "description": "Backend Developer, Tech Event Planner & Formateur",
    "url": "https://josephessey.dev",
    "image": "https://josephessey.dev/joseph.jpg",
    "jobTitle": "Backend Developer & Tech Event Planner",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsAbout": [
      "Node.js", "Python", "PostgreSQL", "MongoDB", "Redis",
      "API REST", "GraphQL", "Microservices", "Docker", "Kubernetes"
    ],
    "sameAs": [
      "https://github.com/josephessey",
      "https://linkedin.com/in/josephessey",
      "https://twitter.com/josephessey"
    ]
  }

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
