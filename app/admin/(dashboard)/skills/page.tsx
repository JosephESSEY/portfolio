"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { DataTable } from "@/components/admin/data-table"
import { Modal } from "@/components/admin/modal"
import { ConfirmDialog } from "@/components/admin/confirm-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getSkills, createSkill, updateSkill, deleteSkill } from "@/lib/data-service"
import type { Skill } from "@/lib/types"

export default function AdminSkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    loadSkills()
  }, [])

  async function loadSkills() {
    const data = await getSkills()
    setSkills(data)
    setIsLoading(false)
  }

  const handleAdd = () => {
    setSelectedSkill(null)
    setIsModalOpen(true)
  }

  const handleEdit = (skill: Skill) => {
    setSelectedSkill(skill)
    setIsModalOpen(true)
  }

  const handleDelete = (skill: Skill) => {
    setSelectedSkill(skill)
    setIsDeleteDialogOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSaving(true)
    const formData = new FormData(e.currentTarget)

    const skillData = {
      name: formData.get("name") as string,
      category: formData.get("category") as string,
      level: Number.parseInt(formData.get("level") as string),
      icon: (formData.get("icon") as string) || undefined,
    }

    if (selectedSkill) {
      await updateSkill(selectedSkill.id, skillData)
    } else {
      await createSkill(skillData)
    }

    await loadSkills()
    setIsModalOpen(false)
    setIsSaving(false)
  }

  const confirmDelete = async () => {
    if (!selectedSkill) return
    setIsSaving(true)
    await deleteSkill(selectedSkill.id)
    await loadSkills()
    setIsDeleteDialogOpen(false)
    setIsSaving(false)
  }

  const categories = [...new Set(skills.map((s) => s.category))]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Compétences</h1>
        <p className="text-muted-foreground mt-1">Gérez vos compétences techniques et soft skills</p>
      </div>

      <DataTable
        title="Toutes les compétences"
        description={`${skills.length} compétence${skills.length > 1 ? "s" : ""} dans ${categories.length} catégorie${categories.length > 1 ? "s" : ""}`}
        data={skills}
        isLoading={isLoading}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        columns={[
          { key: "name", header: "Nom" },
          {
            key: "category",
            header: "Catégorie",
            render: (skill) => <span className="px-2 py-1 text-xs bg-muted rounded-full">{skill.category}</span>,
          },
          {
            key: "level",
            header: "Niveau",
            render: (skill) => (
              <div className="flex items-center gap-3">
                <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-foreground rounded-full" style={{ width: `${skill.level}%` }} />
                </div>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
            ),
          },
        ]}
        emptyMessage="Aucune compétence pour le moment"
      />

      {/* Skill Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedSkill ? "Modifier la compétence" : "Nouvelle compétence"}
        size="md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom</Label>
            <Input
              id="name"
              name="name"
              defaultValue={selectedSkill?.name}
              placeholder="React, TypeScript, etc."
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Catégorie</Label>
            <Input
              id="category"
              name="category"
              defaultValue={selectedSkill?.category}
              placeholder="Frontend, Backend, Design, etc."
              list="categories"
              required
            />
            <datalist id="categories">
              {categories.map((cat) => (
                <option key={cat} value={cat} />
              ))}
            </datalist>
          </div>

          <div className="space-y-2">
            <Label htmlFor="level">Niveau de maîtrise (%)</Label>
            <Input
              id="level"
              name="level"
              type="number"
              min="0"
              max="100"
              defaultValue={selectedSkill?.level || 50}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="icon">Icône (optionnel)</Label>
            <Input id="icon" name="icon" defaultValue={selectedSkill?.icon} placeholder="react, typescript, etc." />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
              Annuler
            </Button>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? "Enregistrement..." : selectedSkill ? "Mettre à jour" : "Créer"}
            </Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Supprimer la compétence"
        message={`Êtes-vous sûr de vouloir supprimer "${selectedSkill?.name}" ?`}
        confirmText="Supprimer"
        isLoading={isSaving}
      />
    </div>
  )
}
