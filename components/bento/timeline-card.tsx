"use client"

import { BentoCard } from "./bento-card"
import type { TimelineItem } from "@/lib/types"

interface TimelineCardProps {
  items: TimelineItem[]
}

export function TimelineCard({ items }: TimelineCardProps) {
  return (
    <BentoCard size="tall" className="flex flex-col">
      <h3 className="text-lg font-semibold text-foreground mb-4">Parcours</h3>
      <div className="space-y-4 flex-1 overflow-y-auto">
        {items.slice(0, 5).map((item, index) => (
          <div key={item.id} className="relative pl-6">
            <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-foreground" />
            {index < items.length - 1 && <div className="absolute left-[3px] top-4 w-0.5 h-full bg-border" />}
            <div>
              <span className="text-xs font-medium text-muted-foreground">{item.year}</span>
              <h4 className="text-sm font-medium text-foreground">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}
