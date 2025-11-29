"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  SparklesIcon,
  InboxIcon,
  LogoutIcon,
  GridIcon,
  LinkIcon,
  DocumentIcon,
  ClockIcon,
} from "@/components/icons"

const navItems = [
  { href: "/admin", label: "Dashboard", icon: HomeIcon },
  { href: "/admin/profile", label: "Profil", icon: UserIcon },
  { href: "/admin/projects", label: "Projets", icon: FolderIcon },
  { href: "/admin/skills", label: "Compétences", icon: SparklesIcon },
  { href: "/admin/services", label: "Services", icon: GridIcon },
  { href: "/admin/social", label: "Réseaux sociaux", icon: LinkIcon },
  { href: "/admin/blocks", label: "Blocs personnalisés", icon: GridIcon },
  { href: "/admin/blog", label: "Blog", icon: DocumentIcon },
  { href: "/admin/timeline", label: "Parcours", icon: ClockIcon },
  { href: "/admin/messages", label: "Messages", icon: InboxIcon },
]

interface SidebarProps {
  onLogout: () => void
}

export function Sidebar({ onLogout }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-30 w-64 bg-card border-r border-border/50 flex flex-col">
      <div className="p-6 border-b border-border/50">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center font-bold">
            AD
          </div>
          <div>
            <p className="font-semibold text-foreground">Portfolio Admin</p>
            <p className="text-xs text-muted-foreground">Backoffice</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                isActive
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-border/50 space-y-1">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
        >
          <HomeIcon className="h-5 w-5" />
          Voir le site
        </Link>
        <button
          onClick={onLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors w-full"
        >
          <LogoutIcon className="h-5 w-5" />
          Déconnexion
        </button>
      </div>
    </aside>
  )
}
