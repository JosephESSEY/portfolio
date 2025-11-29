// ============================================================
// AUTH SERVICE - Mock implementation (ready for real auth)
// ============================================================

import type { AdminUser } from "./types"

// Mock admin user for development
const mockAdminUser: AdminUser = {
  id: "1",
  email: "admin@alexandre.dev",
  name: "Alexandre Dupont",
  role: "admin",
}

// Simulated session storage (in real app, use cookies/JWT)
let currentSession: { user: AdminUser; token: string } | null = null

export async function signIn(email: string, password: string): Promise<{ success: boolean; error?: string }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Mock authentication - in production, validate against database
  if (email === "admin@alexandre.dev" && password === "admin123") {
    currentSession = {
      user: mockAdminUser,
      token: "mock-jwt-token-" + Date.now(),
    }
    return { success: true }
  }

  return { success: false, error: "Email ou mot de passe incorrect" }
}

export async function signOut(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  currentSession = null
}

export async function getSession(): Promise<{ user: AdminUser } | null> {
  await new Promise((resolve) => setTimeout(resolve, 100))

  if (currentSession) {
    return { user: currentSession.user }
  }

  return null
}

export async function requireAuth(): Promise<AdminUser> {
  const session = await getSession()

  if (!session) {
    throw new Error("Unauthorized")
  }

  return session.user
}
