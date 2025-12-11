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
  title: "Joseph ESSEY | Full-Stack Developer & Event Planner",
  description:
    "Portfolio personnel - Développeur Full-Stack et Designer créant des expériences numériques élégantes et performantes.",
  keywords: ["développeur", "full-stack", "designer", "portfolio", "react", "next.js"],
  authors: [{ name: "Joseph ESSEY" }],
  creator: "Joseph ESSEY",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://josephessey.dev",
    title: "Joseph ESSEY | Full-Stack Developer & Event Planner",
    description: "Portfolio personnel - Développeur Full-Stack et Designer",
    siteName: "Joseph ESSEY",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandre Dupont | Full-Stack Developer & Designer",
    description: "Portfolio personnel - Développeur Full-Stack et Designer",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
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
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
