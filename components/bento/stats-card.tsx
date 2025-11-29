"use client"

import { BentoCard } from "./bento-card"
import { motion } from "framer-motion"

interface Stat {
  label: string
  value: string
}

interface StatsCardProps {
  stats: Stat[]
  delay?: number
}

export function StatsCard({ stats, delay = 0 }: StatsCardProps) {
  return (
    <BentoCard size="wide" className="flex items-center justify-center" delay={delay}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-0.5">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </BentoCard>
  )
}
