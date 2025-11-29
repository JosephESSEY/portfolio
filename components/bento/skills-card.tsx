"use client"

import { BentoCard } from "./bento-card"
import type { Skill } from "@/lib/types"
import { motion } from "framer-motion"
import { useLocale } from "@/lib/locale-context"

interface SkillsCardProps {
  skills: Skill[]
  category: string
  delay?: number
}

export function SkillsCard({ skills, category, delay = 0 }: SkillsCardProps) {
  const { t } = useLocale()

  return (
    <BentoCard size="medium" className="flex flex-col" delay={delay}>
      <h3 className="text-sm font-medium text-foreground mb-3">{category}</h3>
      <div className="space-y-2.5 flex-1">
        {skills.slice(0, 4).map((skill, index) => (
          <div key={skill.id}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-foreground font-medium">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-1 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-foreground/80 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}
