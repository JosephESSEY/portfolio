import { getBlogPost } from "@/lib/data-service"
import { ArrowRightIcon, CalendarIcon } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) return { title: "Article non trouvé" }

  return {
    title: `${post.title} | Alexandre Dupont`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-3xl px-4 md:px-6">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowRightIcon className="h-4 w-4 rotate-180" />
        Retour au blog
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <CalendarIcon className="h-4 w-4" />
          <time>
            {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{post.title}</h1>
        <p className="text-lg text-muted-foreground">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-sm bg-secondary text-muted-foreground rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
        <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
      </div>

      <div className="prose prose-neutral max-w-none">
        <p className="text-muted-foreground leading-relaxed">{post.content}</p>
      </div>
    </article>
  )
}
