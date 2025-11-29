import Image from "next/image"
import { getProfile, getTimeline, getSkillsByCategory } from "@/lib/data-service"
import { SkillsCard } from "@/components/bento/skills-card"
import { BentoGrid } from "@/components/bento/bento-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "À propos | Alexandre Dupont",
  description: "Découvrez mon parcours, mes compétences et ma vision du développement web.",
}

export default async function AboutPage() {
  const [profile, timeline, skillsByCategory] = await Promise.all([getProfile(), getTimeline(), getSkillsByCategory()])

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">À propos</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Passionné par la création d'expériences numériques exceptionnelles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-1">
          <div className="sticky top-28">
            <div className="rounded-2xl overflow-hidden bg-card border border-border/50 p-6">
              <div className="aspect-square rounded-xl overflow-hidden mb-6">
                <Image
                  src={profile.avatarUrl || "/placeholder.svg"}
                  alt={profile.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-foreground">{profile.name}</h2>
              <p className="text-muted-foreground">{profile.role}</p>
              <p className="text-sm text-muted-foreground mt-2">{profile.location}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Mon histoire</h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{profile.bio}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Parcours</h2>
            <div className="space-y-6">
              {timeline.map((item) => (
                <div key={item.id} className="relative pl-8 pb-6 border-l-2 border-border last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">{item.year}</span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">Compétences</h2>
        <BentoGrid>
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <SkillsCard key={category} category={category} skills={skills} />
          ))}
        </BentoGrid>
      </section>
    </div>
  )
}
