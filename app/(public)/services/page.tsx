import { BentoGrid } from "@/components/bento/bento-grid"
import { ServiceCard } from "@/components/bento/service-card"
import { ContactCard } from "@/components/bento/contact-card"
import { getServices, getProfile } from "@/lib/data-service"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Alexandre Dupont",
  description: "Développement web, design UI/UX, consulting technique et prototypage rapide.",
}

export default async function ServicesPage() {
  const [services, profile] = await Promise.all([getServices(), getProfile()])

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Je propose une gamme complète de services pour donner vie à vos projets digitaux.
        </p>
      </div>

      <BentoGrid>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
        <ContactCard email={profile.email} available={profile.available} />
      </BentoGrid>
    </div>
  )
}
