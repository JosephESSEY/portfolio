"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { getProfile, updateProfile } from "@/lib/data-service"
import type { Profile } from "@/lib/types"
import { CheckIcon, UploadIcon } from "@/components/icons"
import Image from "next/image"

export default function AdminProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [savedMessage, setSavedMessage] = useState(false)

  useEffect(() => {
    async function loadProfile() {
      const data = await getProfile()
      setProfile(data)
      setIsLoading(false)
    }
    loadProfile()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!profile) return

    setIsSaving(true)
    const formData = new FormData(e.currentTarget)

    const updatedProfile = await updateProfile({
      name: formData.get("name") as string,
      role: formData.get("role") as string,
      tagline: formData.get("tagline") as string,
      bio: formData.get("bio") as string,
      email: formData.get("email") as string,
      location: formData.get("location") as string,
      available: profile.available,
    })

    setProfile(updatedProfile)
    setIsSaving(false)
    setSavedMessage(true)
    setTimeout(() => setSavedMessage(false), 3000)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-foreground/20 border-t-foreground rounded-full animate-spin" />
      </div>
    )
  }

  if (!profile) return null

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Profil</h1>
        <p className="text-muted-foreground mt-1">Gérez vos informations personnelles</p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-2xl border border-border/50 p-6 space-y-6"
      >
        {/* Avatar Section */}
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-2xl overflow-hidden bg-muted">
            <Image
              src={profile.avatarUrl || "/placeholder.svg"}
              alt={profile.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Button type="button" variant="outline" className="gap-2 bg-transparent">
              <UploadIcon className="h-4 w-4" />
              Changer la photo
            </Button>
            <p className="text-xs text-muted-foreground mt-2">JPG, PNG ou GIF. Max 2MB.</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet</Label>
            <Input id="name" name="name" defaultValue={profile.name} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Titre / Rôle</Label>
            <Input id="role" name="role" defaultValue={profile.role} required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tagline">Tagline</Label>
          <Input id="tagline" name="tagline" defaultValue={profile.tagline} required />
          <p className="text-xs text-muted-foreground">Une phrase d'accroche courte affichée sur la page d'accueil</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Biographie</Label>
          <Textarea id="bio" name="bio" rows={6} defaultValue={profile.bio} required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" defaultValue={profile.email} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Localisation</Label>
            <Input id="location" name="location" defaultValue={profile.location} required />
          </div>
        </div>

        <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
          <div>
            <p className="font-medium text-foreground">Disponible pour de nouveaux projets</p>
            <p className="text-sm text-muted-foreground">Affiche un indicateur sur votre portfolio</p>
          </div>
          <Switch
            checked={profile.available}
            onCheckedChange={(checked) => setProfile({ ...profile, available: checked })}
          />
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          {savedMessage && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-success"
            >
              <CheckIcon className="h-4 w-4" />
              <span className="text-sm">Modifications enregistrées</span>
            </motion.div>
          )}
          <div className="flex-1" />
          <Button type="submit" disabled={isSaving}>
            {isSaving ? "Enregistrement..." : "Enregistrer"}
          </Button>
        </div>
      </motion.form>
    </div>
  )
}
