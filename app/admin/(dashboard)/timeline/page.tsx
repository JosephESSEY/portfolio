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
import { getTimeline, createTimelineItem, updateTimelineItem, deleteTimelineItem } from "@/lib/data-service"
import type { TimelineItem } from "@/lib/types"

export default function AdminTimelinePage() {
  const [items, setItems] = useState<TimelineItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    loadItems()
  }, [])

  async function loadItems() {
    const data = await getTimeline()
    setItems(data)
    setIsLoading(false)
  }

  const handleAdd = () => {
    setSelectedItem(null)
    setIsModalOpen(true)
  }

  const handleEdit = (item: TimelineItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleDelete = (item: TimelineItem) => {
    setSelectedItem(item)
    setIsDeleteDialogOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSaving(true)
    const formData = new FormData(e.currentTarget)

    const itemData = {
      year: formData.get("year") as string,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      type: formData.get("type") as "work" | "education" | "achievement",
    }

    if (selectedItem) {
      await updateTimelineItem(selectedItem.id, itemData)
    } else {
      await createTimelineItem(itemData)
    }

    await loadItems()
    setIsModalOpen(false)
    setIsSaving(false)
  }

  const confirmDelete = async () => {
    if (!selectedItem) return
    setIsSaving(true)
    await deleteTimelineItem(selectedItem.id)
    await loadItems()
    setIsDeleteDialogOpen(false)
    setIsSaving(false)
  }

  const typeLabels = {
    work: "Expérience",
    education: "Formation",
    achievement: "Récompense",
  }

  const typeColors = {
    work: "bg-info/10 text-info",
    education: "bg-success/10 text-success",
    achievement: "bg-warning/10 text-warning",
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Parcours</h1>
        <p className="text-muted-foreground mt-1">Gérez votre parcours professionnel et formations</p>
      </div>

      <DataTable
        title="Chronologie"
        description={`${items.length} élément${items.length > 1 ? "s" : ""}`}
        data={items}
        isLoading={isLoading}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        columns={[
          { key: "year", header: "Année" },
          { key: "title", header: "Titre" },
          {
            key: "description",
            header: "Description",
            render: (item) => (
              <span className="text-sm text-muted-foreground line-clamp-1 max-w-xs">{item.description}</span>
            ),
          },
          {
            key: "type",
            header: "Type",
            render: (item) => (
              <span className={`px-2 py-1 text-xs rounded-full ${typeColors[item.type]}`}>{typeLabels[item.type]}</span>
            ),
          },
        ]}
        emptyMessage="Aucun élément dans le parcours"
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedItem ? "Modifier l'élément" : "Nouvel élément"}
        size="md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="year">Année</Label>
              <Input id="year" name="year" defaultValue={selectedItem?.year} placeholder="2024" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <select
                id="type"
                name="type"
                defaultValue={selectedItem?.type || "work"}
                className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground"
                required
              >
                <option value="work">Expérience</option>
                <option value="education">Formation</option>
                <option value="achievement">Récompense</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Titre</Label>
            <Input
              id="title"
              name="title"
              defaultValue={selectedItem?.title}
              placeholder="Senior Developer @ Company"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" rows={3} defaultValue={selectedItem?.description} required />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
              Annuler
            </Button>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? "Enregistrement..." : selectedItem ? "Mettre à jour" : "Créer"}
            </Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Supprimer l'élément"
        message={`Êtes-vous sûr de vouloir supprimer "${selectedItem?.title}" ?`}
        confirmText="Supprimer"
        isLoading={isSaving}
      />
    </div>
  )
}
