"use client"

import { useTranslation } from "@/hooks/use-translation"
import { CalendarIcon, ClockIcon, ArrowRightIcon, MailIcon } from "@/components/icons"
import { mockBlogPosts } from "@/lib/mock-data"
import Image from "next/image"
import { useState } from "react"

export default function BlogPage() {
  const { locale } = useTranslation()
  const [selectedTag, setSelectedTag] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Enrichir les données du blog avec des informations supplémentaires
  const posts = mockBlogPosts.map(post => ({
    ...post,
    author: "Joseph ESSEY",
    readTime: locale === "fr" ? "5 min de lecture" : "5 min read",
    category: post.tags[0],
    views: Math.floor(Math.random() * 1000) + 100
  }))

  // Extraire tous les tags uniques
  const allTags = ["all", ...Array.from(new Set(posts.flatMap(p => p.tags)))]

  // Filtrer les posts
  const filteredPosts = posts.filter(post => {
    const matchesTag = selectedTag === "all" || post.tags.includes(selectedTag)
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTag && matchesSearch
  })

  const categories = [
    { id: "dev", label: locale === "fr" ? "Développement" : "Development", count: 8 },
    { id: "design", label: "Design", count: 5 },
    { id: "events", label: locale === "fr" ? "Événements" : "Events", count: 4 },
    { id: "tutorials", label: "Tutorials", count: 6 }
  ]

  
  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold bg-linear-to-r from-foreground via-primary to-purple-500 bg-clip-text text-transparent">
          {locale === "fr" ? "Blog & Ressources" : "Blog & Resources"}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {locale === "fr" 
            ? "Articles, tutoriels et réflexions sur le développement web, l'organisation d'événements et les technologies modernes. Partagez mes expériences et apprentissages."
            : "Articles, tutorials and thoughts on web development, event planning and modern technologies. Share my experiences and learnings."
          }
        </p>
      </div>      

      {/* Search & Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder={locale === "fr" ? "Rechercher un article..." : "Search articles..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-card/80 border-2 border-border rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Tags Filter */}
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedTag === tag
                  ? "bg-purple-500 text-white shadow-lg shadow-purple-500/20"
                  : "bg-card/80 text-muted-foreground border-2 border-border hover:border-purple-500"
              }`}
            >
              {tag === "all" ? (locale === "fr" ? "Tous" : "All") : tag}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post (First Post) */}
      {filteredPosts.length > 0 && (
        <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl overflow-hidden hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all group">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-64 lg:h-full w-full overflow-hidden">
              <Image
                src={filteredPosts[0].coverImage || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"}
                alt={filteredPosts[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-medium bg-purple-500/90 text-white rounded-full backdrop-blur-sm border border-purple-400/50">
                  {locale === "fr" ? "★ À la une" : "★ Featured"}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{new Date(filteredPosts[0].publishedAt).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  <span>{filteredPosts[0].readTime}</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground group-hover:text-purple-500 transition-colors">
                {filteredPosts[0].title}
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                {filteredPosts[0].excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {filteredPosts[0].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={`/blog/${filteredPosts[0].slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors"
              >
                {locale === "fr" ? "Lire l'article" : "Read article"}
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.slice(1).map((post) => (
          <article
            key={post.id}
            className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-xl overflow-hidden hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all group"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={post.coverImage || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CalendarIcon className="w-3 h-3" />
                <span>{new Date(post.publishedAt).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                <span>•</span>
                <ClockIcon className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-foreground group-hover:text-purple-500 transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-sm text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {post.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-purple-500 hover:text-purple-600 transition-colors"
              >
                {locale === "fr" ? "Lire plus" : "Read more"}
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12 space-y-3">
          <svg className="w-16 h-16 text-muted-foreground mx-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <p className="text-lg text-muted-foreground">
            {locale === "fr" ? "Aucun article trouvé" : "No articles found"}
          </p>
          <button
            onClick={() => {
              setSelectedTag("all")
              setSearchQuery("")
            }}
            className="text-purple-500 hover:text-purple-600 font-medium"
          >
            {locale === "fr" ? "Réinitialiser les filtres" : "Reset filters"}
          </button>
        </div>
      )}

      {/* Newsletter CTA */}
      <div className="bg-card/80 backdrop-blur-sm border-2 border-purple-500/20 rounded-xl p-8 text-center space-y-4">
        <MailIcon className="w-12 h-12 text-purple-500 mx-auto" />
        <h2 className="text-2xl font-bold text-foreground">
          {locale === "fr" 
            ? "Restez informé des nouveaux articles" 
            : "Stay informed of new articles"}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {locale === "fr"
            ? "Recevez les derniers articles, tutoriels et conseils directement dans votre boîte mail. Pas de spam, que du contenu de qualité."
            : "Receive the latest articles, tutorials and tips directly in your inbox. No spam, only quality content."}
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors"
        >
          {locale === "fr" ? "S'abonner à la newsletter" : "Subscribe to newsletter"}
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
