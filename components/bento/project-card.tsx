"use client"

import { BentoCard } from "./bento-card"
import { ExternalLinkIcon, GithubIcon } from "@/components/icons"
import Image from "next/image"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
  size?: "small" | "medium" | "large" | "wide"
  delay?: number
}

export function ProjectCard({ project, size = "medium", delay = 0 }: ProjectCardProps) {
  return (
    <BentoCard size={size} className="group p-0 overflow-hidden" delay={delay}>
      <div className="relative h-full w-full">
        <Image
          src={project.imageUrl || "/placeholder.svg?height=400&width=600&query=modern saas dashboard"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="text-base md:text-lg font-medium text-white mb-0.5 truncate">{project.title}</h3>
              <p className="text-xs md:text-sm text-white/75 line-clamp-2">{project.description}</p>
            </div>

            <div className="flex gap-1.5 shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLinkIcon className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mt-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-1.5 py-0.5 text-[10px] font-medium bg-white/15 backdrop-blur-sm text-white/90 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BentoCard>
  )
}
