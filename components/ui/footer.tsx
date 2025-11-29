import Link from "next/link"
import { getSocialIcon } from "@/components/icons"

const socialLinks = [
  { platform: "GitHub", url: "https://github.com/alexandre", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/alexandre", icon: "linkedin" },
  { platform: "Twitter", url: "https://twitter.com/alexandre", icon: "twitter" },
]

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

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                aria-label={link.platform}
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
