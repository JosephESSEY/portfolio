"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useState } from "react"
import { HomeIcon, UserIcon, BriefcaseIcon, MailIcon } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { LocaleToggle } from "@/components/locale-toggle"
import { useLocale } from "@/lib/locale-context"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const { t } = useLocale()

  const links = [
    { href: "/", label: t.nav.home, icon: HomeIcon },
    { href: "/about", label: t.nav.about, icon: UserIcon },
    { href: "/projects", label: t.nav.projects, icon: BriefcaseIcon },
    { href: "/contact", label: t.nav.contact, icon: MailIcon },
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-5xl px-4 pt-3">
          <div className="flex items-center justify-between h-10 px-4 rounded-full bg-card/70 backdrop-blur-xl border border-border/30 shadow-sm">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 text-foreground">
              <span className="font-semibold text-sm">A.</span>
            </Link>

            {/* Desktop Nav */}
            <div className="flex items-center gap-0.5">
              {links.map((link) => {
                const Icon = link.icon
                const isActive = pathname.split("/").some(part => part === link.href.replace("/", ""))
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5",
                      isActive
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1">
              <LocaleToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border/50">
        <div className="flex items-center justify-around px-4 py-3">
          {links.map((link) => {
            const Icon = link.icon
            const isActive = pathname.split("/").some(part => part === link.href.replace("/", ""))
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex flex-col items-center gap-1.5 px-4 py-2 rounded-xl transition-all duration-200",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs font-medium">{link.label}</span>
              </Link>
            )
          })}
          
          {/* Controls */}
          <div className="flex flex-col items-center gap-2 px-2">
            <div className="flex items-center gap-1.5">
              <LocaleToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for mobile */}
      <div className="md:hidden h-20" />
    </>
  )
}
