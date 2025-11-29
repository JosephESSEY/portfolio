import { BentoGrid } from "@/components/bento/bento-grid"
import { ProjectCard } from "@/components/bento/project-card"
import { getProjects } from "@/lib/data-service"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projets | Alexandre Dupont",
  description: "Découvrez mes projets de développement web et de design.",
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projets</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Une sélection de projets sur lesquels j'ai travaillé, du design à la mise en production.
        </p>
      </div>

      <BentoGrid>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} size={index % 3 === 0 ? "large" : "medium"} />
        ))}
      </BentoGrid>
    </div>
  )
}
