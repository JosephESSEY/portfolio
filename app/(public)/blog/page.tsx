import { BentoGrid } from "@/components/bento/bento-grid"
import { BlogCard } from "@/components/bento/blog-card"
import { getBlogPosts } from "@/lib/data-service"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Alexandre Dupont",
  description: "Articles sur le développement web, le design et les bonnes pratiques.",
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Réflexions et tutoriels sur le développement web et le design.
        </p>
      </div>

      <BentoGrid>
        {posts.map((post, index) => (
          <BlogCard key={post.id} post={post} size={index === 0 ? "wide" : "medium"} />
        ))}
      </BentoGrid>
    </div>
  )
}
