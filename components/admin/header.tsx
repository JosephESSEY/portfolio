"use client"
import { MenuIcon, XIcon, UserIcon } from "@/components/icons"
import type { AdminUser } from "@/lib/types"

interface HeaderProps {
  user: AdminUser
  onMenuToggle: () => void
  isMobileMenuOpen: boolean
}

export function AdminHeader({ user, onMenuToggle, isMobileMenuOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-xl hover:bg-secondary transition-colors"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>

        <div className="flex-1" />

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-foreground">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.role}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <UserIcon className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  )
}
