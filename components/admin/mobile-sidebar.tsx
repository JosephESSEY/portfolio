"use client"

import { motion, AnimatePresence } from "framer-motion"
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
  XIcon,
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

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
  onLogout: () => void
}

export function MobileSidebar({ isOpen, onClose, onLogout }: MobileSidebarProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 z-50 w-72 bg-card border-r border-border/50 flex flex-col lg:hidden"
          >
            <div className="p-6 border-b border-border/50 flex items-center justify-between">
              <Link href="/admin" className="flex items-center gap-3" onClick={onClose}>
                <div className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center font-bold">
                  AD
                </div>
                <span className="font-semibold text-foreground">Admin</span>
              </Link>
              <button onClick={onClose} className="p-2 rounded-xl hover:bg-secondary transition-colors">
                <XIcon className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
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

            <div className="p-4 border-t border-border/50">
              <button
                onClick={() => {
                  onClose()
                  onLogout()
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors w-full"
              >
                <LogoutIcon className="h-5 w-5" />
                Déconnexion
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
