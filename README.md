# Portfolio Bento - Documentation

Un portfolio personnel moderne inspiré de Bento.me avec un dashboard d'administration complet.

## Structure du projet

\`\`\`
├── app/
│   ├── (public)/           # Pages publiques du portfolio
│   │   ├── page.tsx        # Accueil avec grille Bento
│   │   ├── about/          # Page À propos
│   │   ├── projects/       # Liste des projets
│   │   ├── services/       # Services proposés
│   │   ├── blog/           # Blog avec articles
│   │   └── contact/        # Formulaire de contact
│   │
│   └── admin/              # Dashboard d'administration
│       ├── login/          # Page de connexion
│       └── (dashboard)/    # Pages protégées
│           ├── page.tsx    # Tableau de bord
│           ├── profile/    # Gestion du profil
│           ├── projects/   # CRUD projets
│           ├── skills/     # CRUD compétences
│           ├── services/   # CRUD services
│           ├── social/     # CRUD réseaux sociaux
│           ├── blog/       # CRUD articles
│           ├── timeline/   # CRUD parcours
│           ├── blocks/     # CRUD blocs personnalisés
│           └── messages/   # Gestion des messages
│
├── components/
│   ├── bento/              # Composants de la grille Bento
│   ├── admin/              # Composants du dashboard
│   ├── icons.tsx           # Icônes SVG
│   └── ui/                 # Composants UI réutilisables
│
└── lib/
    ├── types.ts            # Types TypeScript
    ├── mock-data.ts        # Données de démonstration
    ├── data-service.ts     # Service de données (mock)
    └── auth.ts             # Service d'authentification (mock)
\`\`\`

## Démarrage rapide

1. Le projet est prêt à l'emploi avec des données de démonstration.

2. Accédez au dashboard admin à `/admin/login` avec :
   - Email: `admin@alexandre.dev`
   - Mot de passe: `admin123`

## Personnalisation

### Modifier les données

Toutes les données sont dans `lib/mock-data.ts`. Modifiez ce fichier pour personnaliser :
- Profil (nom, bio, avatar, etc.)
- Projets
- Compétences
- Services
- Réseaux sociaux
- Articles de blog
- Parcours professionnel

### Ajouter PostgreSQL

Pour remplacer les mocks par une vraie base de données :

1. Installez les dépendances :
\`\`\`bash
npm install pg @types/pg
\`\`\`

2. Créez les tables avec ce schéma :

\`\`\`sql
-- Profil
CREATE TABLE profile (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255),
  tagline TEXT,
  bio TEXT,
  avatar_url VARCHAR(500),
  email VARCHAR(255),
  location VARCHAR(255),
  available BOOLEAN DEFAULT true
);

-- Projets
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  long_description TEXT,
  technologies TEXT[],
  image_url VARCHAR(500),
  live_url VARCHAR(500),
  github_url VARCHAR(500),
  featured BOOLEAN DEFAULT false,
  "order" INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Compétences
CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  level INTEGER,
  icon VARCHAR(50)
);

-- Services
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  icon VARCHAR(50),
  price VARCHAR(100),
  features TEXT[]
);

-- Réseaux sociaux
CREATE TABLE social_links (
  id SERIAL PRIMARY KEY,
  platform VARCHAR(100) NOT NULL,
  url VARCHAR(500) NOT NULL,
  icon VARCHAR(50),
  username VARCHAR(100)
);

-- Articles de blog
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  cover_image VARCHAR(500),
  published_at DATE,
  tags TEXT[],
  published BOOLEAN DEFAULT false
);

-- Timeline
CREATE TABLE timeline (
  id SERIAL PRIMARY KEY,
  year VARCHAR(10),
  title VARCHAR(255),
  description TEXT,
  type VARCHAR(50)
);

-- Messages
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Blocs personnalisés
CREATE TABLE custom_blocks (
  id SERIAL PRIMARY KEY,
  type VARCHAR(50),
  title VARCHAR(255),
  content TEXT,
  metadata JSONB,
  "order" INTEGER
);

-- Utilisateurs admin
CREATE TABLE admin_users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'admin'
);
\`\`\`

3. Mettez à jour `lib/data-service.ts` pour utiliser les requêtes SQL au lieu des mocks.

### Thème et couleurs

Les couleurs sont définies dans `app/globals.css`. Modifiez les variables CSS :

\`\`\`css
--color-primary: #171717;      /* Couleur principale */
--color-background: #FAFAFA;   /* Fond */
--color-card: #FFFFFF;         /* Cartes */
--color-success: #22C55E;      /* Succès */
--color-warning: #F59E0B;      /* Avertissement */
--color-info: #3B82F6;         /* Information */
\`\`\`

## Technologies utilisées

- **Framework**: Next.js 15 avec App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **TypeScript**: Pour le typage statique
- **Backend prévu**: Node.js + PostgreSQL

## Fonctionnalités

### Site public
- Grille Bento responsive
- Animations fluides
- SEO optimisé
- Mode responsive (mobile-first)
- Formulaire de contact

### Admin
- Authentification sécurisée
- CRUD complet pour toutes les entités
- Interface moderne (inspirée Notion/Linear)
- Tableaux avec recherche et filtres
- Modals pour l'édition
- Confirmation avant suppression
- Messages de succès/erreur

## Déploiement

Le projet est prêt pour déploiement sur Vercel :

1. Connectez votre repository GitHub
2. Déployez sur Vercel
3. Configurez les variables d'environnement pour la base de données

## Support

Pour toute question ou problème, consultez la documentation ou ouvrez une issue sur GitHub.
