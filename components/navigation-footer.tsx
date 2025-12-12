"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { HomeIcon, UserIcon, BriefcaseIcon, ServerIcon, MailIcon, NewspaperIcon, CalendarIcon, TrophyIcon } from "@/components/icons"
import { useTranslation } from "@/hooks/use-translation"
import { useState } from "react"

export function NavigationFooter() {
  const pathname = usePathname()
  const { t } = useTranslation()
  const [isAwardsOpen, setIsAwardsOpen] = useState(false)

  const navItems = [
    { href: "/", label: t.nav.home, icon: HomeIcon },
    { href: "/about", label: t.nav.about, icon: UserIcon },
    { href: "/projects", label: t.nav.projects, icon: BriefcaseIcon },
    { href: "/events", label: t.nav.events, icon: CalendarIcon },
    { href: "/services", label: t.nav.services, icon: ServerIcon },
    { href: "/blog", label: t.nav.blog, icon: NewspaperIcon },
    { href: "/contact", label: t.nav.contact, icon: MailIcon },
  ]

  const awardsSubItems = [
    { href: "/awards", label: t.nav.awards || "Awards" },
    { href: "/certifications", label: t.nav.certifications || "Certifications" },
  ]

  return (
    <footer className="fixed bottom-0 left-0 right-0 lg:left-80 xl:left-96 bg-background/95 backdrop-blur-lg border-t border-border/40 shadow-lg overflow-visible" style={{ zIndex: 9999 }}>
      <nav className="w-full px-2 py-3 lg:px-4">
        <ul className="flex items-center justify-center gap-1 lg:gap-2 xl:gap-3 relative">
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
          
          {/* Awards dropdown */}
          <motion.li
            className="relative z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
          >
            <div
              onMouseEnter={() => setIsAwardsOpen(true)}
              onMouseLeave={() => setIsAwardsOpen(false)}
              className="relative"
            >
              <button
                className={`
                  flex items-center gap-1.5 px-2 py-2 lg:px-3 xl:px-4 rounded-lg font-medium text-xs lg:text-sm
                  transition-all duration-200 whitespace-nowrap
                  ${
                    pathname.startsWith("/awards") || pathname.startsWith("/certifications")
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }
                `}
              >
                <TrophyIcon className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline truncate">Awards</span>
              </button>

              <AnimatePresence>
                {isAwardsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full mb-2 right-0 bg-card border-2 border-border rounded-lg shadow-2xl overflow-hidden min-w-[180px]"
                    style={{ zIndex: 9999 }}
                  >
                    {awardsSubItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`
                          block px-4 py-3 text-sm font-medium transition-colors
                          ${
                            pathname === subItem.href
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground hover:bg-muted"
                          }
                        `}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.li>
        </ul>
      </nav>
    </footer>
  )
}
