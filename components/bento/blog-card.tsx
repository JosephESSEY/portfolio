"use client"

import { BentoCard } from "./bento-card"
import { CalendarIcon, ArrowRightIcon } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "@/lib/types"

interface BlogCardProps {
  post: BlogPost
  size?: "small" | "medium" | "wide"
}

export function BlogCard({ post, size = "medium" }: BlogCardProps) {
  return (
    <BentoCard size={size} className="p-0 overflow-hidden group">
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        <div className="relative h-32 md:h-40 overflow-hidden">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <CalendarIcon className="h-3.5 w-3.5" />
            <time>
              {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{post.excerpt}</p>
          <div className="flex items-center gap-1 text-sm font-medium text-foreground mt-3 group-hover:gap-2 transition-all">
            Lire l'article
            <ArrowRightIcon className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </BentoCard>
  )
}
