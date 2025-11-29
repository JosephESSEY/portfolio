import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface BentoGridProps {
  children: ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3", "auto-rows-[minmax(100px,auto)]", className)}>
      {children}
    </div>
  )
}
