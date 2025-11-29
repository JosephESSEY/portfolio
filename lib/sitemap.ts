// ============================================================
// SITEMAP - Liste de toutes les pages
// ============================================================

export const sitemap = {
  public: [
    { path: "/", name: "Accueil", description: "Page d'accueil avec grille Bento" },
    { path: "/projects", name: "Projets", description: "Liste de tous les projets" },
    { path: "/about", name: "À propos", description: "Informations personnelles et parcours" },
    { path: "/services", name: "Services", description: "Services proposés" },
    { path: "/blog", name: "Blog", description: "Articles et tutoriels" },
    { path: "/blog/[slug]", name: "Article", description: "Page d'un article de blog" },
    { path: "/contact", name: "Contact", description: "Formulaire de contact" },
  ],
  admin: [
    { path: "/admin/login", name: "Connexion", description: "Page de connexion admin" },
    { path: "/admin", name: "Dashboard", description: "Tableau de bord" },
    { path: "/admin/profile", name: "Profil", description: "Gestion du profil" },
    { path: "/admin/projects", name: "Projets", description: "CRUD des projets" },
    { path: "/admin/skills", name: "Compétences", description: "CRUD des compétences" },
    { path: "/admin/services", name: "Services", description: "CRUD des services" },
    { path: "/admin/social", name: "Réseaux sociaux", description: "CRUD des liens sociaux" },
    { path: "/admin/blog", name: "Blog", description: "CRUD des articles" },
    { path: "/admin/timeline", name: "Parcours", description: "CRUD du parcours" },
    { path: "/admin/blocks", name: "Blocs", description: "CRUD des blocs personnalisés" },
    { path: "/admin/messages", name: "Messages", description: "Gestion des messages" },
  ],
}
