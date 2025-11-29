"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { DataTable } from "@/components/admin/data-table"
import { Modal } from "@/components/admin/modal"
import { ConfirmDialog } from "@/components/admin/confirm-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getSocialLinks, createSocialLink, updateSocialLink, deleteSocialLink } from "@/lib/data-service"
import { getSocialIcon } from "@/components/icons"
import type { SocialLink } from "@/lib/types"

export default function AdminSocialPage() {
  const [links, setLinks] = useState<SocialLink[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedLink, setSelectedLink] = useState<SocialLink | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    loadLinks()
  }, [])

  async function loadLinks() {
    const data = await getSocialLinks()
    setLinks(data)
    setIsLoading(false)
  }

  const handleAdd = () => {
    setSelectedLink(null)
    setIsModalOpen(true)
  }

  const handleEdit = (link: SocialLink) => {
    setSelectedLink(link)
    setIsModalOpen(true)
  }

  const handleDelete = (link: SocialLink) => {
    setSelectedLink(link)
    setIsDeleteDialogOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSaving(true)
    const formData = new FormData(e.currentTarget)

    const linkData = {
      platform: formData.get("platform") as string,
      url: formData.get("url") as string,
      icon: formData.get("icon") as string,
      username: formData.get("username") as string,
    }

    if (selectedLink) {
      await updateSocialLink(selectedLink.id, linkData)
    } else {
      await createSocialLink(linkData)
    }

    await loadLinks()
    setIsModalOpen(false)
    setIsSaving(false)
  }

  const confirmDelete = async () => {
    if (!selectedLink) return
    setIsSaving(true)
    await deleteSocialLink(selectedLink.id)
    await loadLinks()
    setIsDeleteDialogOpen(false)
    setIsSaving(false)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Réseaux sociaux</h1>
        <p className="text-muted-foreground mt-1">Gérez vos liens vers les réseaux sociaux</p>
      </div>

      <DataTable
        title="Tous les liens"
        description={`${links.length} lien${links.length > 1 ? "s" : ""}`}
        data={links}
        isLoading={isLoading}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        columns={[
          {
            key: "icon",
            header: "Icône",
            render: (link) => (
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                {getSocialIcon(link.icon, "h-5 w-5")}
              </div>
            ),
          },
          { key: "platform", header: "Plateforme" },
          { key: "username", header: "Nom d'utilisateur" },
          {
            key: "url",
            header: "URL",
            render: (link) => (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-info hover:underline truncate max-w-xs block"
              >
                {link.url}
              </a>
            ),
          },
        ]}
        emptyMessage="Aucun lien social pour le moment"
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedLink ? "Modifier le lien" : "Nouveau lien social"}
        size="md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="platform">Plateforme</Label>
              <Input
                id="platform"
                name="platform"
                defaultValue={selectedLink?.platform}
                placeholder="GitHub, LinkedIn, etc."
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="icon">Icône</Label>
              <Input
                id="icon"
                name="icon"
                defaultValue={selectedLink?.icon}
                placeholder="github, linkedin, twitter, etc."
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Nom d'utilisateur</Label>
            <Input
              id="username"
              name="username"
              defaultValue={selectedLink?.username}
              placeholder="@username"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              name="url"
              type="url"
              defaultValue={selectedLink?.url}
              placeholder="https://github.com/username"
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
              Annuler
            </Button>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? "Enregistrement..." : selectedLink ? "Mettre à jour" : "Créer"}
            </Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Supprimer le lien"
        message={`Êtes-vous sûr de vouloir supprimer le lien "${selectedLink?.platform}" ?`}
        confirmText="Supprimer"
        isLoading={isSaving}
      />
    </div>
  )
}
