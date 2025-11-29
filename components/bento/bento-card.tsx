"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface BentoCardProps {
  children: ReactNode
  className?: string
  size?: "small" | "medium" | "large" | "wide" | "tall"
  href?: string
  onClick?: () => void
  hoverEffect?: boolean
  delay?: number
}

const sizeClasses = {
  small: "col-span-1 row-span-1",
  medium: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
  large: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
  wide: "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
  tall: "col-span-1 row-span-2",
}

export function BentoCard({
  children,
  className,
  size = "small",
  href,
  onClick,
  hoverEffect = true,
  delay = 0,
}: BentoCardProps) {
  const Component = href ? motion.a : motion.div

  return (
    <Component
      href={href}
      onClick={onClick}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={cn(
        "relative overflow-hidden rounded-xl bg-card p-3 md:p-4",
        "border border-border/30",
        "shadow-sm shadow-black/[0.02] dark:shadow-black/[0.1]",
        "transition-all duration-200 ease-out",
        hoverEffect && [
          "hover:shadow-md hover:shadow-black/[0.06] dark:hover:shadow-black/[0.2]",
          "hover:border-border/50",
        ],
        href && "cursor-pointer",
        sizeClasses[size],
        className,
      )}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.35, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={hoverEffect ? { y: -2 } : undefined}
      whileTap={onClick || href ? { scale: 0.98 } : undefined}
    >
      {children}
    </Component>
  )
}
