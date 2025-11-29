// ============================================================
// DATA SERVICE - Mock implementation (ready for PostgreSQL)
// ============================================================

import {
  mockProfile,
  mockProjects,
  mockSkills,
  mockServices,
  mockSocialLinks,
  mockCustomBlocks,
  mockBlogPosts,
  mockTimeline,
  mockMessages,
} from "./mock-data"

import type {
  Profile,
  Project,
  Skill,
  Service,
  SocialLink,
  CustomBlock,
  BlogPost,
  TimelineItem,
  ContactMessage,
} from "./types"

// Simulate async database calls
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// ============================================================
// PROFILE
// ============================================================
export async function getProfile(): Promise<Profile> {
  await delay(100)
  return mockProfile
}

export async function updateProfile(data: Partial<Profile>): Promise<Profile> {
  await delay(200)
  Object.assign(mockProfile, data)
  return mockProfile
}

// ============================================================
// PROJECTS
// ============================================================
export async function getProjects(): Promise<Project[]> {
  await delay(100)
  return [...mockProjects].sort((a, b) => a.order - b.order)
}

export async function getProject(id: string): Promise<Project | null> {
  await delay(100)
  return mockProjects.find((p) => p.id === id) || null
}

export async function getFeaturedProjects(): Promise<Project[]> {
  await delay(100)
  return mockProjects.filter((p) => p.featured).sort((a, b) => a.order - b.order)
}

export async function createProject(data: Omit<Project, "id" | "createdAt">): Promise<Project> {
  await delay(200)
  const newProject: Project = {
    ...data,
    id: String(mockProjects.length + 1),
    createdAt: new Date().toISOString(),
  }
  mockProjects.push(newProject)
  return newProject
}

export async function updateProject(id: string, data: Partial<Project>): Promise<Project | null> {
  await delay(200)
  const index = mockProjects.findIndex((p) => p.id === id)
  if (index === -1) return null
  mockProjects[index] = { ...mockProjects[index], ...data }
  return mockProjects[index]
}

export async function deleteProject(id: string): Promise<boolean> {
  await delay(200)
  const index = mockProjects.findIndex((p) => p.id === id)
  if (index === -1) return false
  mockProjects.splice(index, 1)
  return true
}

// ============================================================
// SKILLS
// ============================================================
export async function getSkills(): Promise<Skill[]> {
  await delay(100)
  return [...mockSkills]
}

export async function getSkillsByCategory(): Promise<Record<string, Skill[]>> {
  await delay(100)
  return mockSkills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = []
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>,
  )
}

export async function createSkill(data: Omit<Skill, "id">): Promise<Skill> {
  await delay(200)
  const newSkill: Skill = { ...data, id: String(mockSkills.length + 1) }
  mockSkills.push(newSkill)
  return newSkill
}

export async function updateSkill(id: string, data: Partial<Skill>): Promise<Skill | null> {
  await delay(200)
  const index = mockSkills.findIndex((s) => s.id === id)
  if (index === -1) return null
  mockSkills[index] = { ...mockSkills[index], ...data }
  return mockSkills[index]
}

export async function deleteSkill(id: string): Promise<boolean> {
  await delay(200)
  const index = mockSkills.findIndex((s) => s.id === id)
  if (index === -1) return false
  mockSkills.splice(index, 1)
  return true
}

// ============================================================
// SERVICES
// ============================================================
export async function getServices(): Promise<Service[]> {
  await delay(100)
  return [...mockServices]
}

export async function createService(data: Omit<Service, "id">): Promise<Service> {
  await delay(200)
  const newService: Service = { ...data, id: String(mockServices.length + 1) }
  mockServices.push(newService)
  return newService
}

export async function updateService(id: string, data: Partial<Service>): Promise<Service | null> {
  await delay(200)
  const index = mockServices.findIndex((s) => s.id === id)
  if (index === -1) return null
  mockServices[index] = { ...mockServices[index], ...data }
  return mockServices[index]
}

export async function deleteService(id: string): Promise<boolean> {
  await delay(200)
  const index = mockServices.findIndex((s) => s.id === id)
  if (index === -1) return false
  mockServices.splice(index, 1)
  return true
}

// ============================================================
// SOCIAL LINKS
// ============================================================
export async function getSocialLinks(): Promise<SocialLink[]> {
  await delay(100)
  return [...mockSocialLinks]
}

export async function createSocialLink(data: Omit<SocialLink, "id">): Promise<SocialLink> {
  await delay(200)
  const newLink: SocialLink = { ...data, id: String(mockSocialLinks.length + 1) }
  mockSocialLinks.push(newLink)
  return newLink
}

export async function updateSocialLink(id: string, data: Partial<SocialLink>): Promise<SocialLink | null> {
  await delay(200)
  const index = mockSocialLinks.findIndex((l) => l.id === id)
  if (index === -1) return null
  mockSocialLinks[index] = { ...mockSocialLinks[index], ...data }
  return mockSocialLinks[index]
}

export async function deleteSocialLink(id: string): Promise<boolean> {
  await delay(200)
  const index = mockSocialLinks.findIndex((l) => l.id === id)
  if (index === -1) return false
  mockSocialLinks.splice(index, 1)
  return true
}

// ============================================================
// CUSTOM BLOCKS
// ============================================================
export async function getCustomBlocks(): Promise<CustomBlock[]> {
  await delay(100)
  return [...mockCustomBlocks].sort((a, b) => a.order - b.order)
}

export async function createCustomBlock(data: Omit<CustomBlock, "id">): Promise<CustomBlock> {
  await delay(200)
  const newBlock: CustomBlock = { ...data, id: String(mockCustomBlocks.length + 1) }
  mockCustomBlocks.push(newBlock)
  return newBlock
}

export async function updateCustomBlock(id: string, data: Partial<CustomBlock>): Promise<CustomBlock | null> {
  await delay(200)
  const index = mockCustomBlocks.findIndex((b) => b.id === id)
  if (index === -1) return null
  mockCustomBlocks[index] = { ...mockCustomBlocks[index], ...data }
  return mockCustomBlocks[index]
}

export async function deleteCustomBlock(id: string): Promise<boolean> {
  await delay(200)
  const index = mockCustomBlocks.findIndex((b) => b.id === id)
  if (index === -1) return false
  mockCustomBlocks.splice(index, 1)
  return true
}

// ============================================================
// BLOG POSTS
// ============================================================
export async function getBlogPosts(publishedOnly = true): Promise<BlogPost[]> {
  await delay(100)
  const posts = publishedOnly ? mockBlogPosts.filter((p) => p.published) : mockBlogPosts
  return [...posts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  await delay(100)
  return mockBlogPosts.find((p) => p.slug === slug) || null
}

export async function createBlogPost(data: Omit<BlogPost, "id">): Promise<BlogPost> {
  await delay(200)
  const newPost: BlogPost = { ...data, id: String(mockBlogPosts.length + 1) }
  mockBlogPosts.push(newPost)
  return newPost
}

export async function updateBlogPost(id: string, data: Partial<BlogPost>): Promise<BlogPost | null> {
  await delay(200)
  const index = mockBlogPosts.findIndex((p) => p.id === id)
  if (index === -1) return null
  mockBlogPosts[index] = { ...mockBlogPosts[index], ...data }
  return mockBlogPosts[index]
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  await delay(200)
  const index = mockBlogPosts.findIndex((p) => p.id === id)
  if (index === -1) return false
  mockBlogPosts.splice(index, 1)
  return true
}

// ============================================================
// TIMELINE
// ============================================================
export async function getTimeline(): Promise<TimelineItem[]> {
  await delay(100)
  return [...mockTimeline]
}

export async function createTimelineItem(data: Omit<TimelineItem, "id">): Promise<TimelineItem> {
  await delay(200)
  const newItem: TimelineItem = { ...data, id: String(mockTimeline.length + 1) }
  mockTimeline.push(newItem)
  return newItem
}

export async function updateTimelineItem(id: string, data: Partial<TimelineItem>): Promise<TimelineItem | null> {
  await delay(200)
  const index = mockTimeline.findIndex((t) => t.id === id)
  if (index === -1) return null
  mockTimeline[index] = { ...mockTimeline[index], ...data }
  return mockTimeline[index]
}

export async function deleteTimelineItem(id: string): Promise<boolean> {
  await delay(200)
  const index = mockTimeline.findIndex((t) => t.id === id)
  if (index === -1) return false
  mockTimeline.splice(index, 1)
  return true
}

// ============================================================
// CONTACT MESSAGES
// ============================================================
export async function getMessages(): Promise<ContactMessage[]> {
  await delay(100)
  return [...mockMessages].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export async function createMessage(data: Omit<ContactMessage, "id" | "read" | "createdAt">): Promise<ContactMessage> {
  await delay(200)
  const newMessage: ContactMessage = {
    ...data,
    id: String(mockMessages.length + 1),
    read: false,
    createdAt: new Date().toISOString(),
  }
  mockMessages.push(newMessage)
  return newMessage
}

export async function markMessageAsRead(id: string): Promise<boolean> {
  await delay(200)
  const message = mockMessages.find((m) => m.id === id)
  if (!message) return false
  message.read = true
  return true
}

export async function deleteMessage(id: string): Promise<boolean> {
  await delay(200)
  const index = mockMessages.findIndex((m) => m.id === id)
  if (index === -1) return false
  mockMessages.splice(index, 1)
  return true
}

export async function getUnreadMessagesCount(): Promise<number> {
  await delay(50)
  return mockMessages.filter((m) => !m.read).length
}
