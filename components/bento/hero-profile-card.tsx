"use client"

import { BentoCard } from "./bento-card"
import { motion } from "framer-motion"
import Image from "next/image"
import type { Profile } from "@/lib/types"

interface HeroProfileCardProps {
  profile: Profile
  delay?: number
}

export function HeroProfileCard({ profile, delay = 0 }: HeroProfileCardProps) {
  return (
    <BentoCard size="wide" className="col-span-1 lg:col-span-1 row-span-1 lg:row-span-1 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 border border-border/40 shadow-xl">
      
      {/* Fond décoratif avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="relative flex flex-col items-center justify-center h-full text-center p-8 lg:p-12">
        {/* Avatar avec effet glass */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.2, type: "spring", bounce: 0.3 }}
        >
          <div className="w-36 h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20 p-1 shadow-2xl backdrop-blur-sm">
            <div className="w-full h-full rounded-xl overflow-hidden bg-background">
              <Image
                src={profile.avatarUrl || "/placeholder.svg?height=160&width=160&query=professional developer"}
                alt={profile.name}
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Status indicator avec animation */}
          {profile.available && (
            <motion.div
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full border-4 border-background shadow-lg flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: delay + 0.8, type: "spring", bounce: 0.6 }}
              title="Disponible pour de nouveaux projets"
            >
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          )}
        </motion.div>

        {/* Nom avec effet typographique */}
        <motion.h1
          className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        >
          {profile.name}
        </motion.h1>

        {/* Rôle avec style premium */}
        <motion.p
          className="text-lg lg:text-xl text-primary font-medium mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
        >
          {profile.role}
        </motion.p>

        {/* Tagline avec style moderne */}
        <motion.p
          className="text-sm lg:text-base text-muted-foreground/90 mb-6 max-w-md leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.6 }}
        >
          {profile.tagline}
        </motion.p>

        {/* Localisation avec design moderne */}
        <motion.div
          className="flex items-center gap-2 text-xs text-muted-foreground/70 bg-muted/30 px-4 py-2 rounded-full border border-border/40 backdrop-blur-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.7 }}
        >
          <motion.span 
            className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm"
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {profile.location}
        </motion.div>

        {/* Effet de particules décoratif */}
        <div className="absolute top-8 left-8 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
        <div className="absolute top-16 right-12 w-1 h-1 bg-purple-500/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-12 left-12 w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce delay-500"></div>
      </div>
    </BentoCard>
  )
}