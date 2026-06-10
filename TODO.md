# TODO — BÉNIN DEBOUT · Site officiel

> Légende : ✅ Fait · ⚠️ À vérifier/peaufiner · ❌ À faire

---

## PHASE 1 — Mise en place & Configuration ✅

- [x] Projet Next.js 16 + TypeScript + Tailwind 4 initialisé
- [x] Dépendances installées : framer-motion, lucide-react
- [x] Polices Google configurées — Poppins (titres) + Inter (corps) dans `layout.tsx`
- [x] Variables CSS de couleurs définies dans `globals.css`
- [x] `next.config.ts` — domaine Unsplash autorisé pour les images
- [x] Boilerplate Next.js nettoyé
- [x] Architecture de dossiers complète créée (`components/`, `app/`, `lib/`)
- [x] `constants.ts` — toutes les données statiques centralisées
- [x] Logo placé dans `public/images/logo.png`
- [x] Toutes les images via Unsplash (africaines, contextuelles) — aucun fichier local requis

---

## PHASE 2 — Composants de base ✅

- [x] `AnimatedSection.tsx` — animation fadeIn au scroll (haut / gauche / droite)
- [x] `SectionTitle.tsx` — titre + label + sous-titre + ligne décorative or

---

## PHASE 3 — Layout global ✅

### Navbar ✅
- [x] Logo blanc sur hero, couleur au scroll
- [x] Items : Accueil · À propos · Ce qu'on fait ▾ · Événements
- [x] Dropdown "Ce qu'on fait" — 3 sous-pages avec icônes Lucide
- [x] Bouton "Faire un don" — rounded-full, hover or
- [x] Comportement transparent → fond blanc au scroll (transition 300ms)
- [x] Soulignement or animé au hover sur chaque item
- [x] Item actif — soulignement permanent + texte semibold (usePathname)
- [x] Dropdown — animation slideDown Framer Motion, hover fond vert clair
- [x] Fermeture automatique au clic extérieur
- [x] Menu hamburger mobile
- [x] Drawer mobile — slide depuis la droite (Framer Motion)
- [x] Item actif drawer — barre verte à gauche
- [x] Bouton don pleine largeur en bas du drawer

### Footer ✅
- [x] Logo + slogan
- [x] Liens de navigation complets
- [x] Email cliquable + icône Mail (Lucide)
- [x] Lien Instagram avec icône Instagram (Lucide)
- [x] Numéro de téléphone cliquable + icône Phone (Lucide)
- [x] Mention légale France / Bénin
- [x] Copyright avec année dynamique
- [ ] ⚠️ Bouton flottant Instagram à ajouter (voir Phase 6)

---

## PHASE 4 — Page d'accueil (Landing page) ✅

### Disposition des images et sections (ordre de scroll) :

1. **HeroSection** ✅
   - Image plein écran (jeunes africains en groupe)
   - Overlay gradient sombre pour lisibilité
   - Titre animé ligne par ligne (fadeInUp)
   - 2 CTA : "Faire un don" (or, pulsation) + "Découvrir l'association"
   - Indicateur de scroll (chevron animé)

2. **AxesSection** ✅
   - Image de fond + overlay vert (jeunes en formation)
   - 3 cards qui **remontent sur l'image** par le bas (chevauchement -mt-24)
   - Chaque card : icône, titre, description, lien
   - Animation en cascade (stagger 150ms)
   - Hover : élévation shadow + icône devient or

3. **StatsSection** ✅
   - Fond vert foncé plein — aucune image
   - 4 chiffres clés animés (compteur 0 → valeur au scroll)
   - Icônes Lucide + labels

4. **HumanitaireSection** ✅
   - **Image à gauche** (enfants africains, coins arrondis)
   - **Card texte à droite** qui chevauche l'image par la gauche
   - Tag flottant "Axe 1 — Solidarité" sur la photo
   - Liste des actions + carte des villes couvertes
   - CTA vert

5. **ArtisanSection** ✅
   - **Texte à gauche** avec grille des 6 compétences (hover vert → blanc)
   - **Image à droite** (jeunes devant ordinateurs)
   - **Card chevauchante verte** en bas de l'image (zones géographiques)
   - CTA

6. **EvenementsSection** ✅
   - 2 cards côte à côte (pas d'image — typographie forte)
   - Card 1 (Journée 1000 Plats) : fond vert foncé, accent or
   - Card 2 (CIAN) : fond blanc, bordure sobre
   - Dates, lieux, descriptions, CTA

7. **CitationSection** ✅
   - Fond vert clair — aucune image
   - Citation de Roméo Ahossi en grand
   - Icône guillemet or, ligne décorative

8. **DonSection** ✅
   - **Texte gauche** : barre de progression vers 1000 plats
   - **Card Mobile Money droite** : fond vert foncé, code USSD, bouton "Copier"
   - Numéro de téléphone cliquable

9. **JoinSection** ✅
   - Fond vert foncé — aucune image
   - Appel à l'action fort
   - Email + lien Instagram avec icônes Lucide
   - CTA "Faire un don"

---

## PHASE 5 — Pages internes ✅

- [x] `/a-propos` — hero chevauchant · vision/mission avec overlap card · valeurs en grille · équipe
- [x] `/ce-quon-fait/solidarite-humanitaire` — hero · 4 actions · Journée 1000 Plats avec overlap
- [x] `/ce-quon-fait/artisan-numerique` — hero · programme · 6 compétences · zones géo
- [x] `/ce-quon-fait/rayonnement-international` — hero · CIAN 2026 · card chevauchante date/lieu
- [x] `/evenements` — hero · 2 événements format large avec détails
- [x] `/faire-un-don` — hero vert · barre progression · instructions · card Mobile Money sticky

---

## PHASE 6 — Animations & Polish

- [x] Fade-in au scroll sur chaque section (AnimatedSection)
- [x] Stagger sur les 3 cards axes (cascade 150ms)
- [x] Compteurs animés au scroll (StatsSection)
- [x] Hover states sur tous les éléments interactifs
- [x] Pulsation sur le bouton "Faire un don" (hero)
- [x] Chevron scroll indicator animé
- [x] Dropdown navbar — slideDown Framer Motion
- [x] Drawer mobile — slide depuis la droite
- [x] Bouton flottant Instagram — gradient rose/rouge/or, fixe en bas à droite sur toutes les pages, icône seule sur mobile, icône + handle sur desktop
- [ ] ❌ **Boutons partage réseaux sociaux** sur les pages événements (WhatsApp + Facebook + lien copier)- [ ] ⚠️ Transition de page entre routes (fade global à ajouter dans layout)

---

## PHASE 7 — Qualité & Performance

- [x] Build de production propre — 10/10 pages · 0 erreur TypeScript
- [x] SEO de base — metadata title + description sur chaque page
- [x] Images Unsplash via `next/image` avec optimisation automatique
- [ ] ⚠️ Test responsive mobile (375px) — lancer `npm run dev`
- [ ] ⚠️ Test responsive tablette (768px)
- [ ] ❌ Favicon personnalisé — remplacer `src/app/favicon.ico` par le logo BÉNIN DEBOUT
- [ ] ❌ og:image — créer une image de partage 1200×630 (logo + slogan sur fond vert)
- [ ] ⚠️ Vérifier lien Instagram dans footer et JoinSection
- [ ] ⚠️ Vérifier le tel: et mailto: sur mobile

---

## PHASE 8 — Déploiement

- [x] Git initialisé
- [x] Premier commit — 40 fichiers · 9953 lignes
- [x] Branche renommée en `main`
- [x] Remote origin configuré → `https://github.com/Kesjs/debout.git`
- [x] Code poussé sur GitHub (`main`)
- [ ] ❌ Déployer sur Vercel (connexion GitHub → déploiement automatique)
- [ ] ❌ Configurer le domaine personnalisé (si applicable)
- [ ] ❌ Vérifier le site en production

---

## Prochaine action recommandée

```
1. Lancer npm run dev et vérifier le rendu visuel
2. Ajouter le bouton flottant Instagram (Phase 6)
3. Tester le responsive mobile
4. Favicon personnalisé
5. Déploiement Vercel
```

---

_Build validé : 10/10 pages · 0 erreur TypeScript · Juin 2026_
