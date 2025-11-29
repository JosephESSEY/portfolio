"use client"

import { BentoCard } from "./bento-card"
import { ArrowRightIcon } from "@/components/icons"

interface CtaCardProps {
  delay?: number
}

export function CtaCard({ delay = 0 }: CtaCardProps) {
  return (
    <BentoCard 
      size="wide" 
      href="/contact" 
      delay={delay}
      className="bg-primary text-primary-foreground hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex items-center justify-between h-full p-4">
        <div>
          <p className="text-sm font-semibold mb-1">Travaillons ensemble</p>
          <p className="text-xs text-primary-foreground/80">Discutons de votre projet</p>
        </div>
        <div className="p-2 rounded-full bg-primary-foreground text-primary">
          <ArrowRightIcon className="h-4 w-4" />
        </div>
      </div>
    </BentoCard>
  )
}
