"use client"

import { BentoCard } from "./bento-card"
import { motion } from "framer-motion"
import Image from "next/image"
import type { Profile } from "@/lib/types"
import { useLocale } from "@/lib/locale-context"

interface HeroCardProps {
  profile: Profile
}

export function HeroCard({ profile }: HeroCardProps) {
  const { t } = useLocale()

  return (
    <BentoCard size="wide" className="flex items-center gap-4" hoverEffect={false}>
      <motion.div
        className="relative shrink-0"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="w-14 h-14 rounded-full overflow-hidden bg-secondary ring-2 ring-border/20">
          <Image
            src={profile.avatarUrl || "/placeholder.svg?height=56&width=56&query=developer portrait"}
            alt={profile.name}
            width={56}
            height={56}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        {profile.available && (
          <motion.div
            className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-card"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4, type: "spring" }}
            title={t.hero.available}
          />
        )}
      </motion.div>

      <div className="flex-1 min-w-0">
        <motion.h1
          className="text-base font-semibold text-foreground"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {profile.role}
        </motion.p>
      </div>
    </BentoCard>
  )
}
