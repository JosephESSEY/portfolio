import Link from "next/link"
import { getSocialIcon } from "@/components/icons"

const socialLinks = [
  { platform: "GitHub", url: "https://github.com/alexandre", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/alexandre", icon: "linkedin" },
  { platform: "Twitter", url: "https://twitter.com/alexandre", icon: "twitter" },
]

const socialColors: Record<string, string> = {
  github: "hover:bg-gray-900/20 dark:hover:bg-gray-700/30 text-gray-700 dark:text-gray-300",
  linkedin: "hover:bg-blue-600/20 dark:hover:bg-blue-700/30 text-blue-700 dark:text-blue-300",
  twitter: "hover:bg-sky-500/20 dark:hover:bg-sky-600/30 text-sky-700 dark:text-sky-300",
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-card/50 mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold text-foreground">
              AD.
            </Link>
            <p className="text-sm text-muted-foreground mt-2">Full-Stack Developer & Designer</p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg border border-border/50 
                  transition-all duration-300 transform hover:scale-110
                  ${socialColors[link.icon.toLowerCase()] || "hover:bg-secondary/80"}`}
                aria-label={link.platform}
                title={link.platform}
              >
                {getSocialIcon(link.icon, "h-5 w-5")}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Alexandre Dupont. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-foreground transition-colors">
              Mentions légales
            </Link>
            <Link href="/admin" className="hover:text-foreground transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
