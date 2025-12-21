"use client"

import { getSocialIcon } from "@/components/icons"
import { motion } from "framer-motion"
import type { SocialLink } from "@/lib/types"

interface SocialCardProps {
  link: SocialLink
  delay?: number
}

const socialColors: Record<string, { bg: string; text: string; border: string; icon: string }> = {
  github: {
    bg: "dark:bg-black/40 bg-black/5",
    text: "dark:text-white text-black",
    border: "dark:border-white/10 border-black/10",
    icon: "dark:text-white text-black",
  },
  linkedin: {
    bg: "dark:bg-black/40 bg-black/5",
    text: "dark:text-white text-black",
    border: "dark:border-white/10 border-black/10",
    icon: "dark:text-white text-black",
  },
  twitter: {
    bg: "dark:bg-black/40 bg-black/5",
    text: "dark:text-white text-black",
    border: "dark:border-white/10 border-black/10",
    icon: "dark:text-white text-black",
  },
  dribbble: {
    bg: "dark:bg-black/40 bg-black/5",
    text: "dark:text-white text-black",
    border: "dark:border-white/10 border-black/10",
    icon: "dark:text-white text-black",
  },
  mail: {
    bg: "dark:bg-black/40 bg-black/5",
    text: "dark:text-white text-black",
    border: "dark:border-white/10 border-black/10",
    icon: "dark:text-white text-black",
  },
  email: {
    bg: "dark:bg-black/40 bg-black/5",
    text: "dark:text-white text-black",
    border: "dark:border-white/10 border-black/10",
    icon: "dark:text-white text-black",
  },
}

export function SocialCard({ link, delay = 0 }: SocialCardProps) {
  const colors = socialColors[link.icon.toLowerCase()] || socialColors.github
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative flex flex-col items-center justify-center gap-4 p-6 rounded-2xl
          border-2 ${colors.border}
          ${colors.bg} backdrop-blur-sm
          transition-all duration-300 ease-out
          hover:border-opacity-100 hover:shadow-lg hover:shadow-black/[0.1] dark:hover:shadow-black/[0.3]
          overflow-hidden cursor-pointer block h-full`}
      >
        {/* Gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 dark:to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Icon container with animation */}
        <motion.div
          className={`relative p-4 rounded-xl bg-gradient-to-br ${colors.bg} border ${colors.border}
            group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300`}
          whileHover={{ scale: 1.15, rotate: 5 }}
        >
          <div className={colors.icon}>
            {getSocialIcon(link.icon, "h-6 w-6")}
          </div>
        </motion.div>

        {/* Text content */}
        <div className="relative text-center space-y-2 group-hover:gap-3 transition-all duration-300">
          <h3 className={`text-sm font-bold ${colors.text} line-clamp-1`}>
            {link.platform}
          </h3>
          <p className={`text-xs ${colors.text} opacity-75 group-hover:opacity-100 transition-opacity duration-300`}>
            {link.username}
          </p>
        </div>

        {/* Accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.bg} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
      </a>
    </motion.div>
  )
}
