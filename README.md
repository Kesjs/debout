# BÉNIN DEBOUT — Site Officiel

> **"L'excellence chez les jeunes"**  
> Site vitrine de l'association BÉNIN DEBOUT, fondée par Jean de Dieu Roméo AHOSSI.

---

## À propos du projet

BÉNIN DEBOUT est une association loi 1901 (France) opérant au Bénin depuis 2025. Ce site a pour objectif de :

- Présenter l'association, sa vision et ses 3 axes d'action
- Mobiliser des dons via Mobile Money
- Promouvoir les événements (Journée 1000 Plats, CIAN 2026)
- Recruter des partenaires institutionnels et privés

---

## Stack technique

| Technologie | Usage |
|---|---|
| [Next.js 16](https://nextjs.org/) | Framework React (App Router) |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styles utilitaires |
| [Framer Motion 11](https://www.framer.com/motion/) | Animations et transitions |
| [Lucide React](https://lucide.dev/) | Icônes |
| [TypeScript](https://www.typescriptlang.org/) | Typage statique |

---

## Structure du projet

```
benin-debout/
├── public/
│   ├── images/              # Photos terrain et assets
│   │   ├── logo.png         # Logo BÉNIN DEBOUT
│   │   ├── hero-children.jpg
│   │   └── ...
│   └── fonts/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Layout global (navbar + footer)
│   │   ├── page.tsx                 # Landing page (home)
│   │   ├── a-propos/
│   │   │   └── page.tsx
│   │   ├── ce-quon-fait/
│   │   │   ├── solidarite-humanitaire/
│   │   │   │   └── page.tsx
│   │   │   ├── artisan-numerique/
│   │   │   │   └── page.tsx
│   │   │   └── rayonnement-international/
│   │   │       └── page.tsx
│   │   ├── evenements/
│   │   │   └── page.tsx
│   │   └── faire-un-don/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Navigation principale
│   │   │   └── Footer.tsx           # Pied de page
│   │   │
│   │   ├── home/                    # Sections de la landing page
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── AxesSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── HumanitaireSection.tsx
│   │   │   ├── ArtisanSection.tsx
│   │   │   ├── EvenementsSection.tsx
│   │   │   ├── CitationSection.tsx
│   │   │   ├── DonSection.tsx
│   │   │   └── JoinSection.tsx
│   │   │
│   │   └── ui/                      # Composants réutilisables
│   │       ├── AnimatedSection.tsx  # Wrapper d'animation au scroll
│   │       ├── SectionTitle.tsx     # Titre de section standardisé
│   │       └── OverlapCard.tsx      # Card qui chevauche une image
│   │
│   ├── lib/
│   │   └── constants.ts             # Données statiques (textes, liens)
│   │
│   └── styles/
│       └── globals.css
```

---

## Palette de couleurs

| Nom | Hex | Usage |
|---|---|---|
| Vert foncé | `#1a5c2a` | Couleur principale, navbar, boutons |
| Or | `#f5a623` | Accents, hover, underline actif |
| Blanc cassé | `#fafafa` | Fonds de sections |
| Noir doux | `#1c1c1c` | Textes corps |
| Vert clair | `#f0f7f0` | Hover dropdown, fonds alternatifs |

---

## Typographie

- **Titres** : Poppins (Bold / SemiBold)
- **Corps** : Inter (Regular / Medium)

---

## Lancer le projet en local

```bash
npm install
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

---

## Déploiement

Le projet est prêt pour un déploiement sur [Vercel](https://vercel.com) :

```bash
# Connecter le repo à Vercel
vercel deploy
```

---

## Contact

- Email : benindebout.citoyen@gmail.com
- Instagram : [@benin_debout.bj](https://www.instagram.com/benin_debout.bj)
- Fondateur : Jean de Dieu Roméo AHOSSI
