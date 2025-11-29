"use client"

import { BentoCard } from "./bento-card"
import { getServiceIcon, CheckIcon } from "@/components/icons"
import type { Service } from "@/lib/types"

interface ServiceCardProps {
  service: Service
  delay?: number
}

export function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  return (
    <BentoCard size="medium" className="flex flex-col" delay={delay}>
      <div className="p-2 rounded-lg bg-secondary text-foreground w-fit mb-3">
        {getServiceIcon(service.icon, "h-5 w-5")}
      </div>

      <h3 className="text-sm font-medium text-foreground mb-1">{service.name}</h3>
      <p className="text-xs text-muted-foreground mb-3 flex-1 line-clamp-2">{service.description}</p>

      {service.price && <p className="text-xs font-medium text-foreground mb-2">{service.price}</p>}

      <ul className="space-y-1">
        {service.features.slice(0, 3).map((feature, index) => (
          <li key={index} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <CheckIcon className="h-3 w-3 text-success shrink-0" />
            <span className="truncate">{feature}</span>
          </li>
        ))}
      </ul>
    </BentoCard>
  )
}
