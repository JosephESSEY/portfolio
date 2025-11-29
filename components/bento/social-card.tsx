"use client"

import { BentoCard } from "./bento-card"
import { getSocialIcon } from "@/components/icons"
import type { SocialLink } from "@/lib/types"

interface SocialCardProps {
  link: SocialLink
  delay?: number
}

export function SocialCard({ link, delay = 0 }: SocialCardProps) {
  return (
    <BentoCard 
      size="small" 
      href={link.url} 
      className="aspect-square flex flex-col items-center justify-center p-3 hover:shadow-md transition-shadow duration-200"
      delay={delay}
    >
      <div className="p-2 rounded-lg bg-secondary mb-2">
        {getSocialIcon(link.icon, "h-4 w-4")}
      </div>
      <p className="text-xs font-medium text-center">{link.platform}</p>
      <p className="text-xs text-muted-foreground text-center mt-1 leading-tight">
        {link.username}
      </p>
    </BentoCard>
  )
}
