"use client"

import { BentoCard } from "./bento-card"
import { MailIcon, ArrowRightIcon } from "@/components/icons"
import Link from "next/link"
import { useLocale } from "@/lib/locale-context"

interface ContactCardProps {
  email: string
  available: boolean
  delay?: number
}

export function ContactCard({ email, available, delay = 0 }: ContactCardProps) {
  const { t } = useLocale()

  return (
    <BentoCard size="wide" className="bg-foreground text-background" delay={delay} hoverEffect={false}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-background/10">
            <MailIcon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-medium mb-0.5">{t.cards.workTogether}</h3>
            <p className="text-xs text-background/60">{available ? t.hero.available : t.hero.unavailable}</p>
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-background text-foreground font-medium text-xs hover:gap-2 transition-all group"
        >
          {t.cards.contactMe}
          <ArrowRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </BentoCard>
  )
}
