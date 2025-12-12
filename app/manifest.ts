export default function manifest() {
  return {
    name: 'Joseph ESSEY - Backend Developer & Tech Event Planner',
    short_name: 'Joseph ESSEY',
    description: 'Backend Developer spécialisé en Node.js, Python, PostgreSQL. Organisateur d\'événements tech et formateur expert.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a1a1f',
    theme_color: '#6366f1',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/joseph.jpg',
        sizes: 'any',
        type: 'image/jpeg',
        purpose: 'any maskable',
      },
    ],
    categories: ['technology', 'business', 'education'],
    lang: 'fr-FR',
  }
}
