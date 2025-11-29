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
import { getServices, createService, updateService, deleteService } from "@/lib/data-service"
import { getServiceIcon } from "@/components/icons"
import type { Service } from "@/lib/types"

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    loadServices()
  }, [])

  async function loadServices() {
    const data = await getServices()
    setServices(data)
    setIsLoading(false)
  }

  const handleAdd = () => {
    setSelectedService(null)
    setIsModalOpen(true)
  }

  const handleEdit = (service: Service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const handleDelete = (service: Service) => {
    setSelectedService(service)
    setIsDeleteDialogOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSaving(true)
    const formData = new FormData(e.currentTarget)

    const serviceData = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      icon: formData.get("icon") as string,
      price: (formData.get("price") as string) || undefined,
      features: (formData.get("features") as string).split("\n").filter((f) => f.trim()),
    }

    if (selectedService) {
      await updateService(selectedService.id, serviceData)
    } else {
      await createService(serviceData)
    }

    await loadServices()
    setIsModalOpen(false)
    setIsSaving(false)
  }

  const confirmDelete = async () => {
    if (!selectedService) return
    setIsSaving(true)
    await deleteService(selectedService.id)
    await loadServices()
    setIsDeleteDialogOpen(false)
    setIsSaving(false)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Services</h1>
        <p className="text-muted-foreground mt-1">Gérez les services que vous proposez</p>
      </div>

      <DataTable
        title="Tous les services"
        description={`${services.length} service${services.length > 1 ? "s" : ""}`}
        data={services}
        isLoading={isLoading}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        columns={[
          {
            key: "icon",
            header: "Icône",
            render: (service) => (
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                {getServiceIcon(service.icon, "h-5 w-5")}
              </div>
            ),
          },
          { key: "name", header: "Nom" },
          {
            key: "description",
            header: "Description",
            render: (service) => (
              <span className="text-sm text-muted-foreground line-clamp-1 max-w-xs">{service.description}</span>
            ),
          },
          { key: "price", header: "Prix" },
          {
            key: "features",
            header: "Points clés",
            render: (service) => (
              <span className="text-sm text-muted-foreground">
                {service.features.length} élément{service.features.length > 1 ? "s" : ""}
              </span>
            ),
          },
        ]}
        emptyMessage="Aucun service pour le moment"
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedService ? "Modifier le service" : "Nouveau service"}
        size="md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom du service</Label>
            <Input id="name" name="name" defaultValue={selectedService?.name} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              rows={3}
              defaultValue={selectedService?.description}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="icon">Icône</Label>
              <Input
                id="icon"
                name="icon"
                defaultValue={selectedService?.icon || "code"}
                placeholder="code, palette, lightbulb, rocket"
                required
              />
              <p className="text-xs text-muted-foreground">Options: code, palette, lightbulb, rocket</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Prix</Label>
              <Input id="price" name="price" defaultValue={selectedService?.price} placeholder="À partir de 1000€" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="features">Points clés (un par ligne)</Label>
            <Textarea
              id="features"
              name="features"
              rows={4}
              defaultValue={selectedService?.features.join("\n")}
              placeholder="Architecture moderne&#10;Performance optimisée&#10;SEO-ready"
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
              Annuler
            </Button>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? "Enregistrement..." : selectedService ? "Mettre à jour" : "Créer"}
            </Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Supprimer le service"
        message={`Êtes-vous sûr de vouloir supprimer "${selectedService?.name}" ?`}
        confirmText="Supprimer"
        isLoading={isSaving}
      />
    </div>
  )
}
