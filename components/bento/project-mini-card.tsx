"use client"

import { BentoCard } from "./bento-card"
import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/lib/types"

interface ProjectMiniCardProps {
  project: Project
  delay?: number
}

export function ProjectMiniCard({ project, delay = 0 }: ProjectMiniCardProps) {
  return (
    <BentoCard size="small" delay={delay}>
      <Link href={`/projects/${project.id}`} className="block h-full">
        <div className="flex flex-col h-full">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-secondary mb-2">
            <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
          <h3 className="text-sm font-medium text-foreground truncate">{project.title}</h3>
          <p className="text-xs text-muted-foreground truncate">{project.description}</p>
        </div>
      </Link>
    </BentoCard>
  )
}
