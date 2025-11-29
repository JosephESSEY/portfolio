"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { DataTable } from "@/components/admin/data-table"
import { Modal } from "@/components/admin/modal"
import { ConfirmDialog } from "@/components/admin/confirm-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { getProjects, createProject, updateProject, deleteProject } from "@/lib/data-service"
import type { Project } from "@/lib/types"
import Image from "next/image"

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    loadProjects()
  }, [])

  async function loadProjects() {
    const data = await getProjects()
    setProjects(data)
    setIsLoading(false)
  }

  const handleAdd = () => {
    setSelectedProject(null)
    setIsModalOpen(true)
  }

  const handleEdit = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleDelete = (project: Project) => {
    setSelectedProject(project)
    setIsDeleteDialogOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSaving(true)
    const formData = new FormData(e.currentTarget)

    const projectData = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      longDescription: (formData.get("longDescription") as string) || undefined,
      technologies: (formData.get("technologies") as string).split(",").map((t) => t.trim()),
      imageUrl: formData.get("imageUrl") as string,
      liveUrl: (formData.get("liveUrl") as string) || undefined,
      githubUrl: (formData.get("githubUrl") as string) || undefined,
      featured: formData.get("featured") === "on",
      order: Number.parseInt(formData.get("order") as string) || projects.length + 1,
    }

    if (selectedProject) {
      await updateProject(selectedProject.id, projectData)
    } else {
      await createProject(projectData)
    }

    await loadProjects()
    setIsModalOpen(false)
    setIsSaving(false)
  }

  const confirmDelete = async () => {
    if (!selectedProject) return
    setIsSaving(true)
    await deleteProject(selectedProject.id)
    await loadProjects()
    setIsDeleteDialogOpen(false)
    setIsSaving(false)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Projets</h1>
        <p className="text-muted-foreground mt-1">Gérez vos projets et réalisations</p>
      </div>

      <DataTable
        title="Tous les projets"
        description={`${projects.length} projet${projects.length > 1 ? "s" : ""}`}
        data={projects}
        isLoading={isLoading}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        columns={[
          {
            key: "imageUrl",
            header: "Image",
            render: (project) => (
              <div className="w-16 h-10 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  width={64}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            ),
          },
          { key: "title", header: "Titre" },
          {
            key: "technologies",
            header: "Technologies",
            render: (project) => (
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-xs bg-muted rounded-full">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-0.5 text-xs bg-muted rounded-full">+{project.technologies.length - 3}</span>
                )}
              </div>
            ),
          },
          {
            key: "featured",
            header: "Statut",
            render: (project) => (
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  project.featured ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
                }`}
              >
                {project.featured ? "En avant" : "Normal"}
              </span>
            ),
          },
          { key: "order", header: "Ordre" },
        ]}
        emptyMessage="Aucun projet pour le moment"
      />

      {/* Project Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedProject ? "Modifier le projet" : "Nouveau projet"}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Titre</Label>
              <Input id="title" name="title" defaultValue={selectedProject?.title} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="order">Ordre d'affichage</Label>
              <Input
                id="order"
                name="order"
                type="number"
                defaultValue={selectedProject?.order || projects.length + 1}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description courte</Label>
            <Input id="description" name="description" defaultValue={selectedProject?.description} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="longDescription">Description détaillée</Label>
            <Textarea
              id="longDescription"
              name="longDescription"
              rows={4}
              defaultValue={selectedProject?.longDescription}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="technologies">Technologies (séparées par des virgules)</Label>
            <Input
              id="technologies"
              name="technologies"
              defaultValue={selectedProject?.technologies.join(", ")}
              placeholder="React, Next.js, TypeScript"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="imageUrl">URL de l'image</Label>
            <Input
              id="imageUrl"
              name="imageUrl"
              defaultValue={selectedProject?.imageUrl}
              placeholder="/images/project.jpg"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="liveUrl">URL du site live</Label>
              <Input id="liveUrl" name="liveUrl" defaultValue={selectedProject?.liveUrl} placeholder="https://..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="githubUrl">URL GitHub</Label>
              <Input
                id="githubUrl"
                name="githubUrl"
                defaultValue={selectedProject?.githubUrl}
                placeholder="https://github.com/..."
              />
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
            <Switch id="featured" name="featured" defaultChecked={selectedProject?.featured} />
            <Label htmlFor="featured" className="cursor-pointer">
              Mettre en avant sur la page d'accueil
            </Label>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
              Annuler
            </Button>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? "Enregistrement..." : selectedProject ? "Mettre à jour" : "Créer"}
            </Button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Supprimer le projet"
        message={`Êtes-vous sûr de vouloir supprimer "${selectedProject?.title}" ? Cette action est irréversible.`}
        confirmText="Supprimer"
        isLoading={isSaving}
      />
    </div>
  )
}
