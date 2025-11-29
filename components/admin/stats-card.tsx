"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AdminStatsCardProps {
  title: string
  value: string | number
  description?: string
  icon: React.ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}

export function AdminStatsCard({ title, value, description, icon, trend, className }: AdminStatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("bg-card rounded-2xl border border-border/50 p-6", className)}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
          {trend && (
            <p className={cn("text-sm font-medium mt-2", trend.isPositive ? "text-success" : "text-destructive")}>
              {trend.isPositive ? "+" : ""}
              {trend.value}%
            </p>
          )}
        </div>
        <div className="p-3 rounded-xl bg-secondary text-foreground">{icon}</div>
      </div>
    </motion.div>
  )
}
