"use client"

import { BentoGrid } from "@/components/bento/bento-grid"
import { HeroProfileCard } from "@/components/bento/hero-profile-card"
import { SocialCard } from "@/components/bento/social-card"
import { CtaCard } from "@/components/bento/cta-card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { mockProfile, mockSocialLinks } from "@/lib/mock-data"

export default function HomePage() {
  const primarySocialLinks = mockSocialLinks.slice(0, 3) // GitHub, LinkedIn, Email
  const secondarySocialLinks = mockSocialLinks.slice(3) // Twitter, Dribbble

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="min-h-[calc(100vh-70px)] flex items-center justify-center px-4 py-6">
        {/* Layout compact : Photo/Description à gauche, Cards à droite */}
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Section gauche - Photo et Description (compact) */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <HeroSection profile={mockProfile} />
          </div>

          {/* Section droite - Cards (compact) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Réseaux sociaux principaux */}
              {primarySocialLinks.map((link, index) => (
                <SocialCard key={link.id} link={link} delay={0.15 + index * 0.1} />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Réseaux sociaux secondaires */}
              {secondarySocialLinks.map((link, index) => (
                <SocialCard key={link.id} link={link} delay={0.3 + index * 0.05} />
              ))}
            </div>

            {/* CTA - Travaillons ensemble (compact) */}
            <CtaCard delay={0.4} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function HeroSection({ profile }: { profile: typeof mockProfile }) {
  return (
    <div className="text-center lg:text-left max-w-sm">
      {/* Photo compacte avec statut */}
      <div className="relative inline-block mb-4">
        <div className="w-32 h-32 rounded-xl overflow-hidden bg-muted shadow-lg">
          <img
            src={profile.avatarUrl || "/placeholder.svg?height=128&width=128&query=professional developer"}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>
        {profile.available && (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-background"></div>
        )}
      </div>

      {/* Nom compact */}
      <h1 className="text-2xl font-bold text-foreground mb-1">
        {profile.name}
      </h1>

      {/* Rôle compact */}
      <p className="text-lg text-primary font-medium mb-3">
        {profile.role}
      </p>

      {/* Description compacte */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {profile.tagline}
      </p>

      {/* Localisation compacte */}
      <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-muted-foreground">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        {profile.location}
      </div>
    </div>
  )
}
