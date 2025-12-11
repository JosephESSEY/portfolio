import type React from "react"
import { ProfileSidebar } from "@/components/profile-sidebar"
import { NavigationFooter } from "@/components/navigation-footer"
import { getProfile } from "@/lib/data-service"

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const profile = await getProfile()

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background">
      {/* Sidebar gauche - Fixe et non scrollable (Desktop only) */}
      <aside className="hidden lg:flex lg:flex-col lg:w-80 xl:w-96 bg-linear-to-br from-background via-background to-muted/20 border-r border-border/40 sticky top-0 h-screen overflow-hidden">
        {/* Fond décoratif */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-purple-500/5"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <ProfileSidebar profile={profile} />
        </div>
      </aside>

      {/* Version mobile du profil - En haut */}
      <div className="lg:hidden w-full bg-linear-to-br from-background via-background to-muted/20 border-b border-border/40 relative">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-purple-500/5"></div>
        <div className="relative z-10 py-8">
          <ProfileSidebar profile={profile} />
        </div>
      </div>

      {/* Contenu principal - Scrollable */}
      <main className="flex-1 overflow-y-auto w-full">
        <div className="min-h-screen p-6 lg:p-12 pb-32">
          {children}
        </div>
      </main>

      {/* Navigation Footer - Fixe */}
      <NavigationFooter />
    </div>
  )
}
