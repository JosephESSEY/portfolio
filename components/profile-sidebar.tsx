"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { Profile } from "@/lib/types"

interface ProfileSidebarProps {
  profile: Profile
}

export function ProfileSidebar({ profile }: ProfileSidebarProps) {
  return (
    <div className="flex flex-col items-center justify-start h-full text-center p-6 lg:p-8">
      {/* Avatar avec effet glass */}
      <motion.div
        className="relative mb-6"
        initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
      >
        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-linear-to-br from-primary/20 to-purple-500/20 p-1 shadow-2xl backdrop-blur-sm">
          <div className="w-full h-full rounded-full overflow-hidden bg-background">
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
            className="absolute -bottom-1 -right-1 w-6 h-6 bg-linear-to-r from-emerald-400 to-emerald-500 rounded-full border-3 border-background shadow-lg flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.8, type: "spring", bounce: 0.6 }}
            title="Disponible pour de nouveaux projets"
          >
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </motion.div>

      {/* Nom avec effet typographique */}
      <motion.h1
        className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {profile.name}
      </motion.h1>

      {/* Rôle avec style premium */}
      <motion.p
        className="text-base lg:text-lg text-muted-foreground font-medium mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {profile.role}
      </motion.p>

      {/* Séparateur décoratif */}
      <motion.div
        className="w-16 h-0.5 bg-linear-to-r from-transparent via-border to-transparent mb-6"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />

    </div>
  )
}
