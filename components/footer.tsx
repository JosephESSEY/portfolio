"use client"

import { useLocale } from "@/lib/locale-context"

export function Footer() {
  const { t } = useLocale()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/30">
      <div className="mx-auto max-w-2xl px-4 py-4">
        <p className="text-xs text-center text-muted-foreground">© {currentYear} Alexandre Dupont</p>
      </div>
    </footer>
  )
}
