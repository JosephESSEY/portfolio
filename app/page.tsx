"use client"

import { ProfileSidebar } from "@/components/profile-sidebar"
import { NavigationFooter } from "@/components/navigation-footer"
import { SocialCard } from "@/components/bento/social-card"
import { CtaCard } from "@/components/bento/cta-card"
import { mockProfile, mockSocialLinks } from "@/lib/mock-data"

export default function HomePage() {
  const primarySocialLinks = mockSocialLinks.slice(0, 3)
  const secondarySocialLinks = mockSocialLinks.slice(3)

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background">
      {/* Sidebar gauche - Fixe et non scrollable (Desktop only) */}
      <aside className="hidden lg:flex lg:flex-col lg:w-80 xl:w-96 bg-linear-to-br from-background via-background to-muted/20 border-r border-border/40 sticky top-0 h-screen overflow-hidden">
        {/* Fond décoratif */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-purple-500/5"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <ProfileSidebar profile={mockProfile} />
        </div>
      </aside>

      {/* Version mobile du profil - En haut */}
      <div className="lg:hidden w-full bg-linear-to-br from-background via-background to-muted/20 border-b border-border/40 relative">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-purple-500/5"></div>
        <div className="relative z-10 py-8">
          <ProfileSidebar profile={mockProfile} />
        </div>
      </div>

      {/* Contenu principal - Scrollable */}
      <main className="flex-1 overflow-y-auto w-full">
        <div className="min-h-screen p-6 lg:p-12 pb-24">
          <div className="w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Réseaux sociaux principaux */}
              {primarySocialLinks.map((link, index) => (
                <SocialCard key={link.id} link={link} delay={0.15 + index * 0.1} />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Réseaux sociaux secondaires */}
              {secondarySocialLinks.map((link, index) => (
                <SocialCard key={link.id} link={link} delay={0.3 + index * 0.05} />
              ))}
            </div>

            {/* CTA - Travaillons ensemble */}
            <CtaCard delay={0.4} />
          </div>
        </div>
      </main>

      {/* Navigation Footer - Fixe */}
      <NavigationFooter />
    </div>
  )
}
