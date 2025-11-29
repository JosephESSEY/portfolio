// ============================================================
// DATA TYPES & SCHEMAS
// ============================================================

export interface Profile {
  id: string
  name: string
  role: string
  tagline: string
  bio: string
  avatarUrl: string
  email: string
  location: string
  available: boolean
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  order: number
  createdAt: string
}

export interface Skill {
  id: string
  name: string
  category: string
  level: number // 1-100
  icon?: string
}

export interface Service {
  id: string
  name: string
  description: string
  icon: string
  price?: string
  features: string[]
}

export interface SocialLink {
  id: string
  platform: string
  url: string
  icon: string
  username: string
}

export interface CustomBlock {
  id: string
  type: "text" | "image" | "stats" | "quote" | "timeline" | "achievement"
  title: string
  content: string
  metadata?: Record<string, unknown>
  order: number
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  publishedAt: string
  tags: string[]
  published: boolean
}

export interface TimelineItem {
  id: string
  year: string
  title: string
  description: string
  type: "work" | "education" | "achievement"
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  read: boolean
  createdAt: string
}



// Admin User
export interface AdminUser {
  id: string
  email: string
  name: string
  role: "admin" | "editor"
}
