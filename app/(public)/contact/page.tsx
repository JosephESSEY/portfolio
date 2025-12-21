"use client"

import type React from "react"

import { useState } from "react"
import { BentoCard } from "@/components/bento/bento-card"
import { MailIcon, MapPinIcon, CheckIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">Vous avez un projet en tête ? Discutons-en ensemble.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <BentoCard size="large" hoverEffect={false} className="col-span-2 row-span-2 h-auto">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
                  <CheckIcon className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Message envoyé !</h3>
                <p className="text-muted-foreground">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom</Label>
                    <Input id="name" name="name" placeholder="Joseph....." required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="joseph@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input id="subject" name="subject" placeholder="À propos de mon projet..." required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre projet ou votre question..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            )}
          </BentoCard>
        </div>

        <div className="space-y-4">
          <BentoCard size="small" hoverEffect={false}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-secondary">
                <MailIcon className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:hello@josephessey.dev" className="font-medium text-foreground hover:underline">
                  hello@josephessey.dev
                </a>
              </div>
            </div>
          </BentoCard>

          <BentoCard size="small" hoverEffect={false}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-secondary">
                <MapPinIcon className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Localisation</p>
                <p className="font-medium text-foreground">Lomé, Togo</p>
              </div>
            </div>
          </BentoCard>

          <BentoCard size="small" className="bg-foreground text-background" hoverEffect={false}>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
              <p className="font-medium">Disponible pour de nouveaux projets</p>
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  )
}
