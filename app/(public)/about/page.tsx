"use client"

import { useTranslation } from "@/hooks/use-translation"
import { CalendarIcon, BriefcaseIcon, TrophyIcon, CodeIcon, SparklesIcon } from "@/components/icons"
import { mockProfile } from "@/lib/mock-data"

export default function AboutPage() {
  const { t, locale } = useTranslation()

  // Structured Data JSON-LD for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Joseph ESSEY",
    "alternateName": "Le Dev Absolu",
    "description": "Backend Developer, Tech Event Planner & Formateur",
    "jobTitle": "Backend Developer & Tech Event Planner",
    "url": "https://josephessey.dev",
    "image": "https://josephessey.dev/joseph.jpg",
    "sameAs": [
      "https://github.com/josephessey",
      "https://linkedin.com/in/josephessey",
      "https://twitter.com/josephessey"
    ],
    "knowsAbout": [
      "Node.js", "Python", "PostgreSQL", "MongoDB", "Redis",
      "API REST", "GraphQL", "Microservices", "Docker", "Kubernetes",
      "Backend Architecture", "Cloud Computing", "DevOps"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Université de Lomé"
    }
  }

  const timeline = [
    {
      id: "1",
      year: "2024",
      positions: [
        {
          title: locale === "fr" ? "Backend Developer, Tech Event Planner & Formateur" : "Backend Developer, Tech Event Planner & Trainer",
          company: locale === "fr" ? "Freelance" : "Freelance",
          description: locale === "fr" 
            ? "Triple expertise : développement d'architectures backend (APIs Node.js/Python, PostgreSQL, Redis, microservices, cloud), organisation d'événements tech (conférences dev, hackathons, meetups) et formation de développeurs (workshops techniques, bootcamps, formations entreprise sur Node.js, Python, bases de données)."
            : "Triple expertise: backend architecture development (Node.js/Python APIs, PostgreSQL, Redis, microservices, cloud), tech event planning (dev conferences, hackathons, meetups) and developer training (technical workshops, bootcamps, corporate training on Node.js, Python, databases).",
        }
      ],
      type: "work"
    },
    {
      id: "2",
      year: "2022",
      positions: [
        {
          title: locale === "fr" ? "Senior Backend Developer" : "Senior Backend Developer",
          company: "TechHub Africa",
          description: locale === "fr"
            ? "Architecture d'APIs REST/GraphQL, optimisation de bases de données PostgreSQL, mise en place de microservices Node.js. Implémentation de systèmes de cache Redis et queues de messages."
            : "REST/GraphQL API architecture, PostgreSQL database optimization, Node.js microservices implementation. Redis caching systems and message queues setup.",
        }
      ],
      type: "work"
    },
    {
      id: "3",
      year: "2020",
      positions: [
        {
          title: locale === "fr" ? "Tech Event Coordinator" : "Tech Event Coordinator",
          company: locale === "fr" ? "EventPro Togo" : "EventPro Togo",
          description: locale === "fr"
            ? "Organisation d'événements tech et corporate : conférences tech, hackathons, workshops développeurs, et séminaires d'innovation digitale."
            : "Tech and corporate event organization: tech conferences, hackathons, developer workshops, and digital innovation seminars.",
        },
        {
          title: locale === "fr" ? "Full-Stack Developer" : "Full-Stack Developer",
          company: "DigitalSolutions",
          description: locale === "fr"
            ? "Développement de plateformes de gestion d'événements tech, sites web et solutions digitales pour accompagner les événements."
            : "Development of tech event management platforms, websites and digital solutions to support events.",
        }
      ],
      type: "work"
    },
    {
      id: "4",
      year: "2018",
      positions: [
        {
          title: locale === "fr" ? "Backend Developer" : "Backend Developer",
          company: "WebSolutions",
          description: locale === "fr"
            ? "Développement d'APIs backend pour e-commerce et systèmes de réservation. Intégration de passerelles de paiement, gestion de stocks, et authentification sécurisée."
            : "Backend API development for e-commerce and booking systems. Payment gateway integration, inventory management, and secure authentication.",
        }
      ],
      type: "work"
    },
    {
      id: "5",
      year: "2016",
      positions: [
        {
          title: locale === "fr" ? "Diplôme en Informatique & Événementiel" : "Computer Science & Event Management Degree",
          company: locale === "fr" ? "Université de Lomé" : "University of Lomé",
          description: locale === "fr"
            ? "Formation double compétence alliant développement web et gestion d'événements - Un parcours unique qui façonne mon approche hybride."
            : "Dual qualification training combining web development and event management - A unique path that shapes my hybrid approach.",
        }
      ],
      type: "education"
    }
  ]

  const expertise = [
    {
      category: locale === "fr" ? "Architecture Backend" : "Backend Architecture",
      icon: CodeIcon,
      color: "text-primary",
      skills: [
        "Node.js & Python",
        "PostgreSQL & MongoDB",
        "Redis & RabbitMQ",
        "API REST & GraphQL",
        "Docker & Kubernetes",
        "Tailwind CSS"
      ]
    },
    {
      category: locale === "fr" ? "Tech Event Planning" : "Tech Event Planning",
      icon: SparklesIcon,
      color: "text-purple-700",
      skills: [
        locale === "fr" ? "Conférences Tech" : "Tech Conferences",
        locale === "fr" ? "Hackathons & Coding Competitions" : "Hackathons & Coding Competitions",
        locale === "fr" ? "Meetups Développeurs" : "Developer Meetups",
        locale === "fr" ? "Workshops Techniques" : "Technical Workshops",
        locale === "fr" ? "Séminaires Corporate Tech" : "Corporate Tech Seminars",
        locale === "fr" ? "Innovation Labs & Démos" : "Innovation Labs & Demos"
      ]
    },
    {
      category: locale === "fr" ? "Formation & Enseignement" : "Training & Teaching",
      icon: TrophyIcon,
      color: "text-foreground",
      skills: [
        locale === "fr" ? "Formations Backend (Node.js, Python)" : "Backend Training (Node.js, Python)",
        locale === "fr" ? "Workshops Bases de Données" : "Database Workshops",
        locale === "fr" ? "Bootcamps Développement Web" : "Web Development Bootcamps",
        locale === "fr" ? "Formations Entreprise Sur-Mesure" : "Custom Corporate Training",
        locale === "fr" ? "Mentorat Développeurs Junior" : "Junior Developer Mentoring",
        locale === "fr" ? "Cours Architecture & APIs" : "Architecture & APIs Courses"
      ]
    }
  ]

  const achievements = [
    {
      number: "50+",
      label: locale === "fr" ? "Événements Organisés" : "Events Organized",
      color: "text-purple-700"
    },
    {
      number: "100+",
      label: locale === "fr" ? "Projets Web Livrés" : "Web Projects Delivered",
      color: "text-primary"
    },
    {
      number: "5000+",
      label: locale === "fr" ? "Participants" : "Attendees",
      color: "text-purple-700"
    },
    {
      number: "98%",
      label: locale === "fr" ? "Satisfaction Client" : "Client Satisfaction",
      color: "text-orange-500"
    }
  ]

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="w-full max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold bg-linear-to-r from-foreground via-primary to-purple-700 bg-clip-text text-transparent">
          {locale === "fr" ? "À propos de moi" : "About Me"}
        </h1>
        <div className="space-y-4">
          <p className="text-xl text-muted-foreground leading-relaxed">
            {locale === "fr"
              ? "Je suis Joseph ESSEY, un professionnel passionné qui combine trois univers fascinants :"
              : "I'm Joseph ESSEY, a passionate professional who combines three fascinating worlds:"}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 bg-primary/5 border-2 border-primary/20 rounded-xl">
              <CodeIcon className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">
                {locale === "fr" ? "Backend Developer" : "Backend Developer"}
              </h3>
              <p className="text-muted-foreground">
                {locale === "fr"
                  ? "+8 ans en architecture backend, APIs et systèmes scalables"
                  : "+8 years in backend architecture, APIs and scalable systems"}
              </p>
            </div>
            <div className="p-6 bg-purple-700/5 border-2 border-purple-700/20 rounded-xl">
              <SparklesIcon className="w-8 h-8 text-purple-700 mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">
                {locale === "fr" ? "Tech Event Planner" : "Tech Event Planner"}
              </h3>
              <p className="text-muted-foreground">
                {locale === "fr"
                  ? "Organisation d'événements tech : conférences, hackathons, meetups"
                  : "Tech event planning: conferences, hackathons, meetups"}
              </p>
            </div>
            <div className="p-6 bg-purple-700/5 border-2 border-purple-700/20 rounded-xl">
              <TrophyIcon className="w-8 h-8 text-purple-700 mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">
                {locale === "fr" ? "Formateur" : "Trainer"}
              </h3>
              <p className="text-muted-foreground">
                {locale === "fr"
                  ? "Formation de développeurs : workshops, bootcamps, formations entreprise"
                  : "Developer training: workshops, bootcamps, corporate programs"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mon histoire */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
          <TrophyIcon className="w-8 h-8 text-purple-700" />
          {locale === "fr" ? "Mon Histoire" : "My Story"}
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {mockProfile.bio}
          </p>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {achievements.map((achievement, idx) => (
          <div
            key={idx}
            className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 text-center hover:border-purple-700 hover:shadow-lg hover:shadow-purple-700/10 transition-all"
          >
            <div className={`text-4xl font-bold ${achievement.color} mb-2`}>
              {achievement.number}
            </div>
            <div className="text-sm text-muted-foreground">{achievement.label}</div>
          </div>
        ))}
      </section>

      {/* Parcours professionnel */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
          <BriefcaseIcon className="w-8 h-8 text-primary" />
          {locale === "fr" ? "Parcours Professionnel" : "Professional Journey"}
        </h2>
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <div
              key={item.id}
              className="relative pl-8 pb-6 border-l-2 border-border last:pb-0 group"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-foreground group-hover:bg-purple-700 transition-colors" />
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">
                      <CalendarIcon className="w-3 h-3" />
                      {item.year}
                    </span>
                    {item.type === "education" && (
                      <span className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full">
                        {locale === "fr" ? "Formation" : "Education"}
                      </span>
                    )}
                    {item.positions.length > 1 && (
                      <span className="text-xs px-2 py-1 bg-orange-500/10 text-orange-500 border border-orange-500/20 rounded-full">
                        {item.positions.length} {locale === "fr" ? "postes" : "positions"}
                      </span>
                    )}
                  </div>
                  
                  {/* Liste des postes pour cette année */}
                  <div className="space-y-4">
                    {item.positions.map((position, posIndex) => (
                      <div 
                        key={posIndex}
                        className={posIndex > 0 ? "pt-4 mt-4 border-t border-border/50" : ""}
                      >
                        <h3 className="text-xl font-bold text-foreground group-hover:text-purple-700 transition-colors">
                          {position.title}
                        </h3>
                        <p className="text-primary font-medium mb-2">{position.company}</p>
                        <p className="text-muted-foreground leading-relaxed">{position.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compétences */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">
          {locale === "fr" ? "Compétences & Expertise" : "Skills & Expertise"}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((category, idx) => {
            const Icon = category.icon
            return (
              <div
                key={idx}
                className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 hover:border-purple-700 hover:shadow-lg hover:shadow-purple-700/10 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-purple-700">✓</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-card/80 backdrop-blur-sm border-2 border-purple-700/20 rounded-xl p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold text-foreground">
          {locale === "fr" 
            ? "Travaillons ensemble !" 
            : "Let's Work Together!"}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {locale === "fr"
            ? "Que ce soit pour un projet web ambitieux ou un événement exceptionnel, je suis là pour transformer votre vision en réalité."
            : "Whether it's an ambitious web project or an exceptional event, I'm here to transform your vision into reality."}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {locale === "fr" ? "Voir mes projets" : "View My Projects"}
          </a>
          <a
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-700 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors"
          >
            {locale === "fr" ? "Découvrir mes événements" : "Discover My Events"}
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border hover:border-purple-700 text-foreground rounded-lg font-medium transition-colors"
          >
            {locale === "fr" ? "Me contacter" : "Contact Me"}
          </a>
        </div>
      </section>
      </div>
    </>
  )
}
