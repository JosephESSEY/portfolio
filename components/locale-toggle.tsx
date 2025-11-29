"use client"

import { useLocale } from "@/lib/locale-context"
import { GlobeIcon } from "@/components/icons"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"

export function LocaleToggle() {
  const { locale, setLocale } = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const locales = [
    { value: "fr" as const, label: "Français", flag: "🇫🇷" },
    { value: "en" as const, label: "English", flag: "🇬🇧" },
  ]

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-card border border-border/50 hover:border-border transition-colors text-sm font-medium"
        aria-label="Change language"
      >
        <GlobeIcon className="h-4 w-4 text-muted-foreground" />
        <span className="uppercase text-foreground">{locale}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 p-1 bg-card border border-border rounded-xl shadow-lg z-50 min-w-[140px]"
          >
            {locales.map((l) => (
              <button
                key={l.value}
                onClick={() => {
                  setLocale(l.value)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                  locale === l.value
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                }`}
              >
                <span>{l.flag}</span>
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
