import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/components/icons"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center">
        <p className="text-8xl font-bold text-foreground mb-4">404</p>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Page non trouvée</h1>
        <p className="text-muted-foreground mb-8">La page que vous recherchez n'existe pas ou a été déplacée.</p>
        <Button asChild>
          <Link href="/" className="gap-2">
            Retour à l'accueil
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
