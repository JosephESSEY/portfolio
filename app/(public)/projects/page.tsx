"use client"

import { useTranslation } from "@/hooks/use-translation"
import { CodeIcon, ExternalLinkIcon, GithubIcon, SparklesIcon, TrophyIcon } from "@/components/icons"
import { mockProjects } from "@/lib/mock-data"
import Image from "next/image"
import { useState } from "react"

export default function ProjectsPage() {
  const { locale } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = [
    { id: "all", label: locale === "fr" ? "Tous" : "All" },
    { id: "web", label: locale === "fr" ? "Web" : "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "saas", label: "SaaS" },
    { id: "ecommerce", label: "E-commerce" }
  ]

  const projects = mockProjects.map(project => ({
    ...project,
    category: project.id === "3" ? "mobile" : project.id === "2" ? "ecommerce" : project.id === "1" ? "saas" : "web",
    client: project.id === "1" ? "Luminance Inc." : project.id === "2" ? "Velvet Brand" : project.id === "3" ? "Mindful Health" : undefined,
    year: new Date(project.createdAt).getFullYear().toString(),
    impact: project.id === "1" 
      ? locale === "fr" ? "2000+ utilisateurs actifs, 40% gain de productivité" : "2000+ active users, 40% productivity gain"
      : project.id === "2"
      ? locale === "fr" ? "250K+ visites/mois, conversion +35%" : "250K+ visits/month, +35% conversion"
      : project.id === "3"
      ? locale === "fr" ? "50K+ téléchargements, 4.8/5 étoiles" : "50K+ downloads, 4.8/5 stars"
      : undefined
  }))

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  
  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold bg-linear-to-r from-foreground via-primary to-purple-700 bg-clip-text text-transparent">
          {locale === "fr" ? "Mes Projets" : "My Projects"}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {locale === "fr" 
            ? "Une sélection de projets web et mobiles que j'ai conçus et développés. Du concept à la mise en production, découvrez des solutions digitales innovantes et performantes."
            : "A selection of web and mobile projects I've designed and developed. From concept to production, discover innovative and high-performance digital solutions."
          }
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === cat.id
                ? "bg-purple-700 text-white shadow-lg shadow-purple-700/20"
                : "bg-card/80 text-muted-foreground border-2 border-border hover:border-purple-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl overflow-hidden hover:border-purple-700 hover:shadow-lg hover:shadow-purple-700/10 transition-all group"
          >
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Badges overlay */}
              <div className="absolute top-4 left-4 flex gap-2">
                {project.featured && (
                  <span className="px-3 py-1 text-xs font-medium bg-purple-700/90 text-white rounded-full backdrop-blur-sm border border-purple-400/50">
                    {locale === "fr" ? "★ En vedette" : "★ Featured"}
                  </span>
                )}
                <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-white rounded-full backdrop-blur-sm border border-primary/50">
                  {project.year}
                </span>
              </div>

              {/* Links overlay */}
              <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity md:bottom-3 md:right-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/90 backdrop-blur-sm hover:bg-white transition-colors"
                  >
                    <GithubIcon className="w-5 h-5 text-gray-900" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-purple-700/90 backdrop-blur-sm hover:bg-purple-700 text-white transition-colors"
                  >
                    <ExternalLinkIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-2xl font-bold text-foreground group-hover:text-purple-700 transition-colors">
                    {project.title}
                  </h2>
                  {project.client && (
                    <span className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground border border-border/50 shrink-0">
                      {project.client}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Impact */}
              {project.impact && (
                <div className="pt-3 border-t border-border/50">
                  <div className="flex items-start gap-2">
                    <TrophyIcon className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{locale === "fr" ? "Impact : " : "Impact: "}</span>
                      {project.impact}
                    </p>
                  </div>
                </div>
              )}

              {/* Links pour mobile */}
              <div className="flex gap-2 lg:hidden">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-lg bg-black/5 dark:bg-white/10 text-foreground hover:bg-black/10 dark:hover:bg-white/20 transition-colors border border-border flex items-center justify-center gap-2 font-medium text-sm"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>{locale === "fr" ? "Code" : "Code"}</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-600 transition-colors border border-purple-600 flex items-center justify-center gap-2 font-medium text-sm"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    <span>{locale === "fr" ? "Voir" : "View"}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12 space-y-3">
          <CodeIcon className="w-16 h-16 text-muted-foreground mx-auto opacity-50" />
          <p className="text-lg text-muted-foreground">
            {locale === "fr" ? "Aucun projet dans cette catégorie" : "No projects in this category"}
          </p>
        </div>
      )}

      {/* CTA */}
      <div className="bg-card/80 backdrop-blur-sm border-2 border-purple-700/20 rounded-xl p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold text-foreground">
          {locale === "fr" 
            ? "Un projet en tête ?" 
            : "Have a project in mind?"}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {locale === "fr"
            ? "Transformons votre idée en réalité digitale. Applications web, mobiles, SaaS - je vous accompagne de A à Z avec expertise et créativité."
            : "Let's transform your idea into digital reality. Web apps, mobile, SaaS - I'll guide you from A to Z with expertise and creativity."}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-700 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors"
          >
            {locale === "fr" ? "Discutons de votre projet" : "Let's Discuss Your Project"}
          </a>
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card/80 text-foreground border-2 border-border rounded-lg font-medium hover:border-purple-700 transition-colors"
          >
            {locale === "fr" ? "Voir mes services" : "View My Services"}
          </a>
        </div>
      </div>
    </div>
  )
}
