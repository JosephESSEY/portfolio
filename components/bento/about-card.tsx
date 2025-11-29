"use client"

import { BentoCard } from "./bento-card"
import { ArrowRightIcon } from "@/components/icons"
import Link from "next/link"
import { useLocale } from "@/lib/locale-context"

interface AboutCardProps {
  bio: string
  delay?: number
}

export function AboutCard({ bio, delay = 0 }: AboutCardProps) {
  const { t } = useLocale()

  return (
    <BentoCard size="wide" className="flex flex-col justify-between" delay={delay}>
      <div>
        <h3 className="text-sm font-medium text-foreground mb-2">{t.cards.about}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{bio}</p>
      </div>
      <Link
        href="/about"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground mt-3 hover:gap-2.5 transition-all group"
      >
        {t.cards.learnMore}
        <ArrowRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </BentoCard>
  )
}
