"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { HomeIcon, UserIcon, BriefcaseIcon, ServerIcon, MailIcon, NewspaperIcon } from "@/components/icons"

const navItems = [
  { href: "/", label: "Accueil", icon: HomeIcon },
  { href: "/about", label: "À propos", icon: UserIcon },
  { href: "/projects", label: "Projets", icon: BriefcaseIcon },
  { href: "/services", label: "Services", icon: ServerIcon },
  { href: "/blog", label: "Blog", icon: NewspaperIcon },
  { href: "/contact", label: "Contact", icon: MailIcon },
]

export function NavigationFooter() {
  const pathname = usePathname()

  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full bg-background/95 backdrop-blur-lg border-t border-border/40 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <ul className="flex items-center justify-center gap-2 lg:gap-4 flex-wrap">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg scale-105"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </nav>
    </footer>
  )
}
