"use client"

import { useTranslation } from "@/hooks/use-translation"
import { TrophyIcon } from "@/components/icons"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"

export default function CertificationsPage() {
  const { locale } = useTranslation()

  const certifications = [
    {
      id: "1",
      title: "AWS Certified Solutions Architect - Professional",
      organization: "Amazon Web Services",
      date: "2024",
      description: locale === "fr"
        ? "Certification professionnelle en architecture de solutions cloud sur AWS, couvrant la conception de systèmes distribués et l'optimisation des coûts."
        : "Professional certification in AWS cloud solutions architecture, covering distributed systems design and cost optimization.",
      mainImage: "/placeholder.jpg",
      images: ["/placeholder.jpg"],
      credentialUrl: "#",
      skills: ["AWS", "Cloud Architecture", "Scalability", "Security"]
    },
    {
      id: "2",
      title: "MongoDB Certified Developer Associate",
      organization: "MongoDB University",
      date: "2023",
      description: locale === "fr"
        ? "Certification avancée en développement avec MongoDB, modélisation de données NoSQL et optimisation des performances."
        : "Advanced certification in MongoDB development, NoSQL data modeling and performance optimization.",
      mainImage: "/placeholder.jpg",
      images: ["/placeholder.jpg"],
      credentialUrl: "#",
      skills: ["MongoDB", "NoSQL", "Data Modeling", "Aggregation"]
    },
    {
      id: "3",
      title: "Docker Certified Associate (DCA)",
      organization: "Docker Inc.",
      date: "2023",
      description: locale === "fr"
        ? "Certification en conteneurisation et orchestration avec Docker, incluant Docker Swarm et les bonnes pratiques DevOps."
        : "Certification in containerization and orchestration with Docker, including Docker Swarm and DevOps best practices.",
      mainImage: "/placeholder.jpg",
      images: ["/placeholder.jpg"],
      credentialUrl: "#",
      skills: ["Docker", "Containers", "DevOps", "Orchestration"]
    },
    {
      id: "4",
      title: "Node.js Application Developer (JSNAD)",
      organization: "OpenJS Foundation",
      date: "2022",
      description: locale === "fr"
        ? "Certification officielle en développement d'applications Node.js, couvrant les APIs, streams et architecture événementielle."
        : "Official certification in Node.js application development, covering APIs, streams and event-driven architecture.",
      mainImage: "/placeholder.jpg",
      images: ["/placeholder.jpg"],
      credentialUrl: "#",
      skills: ["Node.js", "JavaScript", "APIs", "Async Programming"]
    },
    {
      id: "5",
      title: "PostgreSQL 14 Associate Certification",
      organization: "PostgreSQL Certification",
      date: "2022",
      description: locale === "fr"
        ? "Certification avancée en administration PostgreSQL, optimisation de requêtes et réplication."
        : "Advanced certification in PostgreSQL administration, query optimization and replication.",
      mainImage: "/placeholder.jpg",
      images: ["/placeholder.jpg"],
      credentialUrl: "#",
      skills: ["PostgreSQL", "SQL", "Database Design", "Performance Tuning"]
    },
    {
      id: "6",
      title: "Kubernetes Administrator (CKA)",
      organization: "Cloud Native Computing Foundation",
      date: "2023",
      description: locale === "fr"
        ? "Certification d'administrateur Kubernetes, gestion de clusters, déploiements et troubleshooting."
        : "Kubernetes administrator certification, cluster management, deployments and troubleshooting.",
      mainImage: "/placeholder.jpg",
      images: ["/placeholder.jpg"],
      credentialUrl: "#",
      skills: ["Kubernetes", "Container Orchestration", "Cloud Native", "DevOps"]
    }
  ]

  return (
    <div className="w-full max-w-6xl mx-auto space-y-12 pb-24 lg:pb-32">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
          {locale === "fr" ? "Certifications Professionnelles" : "Professional Certifications"}
        </h1>
        <p className="text-xl text-muted-foreground">
          {locale === "fr"
            ? "Certifications techniques validant mon expertise en backend, cloud et DevOps"
            : "Technical certifications validating my expertise in backend, cloud and DevOps"}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">{certifications.length}</div>
          <div className="text-sm text-muted-foreground">
            {locale === "fr" ? "Certifications" : "Certifications"}
          </div>
        </div>
        <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-foreground mb-2">6</div>
          <div className="text-sm text-muted-foreground">
            {locale === "fr" ? "Domaines" : "Domains"}
          </div>
        </div>
        <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">100%</div>
          <div className="text-sm text-muted-foreground">
            {locale === "fr" ? "Validées" : "Valid"}
          </div>
        </div>
        <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-foreground mb-2">2024</div>
          <div className="text-sm text-muted-foreground">
            {locale === "fr" ? "Dernière" : "Latest"}
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 text-primary">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-foreground">
            {locale === "fr" ? "Mes Certifications" : "My Certifications"}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Dialog key={cert.id}>
              <DialogTrigger asChild>
                <div
                  className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl overflow-hidden hover:border-primary transition-all group cursor-pointer"
                >
                  <div className="relative h-48 bg-muted overflow-hidden">
                    <Image
                      src={cert.mainImage}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                      <span className="text-sm font-medium text-primary shrink-0">{cert.date}</span>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">{cert.organization}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">{cert.description}</p>
                    <button className="text-sm text-primary font-medium hover:underline">
                      {locale === "fr" ? "Voir les détails" : "View details"}
                    </button>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogTitle className="sr-only">{cert.title}</DialogTitle>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-foreground mb-2">{cert.title}</h2>
                      <p className="text-lg font-medium text-muted-foreground">{cert.organization}</p>
                      <p className="text-sm text-primary font-medium mt-1">{cert.date}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                  
                  {/* Skills */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground">
                      {locale === "fr" ? "Compétences" : "Skills"}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-sm px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certification Images */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-foreground">
                      {locale === "fr" ? "Certificat" : "Certificate"}
                    </h3>
                    <div className="grid gap-4">
                      {cert.images.map((img: string, idx: number) => (
                        <div key={idx} className="relative h-96 bg-muted rounded-lg overflow-hidden">
                          <Image
                            src={img}
                            alt={`${cert.title} certificate ${idx + 1}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Credential Link */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    {locale === "fr" ? "Voir le certificat officiel" : "View official credential"}
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
    </div>
  )
}
