"use client"

import { useState, useEffect } from "react"
import { DataTable } from "@/components/admin/data-table"
import { Modal } from "@/components/admin/modal"
import { ConfirmDialog } from "@/components/admin/confirm-dialog"
import { Button } from "@/components/ui/button"
import { getMessages, markMessageAsRead, deleteMessage } from "@/lib/data-service"
import type { ContactMessage } from "@/lib/types"
import { MailIcon, CalendarIcon, UserIcon } from "@/components/icons"

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    loadMessages()
  }, [])

  async function loadMessages() {
    const data = await getMessages()
    setMessages(data)
    setIsLoading(false)
  }

  const handleView = async (message: ContactMessage) => {
    setSelectedMessage(message)
    setIsViewModalOpen(true)

    if (!message.read) {
      await markMessageAsRead(message.id)
      await loadMessages()
    }
  }

  const handleDelete = (message: ContactMessage) => {
    setSelectedMessage(message)
    setIsDeleteDialogOpen(true)
  }

  const confirmDelete = async () => {
    if (!selectedMessage) return
    setIsSaving(true)
    await deleteMessage(selectedMessage.id)
    await loadMessages()
    setIsDeleteDialogOpen(false)
    setIsSaving(false)
  }

  const unreadCount = messages.filter((m) => !m.read).length

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Messages</h1>
        <p className="text-muted-foreground mt-1">
          {unreadCount > 0
            ? `${unreadCount} message${unreadCount > 1 ? "s" : ""} non lu${unreadCount > 1 ? "s" : ""}`
            : "Tous les messages ont été lus"}
        </p>
      </div>

      <DataTable
        title="Tous les messages"
        description={`${messages.length} message${messages.length > 1 ? "s" : ""}`}
        data={messages}
        isLoading={isLoading}
        onView={handleView}
        onDelete={handleDelete}
        columns={[
          {
            key: "read",
            header: "",
            render: (message) => (
              <div className={`w-2 h-2 rounded-full ${message.read ? "bg-transparent" : "bg-info"}`} />
            ),
            className: "w-4",
          },
          { key: "name", header: "De" },
          { key: "email", header: "Email" },
          { key: "subject", header: "Sujet" },
          {
            key: "createdAt",
            header: "Date",
            render: (message) => (
              <span className="text-sm text-muted-foreground">
                {new Date(message.createdAt).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            ),
          },
        ]}
        emptyMessage="Aucun message reçu"
      />

      {/* View Message Modal */}
      <Modal isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)} title="Message" size="lg">
        {selectedMessage && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                <UserIcon className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">De</p>
                  <p className="font-medium text-foreground">{selectedMessage.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                <MailIcon className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a href={`mailto:${selectedMessage.email}`} className="font-medium text-foreground hover:underline">
                    {selectedMessage.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <CalendarIcon className="h-4 w-4" />
              <time>
                {new Date(selectedMessage.createdAt).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </time>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">{selectedMessage.subject}</h3>
              <p className="text-muted-foreground whitespace-pre-line">{selectedMessage.message}</p>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-border/50">
              <Button variant="outline" onClick={() => setIsViewModalOpen(false)}>
                Fermer
              </Button>
              <Button asChild>
                <a href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}>Répondre</a>
              </Button>
            </div>
          </div>
        )}
      </Modal>

      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Supprimer le message"
        message="Êtes-vous sûr de vouloir supprimer ce message ? Cette action est irréversible."
        confirmText="Supprimer"
        isLoading={isSaving}
      />
    </div>
  )
}
