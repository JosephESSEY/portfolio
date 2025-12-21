"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { LocaleToggle } from "@/components/locale-toggle"
import type { Profile } from "@/lib/types"

interface ProfileSidebarProps {
  profile: Profile
}

export function ProfileSidebar({ profile }: ProfileSidebarProps) {
  return (
    <div className="flex flex-col items-center justify-start h-full text-center p-6 lg:p-8">
      {/* Theme & Language toggles */}
      <div className="w-full flex justify-end gap-2 mb-4">
        <ThemeToggle />
        <LocaleToggle />
      </div>
      {/* Avatar avec effet glass */}
      <motion.div
        className="relative mb-6"
        initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
      >
        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-card/50 border-2 border-border p-1 shadow-2xl backdrop-blur-sm">
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
            className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-700 rounded-full border-3 border-background shadow-lg flex items-center justify-center"
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
        className="w-16 h-0.5 bg-border mb-6"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />

      {/* Surnom & Slogan */}
      <motion.div
        className="space-y-3 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-sm font-bold text-primary">
            Le Dev Absolu
          </p>
        </div>
        <div className="px-3 py-1.5 bg-card/50 border border-border rounded-md">
          <p className="text-xs text-muted-foreground italic">
            Le développeur le plus transparent du game
          </p>
        </div>
      </motion.div>

      {/* Download CV Button */}
      <motion.a
        href="/cv.pdf"
        download
        className="w-full px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-700/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Télécharger CV
      </motion.a>

    </div>
  )
}
