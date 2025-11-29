"use client"

import { useState, useEffect } from "react"
import { AdminStatsCard } from "@/components/admin/stats-card"
import { DataTable } from "@/components/admin/data-table"
import { FolderIcon, SparklesIcon, InboxIcon, DocumentIcon } from "@/components/icons"
import { getProjects, getSkills, getMessages, getBlogPosts, getUnreadMessagesCount } from "@/lib/data-service"
import type { Project, ContactMessage } from "@/lib/types"

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    projects: 0,
    skills: 0,
    messages: 0,
    unreadMessages: 0,
    blogPosts: 0,
  })
  const [recentProjects, setRecentProjects] = useState<Project[]>([])
  const [recentMessages, setRecentMessages] = useState<ContactMessage[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      const [projects, skills, messages, blogPosts, unreadCount] = await Promise.all([
        getProjects(),
        getSkills(),
        getMessages(),
        getBlogPosts(false),
        getUnreadMessagesCount(),
      ])

      setStats({
        projects: projects.length,
        skills: skills.length,
        messages: messages.length,
        unreadMessages: unreadCount,
        blogPosts: blogPosts.length,
      })

      setRecentProjects(projects.slice(0, 5))
      setRecentMessages(messages.slice(0, 5))
      setIsLoading(false)
    }
    loadData()
  }, [])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Vue d'ensemble de votre portfolio</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AdminStatsCard title="Projets" value={stats.projects} icon={<FolderIcon className="h-6 w-6" />} />
        <AdminStatsCard title="Compétences" value={stats.skills} icon={<SparklesIcon className="h-6 w-6" />} />
        <AdminStatsCard title="Articles" value={stats.blogPosts} icon={<DocumentIcon className="h-6 w-6" />} />
        <AdminStatsCard
          title="Messages"
          value={stats.messages}
          description={`${stats.unreadMessages} non lu${stats.unreadMessages > 1 ? "s" : ""}`}
          icon={<InboxIcon className="h-6 w-6" />}
        />
      </div>

      {/* Recent Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DataTable
          title="Projets récents"
          data={recentProjects}
          isLoading={isLoading}
          columns={[
            { key: "title", header: "Titre" },
            {
              key: "featured",
              header: "Statut",
              render: (project) => (
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    project.featured ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {project.featured ? "Mis en avant" : "Normal"}
                </span>
              ),
            },
          ]}
          emptyMessage="Aucun projet"
        />

        <DataTable
          title="Messages récents"
          data={recentMessages}
          isLoading={isLoading}
          columns={[
            { key: "name", header: "De" },
            { key: "subject", header: "Sujet" },
            {
              key: "read",
              header: "Statut",
              render: (message) => (
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    message.read ? "bg-muted text-muted-foreground" : "bg-info/10 text-info"
                  }`}
                >
                  {message.read ? "Lu" : "Non lu"}
                </span>
              ),
            },
          ]}
          emptyMessage="Aucun message"
        />
      </div>
    </div>
  )
}
