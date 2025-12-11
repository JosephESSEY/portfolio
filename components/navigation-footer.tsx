"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { HomeIcon, UserIcon, BriefcaseIcon, ServerIcon, MailIcon, NewspaperIcon, CalendarIcon } from "@/components/icons"
import { useTranslation } from "@/hooks/use-translation"

export function NavigationFooter() {
  const pathname = usePathname()
  const { t } = useTranslation()

  const navItems = [
    { href: "/", label: t.nav.home, icon: HomeIcon },
    { href: "/about", label: t.nav.about, icon: UserIcon },
    { href: "/projects", label: t.nav.projects, icon: BriefcaseIcon },
    { href: "/events", label: t.nav.events, icon: CalendarIcon },
    { href: "/services", label: t.nav.services, icon: ServerIcon },
    { href: "/blog", label: t.nav.blog, icon: NewspaperIcon },
    { href: "/contact", label: t.nav.contact, icon: MailIcon },
  ]

  return (
    <footer className="fixed bottom-0 left-0 right-0 lg:left-80 xl:left-96 bg-background/95 backdrop-blur-lg border-t border-border/40 z-50 shadow-lg overflow-x-auto scrollbar-hide">
      <nav className="w-full px-2 py-3 lg:px-4">
        <ul className="flex items-center justify-center gap-1 lg:gap-2 xl:gap-3 min-w-max">
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
                    flex items-center gap-1.5 px-2 py-2 lg:px-3 xl:px-4 rounded-lg font-medium text-xs lg:text-sm
                    transition-all duration-200 whitespace-nowrap
                    ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg scale-105"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                    }
                  `}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="hidden sm:inline truncate">{item.label}</span>
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </nav>
    </footer>
  )
}
