"use client"

import { BentoCard } from "./bento-card"

interface QuoteCardProps {
  quote: string
}

export function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <BentoCard size="wide" className="flex items-center justify-center">
      <blockquote className="text-lg md:text-xl text-center text-muted-foreground italic leading-relaxed">
        {quote}
      </blockquote>
    </BentoCard>
  )
}
