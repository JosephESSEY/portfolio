import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin | Portfolio",
  description: "Administration du portfolio",
  robots: { index: false, follow: false },
}

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
