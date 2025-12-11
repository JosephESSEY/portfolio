"use client"

import { ProfileSidebar } from "@/components/profile-sidebar"
import { NavigationFooter } from "@/components/navigation-footer"
import { SocialCard } from "@/components/bento/social-card"
import { CtaCard } from "@/components/bento/cta-card"
import { mockProfile, mockSocialLinks } from "@/lib/mock-data"
import { useTranslation } from "@/hooks/use-translation"
import { BentoGrid } from "@/components/bento/bento-grid"
import { ServiceCard } from "@/components/bento/service-card"
import { ContactCard } from "@/components/bento/contact-card"

export default function HomePage() {
  const { t } = useTranslation()
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
        <div className="min-h-screen p-6 lg:p-12 pb-32">
          <div className="w-full max-w-5xl mx-auto space-y-8">
            {/* Hero Section avec accroche */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold bg-linear-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent leading-tight">
                {t.home.hero.title1}{" "}
                <span className="text-primary">{t.home.hero.title2}</span> {t.home.hero.title3}{" "}
                <span className="text-purple-500">{t.home.hero.title4}</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                <strong>{t.home.hero.developerLabel}</strong> {t.home.hero.description}
              </p>
            </div>

            {/* Stats rapides */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all">
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">{t.home.stats.dev}</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
                <div className="text-3xl font-bold text-purple-500 mb-2">50+</div>
                <div className="text-sm text-muted-foreground">{t.home.stats.events}</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">{t.home.stats.projects}</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10 transition-all">
                <div className="text-3xl font-bold text-emerald-500 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">{t.home.stats.satisfaction}</div>
              </div>
            </div>

            {/* Ce que je fais */}
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{t.home.expertise.title}</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                {/* DÉVELOPPEMENT */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{t.home.expertise.devTitle}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-lg p-4 hover:border-primary hover:shadow-md hover:bg-card transition-all">
                      <h4 className="font-semibold text-foreground mb-1">{t.home.expertise.dev1Title}</h4>
                      <p className="text-sm text-muted-foreground">{t.home.expertise.dev1Desc}</p>
                    </div>
                    <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-lg p-4 hover:border-primary hover:shadow-md hover:bg-card transition-all">
                      <h4 className="font-semibold text-foreground mb-1">{t.home.expertise.dev2Title}</h4>
                      <p className="text-sm text-muted-foreground">{t.home.expertise.dev2Desc}</p>
                    </div>
                    <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-lg p-4 hover:border-primary hover:shadow-md hover:bg-card transition-all">
                      <h4 className="font-semibold text-foreground mb-1">{t.home.expertise.dev3Title}</h4>
                      <p className="text-sm text-muted-foreground">{t.home.expertise.dev3Desc}</p>
                    </div>
                  </div>
                </div>

                {/* EVENT PLANNING */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{t.home.expertise.eventTitle}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-lg p-4 hover:border-purple-500 hover:shadow-md hover:bg-card transition-all">
                      <h4 className="font-semibold text-foreground mb-1">{t.home.expertise.event1Title}</h4>
                      <p className="text-sm text-muted-foreground">{t.home.expertise.event1Desc}</p>
                    </div>
                    <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-lg p-4 hover:border-purple-500 hover:shadow-md hover:bg-card transition-all">
                      <h4 className="font-semibold text-foreground mb-1">{t.home.expertise.event2Title}</h4>
                      <p className="text-sm text-muted-foreground">{t.home.expertise.event2Desc}</p>
                    </div>
                    <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-lg p-4 hover:border-purple-500 hover:shadow-md hover:bg-card transition-all">
                      <h4 className="font-semibold text-foreground mb-1">{t.home.expertise.event3Title}</h4>
                      <p className="text-sm text-muted-foreground">{t.home.expertise.event3Desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{t.home.social.title}</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {mockSocialLinks.map((link, index) => (
                  <SocialCard key={link.id} link={link} delay={0.15 + index * 0.1} />
                ))}
              </div>
            </div>

            <BentoGrid>
              <ContactCard email={mockProfile.email} available={mockProfile.available} />
            </BentoGrid>

          </div>
        </div>
      </main>

      {/* Navigation Footer - Fixe */}
      <NavigationFooter />
    </div>
  )
}
