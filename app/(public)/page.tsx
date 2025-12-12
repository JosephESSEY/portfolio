import { BentoGrid } from "@/components/bento/bento-grid"
import { ProjectCard } from "@/components/bento/project-card"
import { SocialCard } from "@/components/bento/social-card"
import { SkillsCard } from "@/components/bento/skills-card"
import { StatsCard } from "@/components/bento/stats-card"
import { AboutCard } from "@/components/bento/about-card"
import { ContactCard } from "@/components/bento/contact-card"
import { TimelineCard } from "@/components/bento/timeline-card"
import { QuoteCard } from "@/components/bento/quote-card"
import { BlogCard } from "@/components/bento/blog-card"
import {
  getProfile,
  getFeaturedProjects,
  getSocialLinks,
  getSkillsByCategory,
  getCustomBlocks,
  getTimeline,
  getBlogPosts,
} from "@/lib/data-service"

export default async function HomePage() {
  const [profile, projects, socialLinks, skillsByCategory, customBlocks, timeline, blogPosts] = await Promise.all([
    getProfile(),
    getFeaturedProjects(),
    getSocialLinks(),
    getSkillsByCategory(),
    getCustomBlocks(),
    getTimeline(),
    getBlogPosts(),
  ])

  const statsBlock = customBlocks.find((b) => b.type === "stats")
  const quoteBlock = customBlocks.find((b) => b.type === "quote")
  const stats = (statsBlock?.metadata?.stats as { label: string; value: string }[]) || []

  return (
    <div className="w-full">
      <BentoGrid>
        {/* Social Links */}
        {socialLinks.slice(0, 6).map((link) => (
          <SocialCard key={link.id} link={link} />
        ))}

        {/* Featured Projects */}
        {projects.slice(0, 2).map((project, index) => (
          <ProjectCard key={project.id} project={project} size={index === 0 ? "medium" : "medium"} />
        ))}

        {/* About */}
        <AboutCard bio={profile.bio} />

        {/* Stats */}
        {stats.length > 0 && <StatsCard stats={stats} />}

        {/* Skills */}
        {Object.entries(skillsByCategory)
          .slice(0, 2)
          .map(([category, skills]) => (
            <SkillsCard key={category} category={category} skills={skills} />
          ))}

        {/* Timeline */}
        <TimelineCard items={timeline} />

        {/* Quote */}
        {quoteBlock && <QuoteCard quote={quoteBlock.content} />}

        {/* Blog Posts */}
        {blogPosts.slice(0, 2).map((post) => (
          <BlogCard key={post.id} post={post} size="medium" />
        ))}

        {/* Contact CTA */}
        <ContactCard email={profile.email} available={profile.available} />
      </BentoGrid>
    </div>
  )
}
