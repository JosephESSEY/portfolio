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
import { getBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost } from "@/lib/data-service"
import type { BlogPost } from "@/lib/types"
import Image from "next/image"

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    loadPosts()
  }, [])

  async function loadPosts() {
    const data = await getBlogPosts(false)
    setPosts(data)
    setIsLoading(false)
  }

  const handleAdd = () => {
    setSelectedPost(null)
    setIsModalOpen(true)
  }

  const handleEdit = (post: BlogPost) => {
    setSelectedPost(post)
    setIsModalOpen(true)
  }

  const handleDelete = (post: BlogPost) => {
    setSelectedPost(post)
    setIsDeleteDialogOpen(true)
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSaving(true)
    const formData = new FormData(e.currentTarget)

    const title = formData.get("title") as string

    const postData = {
      title,
      slug: (formData.get("slug") as string) || generateSlug(title),
      excerpt: formData.get("excerpt") as string,
      content: formData.get("content") as string,
      coverImage: formData.get("coverImage") as string,
      publishedAt: (formData.get("publishedAt") as string) || new Date().toISOString().split("T")[0],
      tags: (formData.get("tags") as string).split(",").map((t) => t.trim()),
      published: formData.get("published") === "on",
    }

    if (selectedPost) {
      await updateBlogPost(selectedPost.id, postData)
    } else {
      await createBlogPost(postData)
    }

    await loadPosts()
    setIsModalOpen(false)
    setIsSaving(false)
  }

  const confirmDelete = async () => {
    if (!selectedPost) return
    setIsSaving(true)
    await deleteBlogPost(selectedPost.id)
    await loadPosts()
    setIsDeleteDialogOpen(false)
    setIsSaving(false)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Blog</h1>
        <p className="text-muted-foreground mt-1">Gérez vos articles de blog</p>
      </div>

      <DataTable
        title="Tous les articles"
        description={`${posts.length} article${posts.length > 1 ? "s" : ""}`}
        data={posts}
        isLoading={isLoading}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        columns={[
          {
            key: "coverImage",
            header: "Image",
            render: (post) => (
              <div className="w-16 h-10 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  width={64}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            ),
          },
          { key: "title", header: "Titre" },
          {
            key: "publishedAt",
            header: "Date",
            render: (post) => (
              <span className="text-sm text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString("fr-FR")}
              </span>
            ),
          },
          {
            key: "tags",
            header: "Tags",
            render: (post) => (
              <div className="flex flex-wrap gap-1">
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs bg-muted rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            ),
          },
          {
            key: "published",
            header: "Statut",
            render: (post) => (
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  post.published ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                }`}
              >
                {post.published ? "Publié" : "Brouillon"}
              </span>
            ),
          },
        ]}
        emptyMessage="Aucun article pour le moment"
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedPost ? "Modifier l'article" : "Nouvel article"}
        size="xl"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Titre</Label>
              <Input id="title" name="title" defaultValue={selectedPost?.title} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug (URL)</Label>
              <Input id="slug" name="slug" defaultValue={selectedPost?.slug} placeholder="auto-généré si vide" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Extrait</Label>
            <Textarea id="excerpt" name="excerpt" rows={2} defaultValue={selectedPost?.excerpt} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Contenu</Label>
            <Textarea id="content" name="content" rows={10} defaultValue={selectedPost?.content} required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="coverImage">URL de l'image de couverture</Label>
              <Input id="coverImage" name="coverImage" defaultValue={selectedPost?.coverImage} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="publishedAt">Date de publication</Label>
              <Input
                id="publishedAt"
                name="publishedAt"
                type="date"
                defaultValue={selectedPost?.publishedAt?.split("T")[0]}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (séparés par des virgules)</Label>
            <Input
              id="tags"
              name="tags"
              defaultValue={selectedPost?.tags.join(", ")}
              placeholder="React, JavaScript, Tutorial"
              required
            />
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
            <Switch id="published" name="published" defaultChecked={selectedPost?.published ?? true} />
            <Label htmlFor="published" className="cursor-pointer">
              Publier l'article
            </Label>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
              Annuler
            </Button>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? "Enregistrement..." : selectedPost ? "Mettre à jour" : "Créer"}
            </Button>
          </div>
        </form>
      </Modal>

      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Supprimer l'article"
        message={`Êtes-vous sûr de vouloir supprimer "${selectedPost?.title}" ?`}
        confirmText="Supprimer"
        isLoading={isSaving}
      />
    </div>
  )
}
