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
import { getCustomBlocks, createCustomBlock, updateCustomBlock, deleteCustomBlock } from "@/lib/data-service"
import type { CustomBlock } from "@/lib/types"

export default function AdminBlocksPage() {
  const [blocks, setBlocks] = useState<CustomBlock[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedBlock, setSelectedBlock] = useState<CustomBlock | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    loadBlocks()
  }, [])

  async function loadBlocks() {
    const data = await getCustomBlocks()
    setBlocks(data)
    setIsLoading(false)
  }

  const handleAdd = () => {
    setSelectedBlock(null)
    setIsModalOpen(true)
  }

  const handleEdit = (block: CustomBlock) => {
    setSelectedBlock(block)
    setIsModalOpen(true)
  }

  const handleDelete = (block: CustomBlock) => {
    setSelectedBlock(block)
    setIsDeleteDialogOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSaving(true)
    const formData = new FormData(e.currentTarget)

    const type = formData.get("type") as CustomBlock["type"]
    let metadata: Record<string, unknown> | undefined

    if (type === "stats") {
      const statsInput = formData.get("statsData") as string
      try {
        metadata = { stats: JSON.parse(statsInput) }
      } catch {
        metadata = { stats: [] }
      }
    }

    const blockData = {
      type,
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      order: Number.parseInt(formData.get("order") as string) || blocks.length + 1,
      metadata,
    }

    if (selectedBlock) {
      await updateCustomBlock(selectedBlock.id, blockData)
    } else {
      await createCustomBlock(blockData)
    }

    await loadBlocks()
    setIsModalOpen(false)
    setIsSaving(false)
  }

  const confirmDelete = async () => {
    if (!selectedBlock) return
    setIsSaving(true)
    await deleteCustomBlock(selectedBlock.id)
    await loadBlocks()
    setIsDeleteDialogOpen(false)
    setIsSaving(false)
  }

  const typeLabels: Record<CustomBlock["type"], string> = {
    text: "Texte",
    image: "Image",
    stats: "Statistiques",
    quote: "Citation",
    timeline: "Timeline",
    achievement: "Récompense",
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Blocs personnalisés</h1>
        <p className="text-muted-foreground mt-1">Créez des blocs personnalisés pour votre page d'accueil</p>
      </div>

      <DataTable
        title="Tous les blocs"
        description={`${blocks.length} bloc${blocks.length > 1 ? "s" : ""}`}
        data={blocks}
        isLoading={isLoading}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        columns={[
          { key: "title", header: "Titre" },
          {
            key: "type",
            header: "Type",
            render: (block) => (
              <span className="px-2 py-1 text-xs bg-muted rounded-full">{typeLabels[block.type]}</span>
            ),
          },
          {
            key: "content",
            header: "Contenu",
            render: (block) => (
              <span className="text-sm text-muted-foreground line-clamp-1 max-w-xs">{block.content || "—"}</span>
            ),
          },
          { key: "order", header: "Ordre" },
        ]}
        emptyMessage="Aucun bloc personnalisé"
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedBlock ? "Modifier le bloc" : "Nouveau bloc"}
        size="md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <select
                id="type"
                name="type"
                defaultValue={selectedBlock?.type || "text"}
                className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground"
                required
              >
                <option value="text">Texte</option>
                <option value="quote">Citation</option>
                <option value="stats">Statistiques</option>
                <option value="achievement">Récompense</option>
                <option value="image">Image</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="order">Ordre</Label>
              <Input id="order" name="order" type="number" defaultValue={selectedBlock?.order || blocks.length + 1} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Titre</Label>
            <Input id="title" name="title" defaultValue={selectedBlock?.title} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Contenu</Label>
            <Textarea
              id="content"
              name="content"
              rows={4}
              defaultValue={selectedBlock?.content}
              placeholder="Contenu du bloc..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="statsData">Données stats (JSON, optionnel)</Label>
            <Textarea
              id="statsData"
              name="statsData"
              rows={3}
              defaultValue={selectedBlock?.metadata?.stats ? JSON.stringify(selectedBlock.metadata.stats, null, 2) : ""}
              placeholder='[{"label": "Projets", "value": "50+"}]'
            />
            <p className="text-xs text-muted-foreground">
              Format: [{"{"}"label": "Nom", "value": "Valeur"{"}"}, ...]
            </p>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
              Annuler
            </Button>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? "Enregistrement..." : selectedBlock ? "Mettre à jour" : "Créer"}
            </Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Supprimer le bloc"
        message={`Êtes-vous sûr de vouloir supprimer "${selectedBlock?.title}" ?`}
        confirmText="Supprimer"
        isLoading={isSaving}
      />
    </div>
  )
}
