"use client"

import { useTranslation } from "@/hooks/use-translation"
import { CalendarIcon, UsersIcon, MapPinIcon, TrophyIcon, EyeIcon } from "@/components/icons"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import { useState } from "react"

// Types pour les événements
interface Speaker {
  name: string
  role: string
  company?: string
}

interface Event {
  id: string
  title: string
  type: "corporate" | "private" | "digital"
  date: string
  location: string
  role: string
  attendees: number
  description: string
  achievements: string[]
  image: string
  imageAlt: string
  gallery?: string[]
  speakers?: Speaker[]
  tags: string[]
}

// Données mockées des événements
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Tech Summit Africa 2024",
    type: "corporate",
    date: "Septembre 2024",
    location: "Lomé, Togo",
    role: "Lead Event Planner & Coordinateur Principal",
    attendees: 500,
    description: "Organisation complète d'une conférence tech majeure réunissant entrepreneurs, développeurs et investisseurs d'Afrique de l'Ouest.",
    achievements: [
      "Coordination de 15+ speakers internationaux",
      "Gestion de 3 tracks simultanés",
      "Installation réseau et infrastructure technique",
      "Couverture média et live streaming"
    ],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
    imageAlt: "Tech Summit Africa 2024 - Conférence tech",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=500&fit=crop"
    ],
    speakers: [
      { name: "Dr. Amina Kouassi", role: "CEO", company: "TechHub Africa" },
      { name: "Jean-Paul Mensah", role: "CTO", company: "CloudWorks" },
      { name: "Sarah Diallo", role: "Founder", company: "StartupLab" }
    ],
    tags: ["Tech", "Corporate", "International", "Conférence"]
  },
  {
    id: "2",
    title: "Mariage Royal - Famille Ayité",
    type: "private",
    date: "Juin 2024",
    location: "Aného, Togo",
    role: "Wedding Planner & Décorateur",
    attendees: 300,
    description: "Organisation d'un mariage de luxe combinant traditions togolaises et élégance moderne.",
    achievements: [
      "Design et décoration personnalisés",
      "Coordination de 5 prestataires (traiteur, DJ, photographe)",
      "Timeline parfaitement respectée",
      "Satisfaction client 5/5 étoiles"
    ],
    image: "https://images.unsplash.com/photo-1519167758481-83f29da8c2d0?w=800&h=500&fit=crop",
    imageAlt: "Mariage Royal - Décoration luxueuse",
    gallery: [
      "https://images.unsplash.com/photo-1519167758481-83f29da8c2d0?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=500&fit=crop"
    ],
    tags: ["Mariage", "Privé", "Luxe", "Tradition"]
  },
  {
    id: "3",
    title: "Digital Awards Ceremony",
    type: "digital",
    date: "Mars 2024",
    location: "Événement Hybride - Lomé & Online",
    role: "Event Producer & Tech Lead",
    attendees: 200,
    description: "Cérémonie de remise de prix innovante avec participation en présentiel et virtuelle.",
    achievements: [
      "Plateforme de streaming custom développée",
      "Système de vote en temps réel",
      "Expérience interactive AR pour participants online",
      "Zéro incident technique"
    ],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop",
    imageAlt: "Digital Awards Ceremony - Événement hybride",
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=500&fit=crop"
    ],
    speakers: [
      { name: "Marie Koné", role: "Host & Presenter" },
      { name: "David Akoto", role: "Technical Director" }
    ],
    tags: ["Hybride", "Tech", "Innovation", "Streaming"]
  },
  {
    id: "4",
    title: "Team Building - StartupLab",
    type: "corporate",
    date: "Janvier 2024",
    location: "Kpalimé, Togo",
    role: "Organisateur & Facilitateur",
    attendees: 50,
    description: "Week-end de team building pour une startup tech avec activités outdoor et workshops.",
    achievements: [
      "Programme d'activités sur-mesure",
      "Logistique transport et hébergement",
      "Ateliers de développement d'équipe",
      "Feedback très positif des participants"
    ],
    image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&h=500&fit=crop",
    imageAlt: "Team Building outdoor à Kpalimé",
    gallery: [
      "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=500&fit=crop"
    ],
    tags: ["Corporate", "Team Building", "Outdoor", "Startup"]
  },
  {
    id: "5",
    title: "Festival de Musique Urbaine",
    type: "private",
    date: "Décembre 2023",
    location: "Lomé, Togo",
    role: "Co-Organisateur & Responsable Logistique",
    attendees: 1000,
    description: "Festival musical outdoor avec 10 artistes locaux et internationaux.",
    achievements: [
      "Gestion de la scène et sonorisation",
      "Coordination sécurité et accueil",
      "Food trucks et espaces VIP",
      "Événement sold-out"
    ],
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=500&fit=crop",
    imageAlt: "Festival de Musique Urbaine - Scène principale",
    gallery: [
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=500&fit=crop"
    ],
    speakers: [
      { name: "DJ Khalifa", role: "Headliner" },
      { name: "Aya Flow", role: "Artist" },
      { name: "Black King", role: "Artist" }
    ],
    tags: ["Festival", "Musique", "Outdoor", "Large Scale"]
  },
  {
    id: "6",
    title: "Lancement de Produit - TechCo",
    type: "corporate",
    date: "Octobre 2023",
    location: "Accra, Ghana",
    role: "Event Manager",
    attendees: 150,
    description: "Événement de lancement produit avec démonstrations live et cocktail networking.",
    achievements: [
      "Scénographie et mise en scène produit",
      "Démonstrations techniques interactives",
      "Gestion médias et influenceurs",
      "ROI événement: 250% des objectifs"
    ],
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=500&fit=crop",
    imageAlt: "Lancement de Produit TechCo - Présentation",
    gallery: [
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=500&fit=crop"
    ],
    speakers: [
      { name: "Kwame Asante", role: "CEO", company: "TechCo" },
      { name: "Lisa Chen", role: "Product Manager", company: "TechCo" }
    ],
    tags: ["Lancement", "Corporate", "Tech", "Networking"]
  }
]

export default function EventsPage() {
  const { t, locale } = useTranslation()

  const getTypeLabel = (type: Event["type"]) => {
    const labels = {
      fr: {
        corporate: "Corporate",
        private: "Privé",
        digital: "Digital/Hybride"
      },
      en: {
        corporate: "Corporate",
        private: "Private",
        digital: "Digital/Hybrid"
      }
    }
    return labels[locale][type]
  }

  const getTypeBadgeColor = (type: Event["type"]) => {
    const colors = {
      corporate: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      private: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      digital: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
    }
    return colors[type]
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold bg-linear-to-r from-foreground via-purple-500 to-primary bg-clip-text text-transparent">
          {locale === "fr" ? "Mes Événements" : "My Events"}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {locale === "fr" 
            ? "Plus de 50 événements organisés avec succès - De l'intime au large scale, du corporate au privé, du traditionnel au digital."
            : "Over 50 successfully organized events - From intimate to large scale, corporate to private, traditional to digital."
          }
        </p>
      </div>

      {/* Stats rapides */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
          <div className="text-3xl font-bold text-purple-500 mb-2">50+</div>
          <div className="text-sm text-muted-foreground">
            {locale === "fr" ? "Événements" : "Events"}
          </div>
        </div>
        <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all">
          <div className="text-3xl font-bold text-primary mb-2">5000+</div>
          <div className="text-sm text-muted-foreground">
            {locale === "fr" ? "Participants" : "Attendees"}
          </div>
        </div>
        <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10 transition-all">
          <div className="text-3xl font-bold text-emerald-500 mb-2">98%</div>
          <div className="text-sm text-muted-foreground">
            {locale === "fr" ? "Satisfaction" : "Satisfaction"}
          </div>
        </div>
        <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
          <div className="text-3xl font-bold text-orange-500 mb-2">3</div>
          <div className="text-sm text-muted-foreground">
            {locale === "fr" ? "Pays" : "Countries"}
          </div>
        </div>
      </div>

      {/* Liste des événements */}
      <div className="space-y-6">
        {mockEvents.map((event, index) => (
          <Dialog key={event.id}>
            <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 lg:p-8 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all group">
              <div className="space-y-4">
                {/* Header de l'événement */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-2xl font-bold text-foreground group-hover:text-purple-500 transition-colors">
                        {event.title}
                      </h2>
                      <span className={`text-xs px-3 py-1 rounded-full border ${getTypeBadgeColor(event.type)}`}>
                        {getTypeLabel(event.type)}
                      </span>
                    </div>
                    <p className="text-lg font-medium text-primary">{event.role}</p>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground lg:text-right">
                    <div className="flex items-center gap-2 lg:justify-end">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 lg:justify-end">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 lg:justify-end">
                      <UsersIcon className="w-4 h-4" />
                      <span>{event.attendees} {locale === "fr" ? "participants" : "attendees"}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>

                {/* Speakers si disponibles */}
                {event.speakers && event.speakers.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">
                      {locale === "fr" ? "Intervenants" : "Speakers"}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {event.speakers.map((speaker, idx) => (
                        <div key={idx} className="text-sm px-3 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
                          <span className="font-medium">{speaker.name}</span>
                          {speaker.company && <span className="text-muted-foreground"> · {speaker.company}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bouton pour voir les détails/images */}
                <DialogTrigger asChild>
                  <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-all">
                    <EyeIcon className="w-5 h-5" />
                    {locale === "fr" ? "Voir les photos et détails" : "View Photos & Details"}
                  </button>
                </DialogTrigger>
              </div>
            </div>

            {/* Modal avec détails complets */}
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{event.title}</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Galerie d'images */}
                {event.gallery && event.gallery.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.gallery.map((img, idx) => (
                      <div key={idx} className="relative h-64 w-full rounded-lg overflow-hidden">
                        <Image
                          src={img}
                          alt={`${event.title} - Image ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Infos détaillées */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">{locale === "fr" ? "Date" : "Date"}</div>
                    <div className="font-medium">{event.date}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">{locale === "fr" ? "Lieu" : "Location"}</div>
                    <div className="font-medium">{event.location}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">{locale === "fr" ? "Participants" : "Attendees"}</div>
                    <div className="font-medium">{event.attendees}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">{locale === "fr" ? "Type" : "Type"}</div>
                    <div className="font-medium">{getTypeLabel(event.type)}</div>
                  </div>
                </div>

                {/* Mon rôle */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{locale === "fr" ? "Mon rôle" : "My Role"}</h3>
                  <p className="text-primary font-medium">{event.role}</p>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{locale === "fr" ? "Description" : "Description"}</h3>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </div>

                {/* Réalisations */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <TrophyIcon className="w-5 h-5 text-purple-500" />
                    {locale === "fr" ? "Réalisations clés" : "Key Achievements"}
                  </h3>
                  <ul className="space-y-2">
                    {event.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">✓</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Speakers détaillés */}
                {event.speakers && event.speakers.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">
                      {locale === "fr" ? "Intervenants / Artistes" : "Speakers / Artists"}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {event.speakers.map((speaker, idx) => (
                        <div key={idx} className="p-4 rounded-lg bg-card border border-border">
                          <div className="font-medium text-foreground">{speaker.name}</div>
                          <div className="text-sm text-muted-foreground">{speaker.role}</div>
                          {speaker.company && <div className="text-sm text-primary">{speaker.company}</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {/* Call to action */}
      <div className="bg-card/80 backdrop-blur-sm border-2 border-purple-500/20 rounded-xl p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold text-foreground">
          {locale === "fr" 
            ? "Un projet d'événement en tête ?" 
            : "Have an event project in mind?"}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {locale === "fr"
            ? "Que ce soit un événement corporate, privé ou digital, je peux vous aider à créer une expérience mémorable. Discutons de votre projet !"
            : "Whether it's a corporate, private or digital event, I can help you create a memorable experience. Let's discuss your project!"}
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors"
        >
          {locale === "fr" ? "Planifions votre événement" : "Let's Plan Your Event"}
        </a>
      </div>
    </div>
  )
}
