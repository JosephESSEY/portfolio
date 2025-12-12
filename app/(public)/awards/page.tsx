"use client"

import { useTranslation } from "@/hooks/use-translation"
import { TrophyIcon } from "@/components/icons"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"

export default function AwardsPage() {
  const { locale } = useTranslation()
  const [selectedAward, setSelectedAward] = useState<any>(null)

  const awards = [
    {
      id: "1",
      title: locale === "fr" ? "Meilleur Backend Developer 2024" : "Best Backend Developer 2024",
      organization: "Tech Awards Africa",
      date: "2024",
      description: locale === "fr" 
        ? "Récompense pour l'excellence en architecture backend et contributions à l'écosystème tech africain"
        : "Award for excellence in backend architecture and contributions to African tech ecosystem",
      mainImage: "/placeholder.jpg",
      images: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
      type: "award"
    },
    {
      id: "2",
      title: locale === "fr" ? "Innovation en Événementiel Tech" : "Innovation in Tech Event Planning",
      organization: "African Tech Summit",
      date: "2023",
      description: locale === "fr"
        ? "Reconnaissance pour l'organisation innovante d'événements tech et hackathons à travers l'Afrique"
        : "Recognition for innovative tech event organization and hackathons across Africa",
      mainImage: "/placeholder.jpg",
      images: ["/placeholder.jpg", "/placeholder.jpg"],
      type: "award"
    },
    {
      id: "3",
      title: locale === "fr" ? "Formateur de l'Année" : "Trainer of the Year",
      organization: "Tech Education Network",
      date: "2023",
      description: locale === "fr"
        ? "Prix pour l'excellence en formation de développeurs et transmission de compétences techniques"
        : "Award for excellence in developer training and technical skills transfer",
      mainImage: "/placeholder.jpg",
      images: ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"],
      type: "award"
    }
  ]

  const allCertifications = [
    {
      id: "1",
      title: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      date: "2024",
      description: locale === "fr"
        ? "Certification professionnelle en architecture de solutions cloud sur AWS"
        : "Professional certification in AWS cloud solutions architecture",
      credentialUrl: "#",
      type: "certification"
    },
    {
      id: "2",
      title: "MongoDB Certified Developer",
      organization: "MongoDB University",
      date: "2023",
      description: locale === "fr"
        ? "Certification avancée en développement avec MongoDB et bases de données NoSQL"
        : "Advanced certification in MongoDB development and NoSQL databases",
      credentialUrl: "#",
      type: "certification"
    },
    {
      id: "3",
      title: "Docker Certified Associate",
      organization: "Docker Inc.",
      date: "2023",
      description: locale === "fr"
        ? "Certification en conteneurisation et orchestration avec Docker"
        : "Certification in containerization and orchestration with Docker",
      credentialUrl: "#",
      type: "certification"
    },
    {
      id: "4",
      title: "Node.js Application Developer",
      organization: "OpenJS Foundation",
      date: "2022",
      description: locale === "fr"
        ? "Certification officielle en développement d'applications Node.js"
        : "Official certification in Node.js application development",
      credentialUrl: "#",
      type: "certification"
    },
    {
      id: "5",
      title: "PostgreSQL Professional",
      organization: "PostgreSQL Certification",
      date: "2022",
      description: locale === "fr"
        ? "Certification avancée en administration et optimisation PostgreSQL"
        : "Advanced certification in PostgreSQL administration and optimization",
      credentialUrl: "#",
      type: "certification"
    }
  ]

  return (
    <div className="w-full max-w-6xl mx-auto space-y-12 pb-24 lg:pb-32">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold bg-linear-to-r from-foreground via-primary to-purple-700 bg-clip-text text-transparent">
          {locale === "fr" ? "Awards & Certifications" : "Awards & Certifications"}
        </h1>
        <p className="text-xl text-muted-foreground">
          {locale === "fr"
            ? "Reconnaissance professionnelle et certifications techniques validant mon expertise"
            : "Professional recognition and technical certifications validating my expertise"}
        </p>
      </div>

      {/* Awards Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <TrophyIcon className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">
            {locale === "fr" ? "Prix & Distinctions" : "Awards & Honors"}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award) => (
            <Dialog key={award.id}>
              <DialogTrigger asChild>
                <div
                  className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl overflow-hidden hover:border-primary transition-all group cursor-pointer"
                >
                  <div className="relative h-48 bg-muted overflow-hidden">
                    <Image
                      src={award.mainImage}
                      alt={award.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <TrophyIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-foreground">{award.title}</h3>
                      <span className="text-sm font-medium text-primary shrink-0">{award.date}</span>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">{award.organization}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">{award.description}</p>
                    <button className="text-sm text-primary font-medium hover:underline">
                      {locale === "fr" ? "Voir les détails" : "View details"}
                    </button>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogTitle className="sr-only">{award.title}</DialogTitle>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shrink-0">
                      <TrophyIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-foreground mb-2">{award.title}</h2>
                      <p className="text-lg font-medium text-muted-foreground">{award.organization}</p>
                      <p className="text-sm text-primary font-medium mt-1">{award.date}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{award.description}</p>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-foreground">
                      {locale === "fr" ? "Photos" : "Photos"}
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {award.images.map((img: string, idx: number) => (
                        <div key={idx} className="relative h-64 bg-muted rounded-lg overflow-hidden">
                          <Image
                            src={img}
                            alt={`${award.title} ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>

      {/* Certifications Link */}
      <section className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-8 hover:border-primary transition-all">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 text-primary">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {locale === "fr" ? "Certifications Professionnelles" : "Professional Certifications"}
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">
              {locale === "fr" 
                ? "Découvrez mes certifications techniques AWS, MongoDB, Docker, Node.js, PostgreSQL et Kubernetes."
                : "Discover my technical certifications in AWS, MongoDB, Docker, Node.js, PostgreSQL and Kubernetes."}
            </p>
          </div>
        </div>
        <a
          href="/certifications"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          {locale === "fr" ? "Voir toutes les certifications" : "View all certifications"}
        </a>
      </section>

      {/* Certifications Preview - Hidden, link above */}
      <section className="hidden">
        <div className="grid gap-4">
          {allCertifications.slice(0, 3).map((cert: any) => (
            <div
              key={cert.id}
              className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 hover:border-purple-700 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-700/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-purple-700 transition-colors">
                  <svg className="w-6 h-6 text-purple-700 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                      <p className="text-sm font-medium text-primary">{cert.organization}</p>
                    </div>
                    <span className="text-sm font-medium text-emerald-500 shrink-0">{cert.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  <a
                    href={cert.credentialUrl}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-emerald-500 font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    {locale === "fr" ? "Voir le certificat" : "View credential"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">{awards.length}</div>
            <div className="text-sm text-muted-foreground">
              {locale === "fr" ? "Awards Reçus" : "Awards Received"}
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">{allCertifications.length}</div>
            <div className="text-sm text-muted-foreground">
              {locale === "fr" ? "Certifications" : "Certifications"}
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-sm text-muted-foreground">
              {locale === "fr" ? "Années d'Expérience" : "Years of Experience"}
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">50+</div>
            <div className="text-sm text-muted-foreground">
              {locale === "fr" ? "Projets Complétés" : "Projects Completed"}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
