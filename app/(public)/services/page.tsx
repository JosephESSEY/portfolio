"use client"

import { useTranslation } from "@/hooks/use-translation"
import { CodeIcon, SparklesIcon, CalendarIcon, TrophyIcon, CheckIcon, ArrowRightIcon } from "@/components/icons"
import { useState } from "react"

interface Service {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  icon: any
  iconColor: string
  price: string
  priceEn: string
  features: string[]
  featuresEn: string[]
  deliverables: string[]
  deliverablesEn: string[]
  duration: string
  durationEn: string
}

export default function ServicesPage() {
  const { locale } = useTranslation()

  const services: Service[] = [
    {
      id: "1",
      title: "Architecture Backend & APIs",
      titleEn: "Backend Architecture & APIs",
      description: "Conception et développement de systèmes backend robustes, scalables et performants",
      descriptionEn: "Design and development of robust, scalable and high-performance backend systems",
      icon: CodeIcon,
      iconColor: "text-purple-700",
      price: "",
      priceEn: "",
      features: [
        "APIs REST & GraphQL (Node.js, Python)",
        "Architecture microservices",
        "Bases de données (PostgreSQL, MongoDB, Redis)",
        "Authentification & sécurité (JWT, OAuth)",
        "Tests, monitoring & documentation"
      ],
      featuresEn: [
        "REST & GraphQL APIs (Node.js, Python)",
        "Microservices architecture",
        "Databases (PostgreSQL, MongoDB, Redis)",
        "Authentication & security (JWT, OAuth)",
        "Tests & Complete documentation"
      ],
      deliverables: [
        "Code source versionné (Git)",
        "Déploiement en production",
        "Formation équipe technique",
        "Support 3 mois inclus"
      ],
      deliverablesEn: [
        "Versioned source code (Git)",
        "Production deployment",
        "Technical team training",
        "3 months support included"
      ],
      duration: "4-12 semaines",
      durationEn: "4-12 weeks"
    },
    {
      id: "2",
      title: "Organisation d'Événements Tech",
      titleEn: "Tech Event Planning",
      description: "Orchestration d'événements tech mémorables - Conférences, hackathons, meetups et séminaires corporate tech",
      descriptionEn: "Orchestration of memorable tech events - Conferences, hackathons, meetups and corporate tech seminars",
      icon: CalendarIcon,
      iconColor: "text-purple-700",
      price: "",
      priceEn: "",
      features: [
        "Conférences tech & meetups développeurs",
        "Hackathons & coding competitions",
        "Workshops techniques & formations",
        "Séminaires corporate tech & innovation labs",
        "Plateformes digitales événementielles"
      ],
      featuresEn: [
        "Tech conferences & developer meetups",
        "Hackathons & coding competitions",
        "Technical workshops & training",
        "Corporate tech seminars & innovation labs",
        "Event digital platforms"
      ],
      deliverables: [
        "Cahier des charges événement",
        "Coordination jour-J",
        "Plateforme digitale si nécessaire",
        "Rapport post-événement"
      ],
      deliverablesEn: [
        "Event specifications",
        "D-day coordination",
        "Digital platform if needed",
        "Post-event report"
      ],
      duration: "2-16 semaines",
      durationEn: "2-16 weeks"
    },
    {
      id: "3",
      title: "Cloud & DevOps",
      titleEn: "Cloud & DevOps",
      description: "Déploiement, infrastructure cloud et automatisation pour des applications scalables",
      descriptionEn: "Deployment, cloud infrastructure and automation for scalable applications",
      icon: SparklesIcon,
      iconColor: "text-purple-700",
      price: "",
      priceEn: "",
      features: [
        "Conteneurisation (Docker, Kubernetes)",
        "CI/CD (GitHub Actions, GitLab CI)",
        "Infrastructure as Code (Terraform)",
        "Cloud (AWS, Azure, Google Cloud)",
        "Monitoring & logging (Prometheus, Grafana)"
      ],
      featuresEn: [
        "Containerization (Docker, Kubernetes)",
        "CI/CD (GitHub Actions, GitLab CI)",
        "Infrastructure as Code (Terraform)",
        "Cloud (AWS, Azure, Google Cloud)",
        "Monitoring & logging (Prometheus, Grafana)"
      ],
      deliverables: [
        "Fichiers Figma sources",
        "Design system documenté",
        "Assets & icônes exportés",
        "Guide de style"
      ],
      deliverablesEn: [
        "Source Figma files",
        "Documented design system",
        "Exported assets & icons",
        "Style guide"
      ],
      duration: "2-6 semaines",
      durationEn: "2-6 weeks"
    },
    {
      id: "4",
      title: "Formation & Mentorat Technique",
      titleEn: "Training & Technical Mentoring",
      description: "Formation de développeurs et transmission d'expertise backend, databases et bonnes pratiques",
      descriptionEn: "Developer training and backend expertise transfer, databases and best practices",
      icon: TrophyIcon,
      iconColor: "text-foreground",
      price: "",
      priceEn: "",
      features: [
        "Formations Backend (Node.js, Python, APIs)",
        "Workshops Bases de Données (PostgreSQL, MongoDB, Redis)",
        "Bootcamps Développement Web Fullstack",
        "Formations entreprise sur-mesure",
        "Mentorat développeurs junior & code reviews"
      ],
      featuresEn: [
        "Backend Training (Node.js, Python, APIs)",
        "Database Workshops (PostgreSQL, MongoDB, Redis)",
        "Full-Stack Web Development Bootcamps",
        "Custom corporate training programs",
        "Junior developer mentoring & code reviews"
      ],
      deliverables: [
        "Rapport d'audit détaillé",
        "Recommandations priorisées",
        "Documentation technique",
        "Sessions de formation"
      ],
      deliverablesEn: [
        "Detailed audit report",
        "Prioritized recommendations",
        "Technical documentation",
        "Training sessions"
      ],
      duration: "Flexible",
      durationEn: "Flexible"
    }
  ]

  const processSteps = [
    {
      number: "01",
      title: locale === "fr" ? "Découverte" : "Discovery",
      description: locale === "fr" 
        ? "Échange pour comprendre vos besoins, objectifs et contraintes"
        : "Discussion to understand your needs, goals and constraints"
    },
    {
      number: "02",
      title: locale === "fr" ? "Proposition" : "Proposal",
      description: locale === "fr"
        ? "Devis détaillé avec planning, livrables et conditions"
        : "Detailed quote with timeline, deliverables and conditions"
    },
    {
      number: "03",
      title: locale === "fr" ? "Réalisation" : "Execution",
      description: locale === "fr"
        ? "Développement itératif avec feedback réguliers et transparence totale"
        : "Iterative development with regular feedback and full transparency"
    },
    {
      number: "04",
      title: locale === "fr" ? "Livraison" : "Delivery",
      description: locale === "fr"
        ? "Mise en production, formation équipe et support post-lancement"
        : "Production launch, team training and post-launch support"
    }
  ]

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: locale === "fr" ? "Quels sont vos délais de réalisation ?" : "What are your turnaround times?",
      answer: locale === "fr"
        ? "Cela dépend du projet : comptez 4-12 semaines pour un site web complet, 2-6 semaines pour du design UI/UX, et de 2 à 16 semaines pour un événement selon l'ampleur."
        : "It depends on the project: expect 4-12 weeks for a complete website, 2-6 weeks for UI/UX design, and 2 to 16 weeks for an event depending on the scope."
    },
    {
      question: locale === "fr" ? "Travaillez-vous en remote ou sur site ?" : "Do you work remotely or on-site?",
      answer: locale === "fr"
        ? "Les deux ! Je travaille principalement en remote pour le développement et design, avec possibilité de déplacements pour les événements et réunions stratégiques."
        : "Both! I mainly work remotely for development and design, with the possibility of travel for events and strategic meetings."
    },
    {
      question: locale === "fr" ? "Proposez-vous des formules sur-mesure ?" : "Do you offer custom packages?",
      answer: locale === "fr"
        ? "Absolument. Chaque projet est unique et je peux adapter mes services à vos besoins spécifiques. N'hésitez pas à me contacter pour en discuter."
        : "Absolutely. Each project is unique and I can adapt my services to your specific needs. Feel free to contact me to discuss."
    },
    {
      question: locale === "fr" ? "Quel est votre processus de paiement ?" : "What is your payment process?",
      answer: locale === "fr"
        ? "Généralement : 30% à la signature, 40% à mi-parcours, et 30% à la livraison finale. Des arrangements peuvent être discutés selon les projets."
        : "Generally: 30% upon signature, 40% mid-project, and 30% upon final delivery. Arrangements can be discussed depending on the project."
    }
  ]

  return (
    <div className="w-full max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold bg-linear-to-r from-foreground via-primary to-purple-700 bg-clip-text text-transparent">
          {locale === "fr" ? "Mes Services" : "My Services"}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {locale === "fr" 
            ? "De l'idée à la réalisation, je vous accompagne avec une double expertise : développement web de pointe et organisation d'événements mémorables. Solutions digitales innovantes et expériences physiques inoubliables."
            : "From idea to execution, I support you with dual expertise: cutting-edge web development and memorable event planning. Innovative digital solutions and unforgettable physical experiences."
          }
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.id}
              className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-8 hover:border-purple-700 hover:shadow-lg hover:shadow-purple-700/10 transition-all group space-y-6"
            >
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className={`p-3 rounded-xl bg-card border-2 border-border group-hover:border-purple-700 transition-colors ${service.iconColor}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-foreground group-hover:text-purple-700 transition-colors">
                  {locale === "fr" ? service.title : service.titleEn}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {locale === "fr" ? service.description : service.descriptionEn}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  {locale === "fr" ? "Inclus" : "Included"}
                </h3>
                <ul className="space-y-2">
                  {(locale === "fr" ? service.features : service.featuresEn).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckIcon className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables & Duration */}
              <div className="pt-4 border-t border-border/50 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{locale === "fr" ? "Durée" : "Duration"}</span>
                  <span className="font-medium text-foreground">
                    {locale === "fr" ? service.duration : service.durationEn}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-purple-700/10 hover:bg-purple-700 text-purple-700 hover:text-white rounded-lg font-medium transition-all border border-purple-700/20 hover:border-purple-700"
              >
                {locale === "fr" ? "Demander un devis" : "Request a quote"}
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          )
        })}
      </div>

      {/* Process */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-foreground">
            {locale === "fr" ? "Comment je travaille" : "How I Work"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {locale === "fr"
              ? "Une approche structurée et transparente pour garantir votre satisfaction"
              : "A structured and transparent approach to ensure your satisfaction"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 hover:border-purple-700 transition-all"
            >
              <div className="space-y-3">
                <span className="text-5xl font-bold text-purple-700/20">{step.number}</span>
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-foreground">
            {locale === "fr" ? "Questions Fréquentes" : "Frequently Asked Questions"}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl overflow-hidden transition-all hover:border-purple-700"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-muted/50"
              >
                <h3 className="text-lg font-bold text-foreground pr-4">{faq.question}</h3>
                <span className={`text-2xl text-purple-700 transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaqIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-card/80 backdrop-blur-sm border-2 border-purple-700/20 rounded-xl p-8 text-center space-y-4">
        <SparklesIcon className="w-12 h-12 text-purple-700 mx-auto" />
        <h2 className="text-2xl font-bold text-foreground">
          {locale === "fr" 
            ? "Prêt à démarrer votre projet ?" 
            : "Ready to start your project?"}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {locale === "fr"
            ? "Discutons de vos besoins et trouvons la solution idéale pour concrétiser votre vision. Réponse sous 24h garantie."
            : "Let's discuss your needs and find the ideal solution to bring your vision to life. Response within 24 hours guaranteed."}
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-700 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors"
        >
          {locale === "fr" ? "Contactez-moi maintenant" : "Contact Me Now"}
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
