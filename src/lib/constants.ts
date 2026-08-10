// ============================================================
// BÉNIN DEBOUT — Données statiques du site
// ============================================================

export const SITE_CONFIG = {
  name: "BÉNIN DEBOUT",
  tagline: "L'excellence chez les jeunes",
  email: "contactecitoyen@benindeboutbj.com",
  phone: "+229 01 51 22 57 03",
  mobileMoney: "*880*46*0151225703*MONTANT#",
  instagram: "https://www.instagram.com/benin_debout.bj",
  instagramHandle: "@benin_debout.bj",
  fondateur: "Jean de Dieu Roméo AHOSSI",
  secretaire: "Glodi MAKAVALA",
  statut: "Association loi 1901 — France · Opérations au Bénin depuis 2025",
};

export const NAV_ITEMS = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  {
    label: "Ce qu'on fait",
    href: "#",
    dropdown: [
      {
        label: "Solidarité Humanitaire",
        href: "/ce-quon-fait/solidarite-humanitaire",
        icon: "Heart",
        description: "Repas, kits scolaires, aide médicale",
      },
      {
        label: "Artisan Numérique",
        href: "/ce-quon-fait/artisan-numerique",
        icon: "Monitor",
        description: "Formations gratuites aux métiers du digital",
      },
      {
        label: "Rayonnement International",
        href: "/ce-quon-fait/rayonnement-international",
        icon: "Globe",
        description: "CIAN 2026 — Conférence panafricaine",
      },
    ],
  },
  { label: "Événements", href: "/evenements" },
];

export const STATS = [
  { value: 1000, suffix: "+", label: "Repas distribués", icon: "UtensilsCrossed" },
  { value: 4, suffix: "+", label: "Villes couvertes", icon: "MapPin" },
  { value: 1, suffix: "ère", label: "Édition CIAN planifiée", icon: "Globe" },
  { value: 2025, suffix: "", label: "Année de lancement", icon: "Calendar" },
];

export const AXES = [
  {
    id: "humanitaire",
    title: "Solidarité Humanitaire",
    description:
      "Des repas chauds, des fournitures scolaires, une aide médicale — des gestes concrets qui changent des vies dans 4 villes du Bénin.",
    icon: "Heart",
    href: "/ce-quon-fait/solidarite-humanitaire",
    color: "green",
  },
  {
    id: "numerique",
    title: "Artisan Numérique",
    description:
      "Des formations gratuites aux métiers du digital pour armer la jeunesse béninoise et ouest-africaine face aux défis de demain.",
    icon: "Monitor",
    href: "/ce-quon-fait/artisan-numerique",
    color: "gold",
  },
  {
    id: "international",
    title: "Rayonnement International",
    description:
      "La CIAN positionne le Bénin comme hub de l'innovation numérique artisanale en Afrique, en rassemblant experts et décideurs du continent.",
    icon: "Globe",
    href: "/ce-quon-fait/rayonnement-international",
    color: "green",
  },
];

export const VALEURS = [
  {
    title: "Excellence",
    description: "Viser toujours le meilleur, en toute chose.",
    icon: "Star",
  },
  {
    title: "Solidarité",
    description: "Personne ne progresse seul — agir ensemble.",
    icon: "Heart",
  },
  {
    title: "Engagement civique",
    description: "Être utile à sa communauté, sans attendre.",
    icon: "Users",
  },
  {
    title: "Intégrité",
    description: "Transparence totale dans la gestion et les actions.",
    icon: "Shield",
  },
  {
    title: "Innovation",
    description: "Adapter les solutions aux réalités africaines.",
    icon: "Lightbulb",
  },
  {
    title: "Apolitisme",
    description: "Indépendance totale des partis et idéologies.",
    icon: "Scale",
  },
];

export const EVENEMENTS = [
  {
    id: "mille-plats",
    title: "Journée de Solidarité — 1 000 Plats",
    date: "20 juin 2026",
    dateISO: "2026-06-20",
    lieu: "Cotonou, Ouidah, Abomey-Calavi, Allada",
    description:
      "En une seule journée, BÉNIN DEBOUT distribuera 1 000 repas chauds aux enfants et personnes vulnérables dans quatre villes du Bénin. Un acte de solidarité massif, coordonné, et concret.",
    objectif: "1 000 repas distribués",
    icon: "UtensilsCrossed",
    cta: "Soutenir l'événement",
    ctaHref: "/faire-un-don",
    highlight: true,
  },
  {
    id: "cian",
    title: "Conférence Internationale de l'Artisanat Numérique (CIAN)",
    date: "17 juillet 2026",
    dateISO: "2026-07-17",
    lieu: "Cotonou, Bénin",
    description:
      "Premier grand rassemblement panafricain dédié à l'artisanat numérique. Experts, entrepreneurs et décideurs africains et internationaux se réunissent pour valoriser les talents locaux et construire le réseau de demain.",
    objectif: "Réseau panafricain du numérique",
    icon: "Globe",
    cta: "En savoir plus",
    ctaHref: "/ce-quon-fait/rayonnement-international",
    highlight: false,
  },
];

export const CITATION = {
  texte:
    "La jeunesse béninoise n'attend pas qu'on lui tende la main — elle tend la sienne. Notre rôle est de lui donner les outils pour qu'elle se lève, construise et rayonne. Debout, nous le sommes. Ensemble, nous le resterons.",
  auteur: "Jean de Dieu Roméo AHOSSI",
  titre: "Fondateur & Président, BÉNIN DEBOUT",
};

export const DON_INFO = {
  ussd: "*880*46*0151225703*MONTANT#",
  telephone: "+229 51 22 57 03",
  prixPlat: 1400,
  objectifPlats: 1000,
  devise: "FCFA",
  instructions: [
    { step: 1, label: "Composez le code USSD sur votre téléphone" },
    { step: 2, label: "Remplacez MONTANT par la somme souhaitée" },
    { step: 3, label: "Confirmez la transaction" },
    { step: 4, label: "Votre don est enregistré — merci !" },
  ],
};

export const COMPETENCES_NUMERIQUES = [
  { label: "Design graphique", icon: "Palette" },
  { label: "Marketing digital", icon: "TrendingUp" },
  { label: "Gestion de contenu", icon: "FileText" },
  { label: "Développement web", icon: "Code" },
  { label: "Entrepreneuriat numérique", icon: "Briefcase" },
  { label: "Certification professionnelle", icon: "Award" },
];

export const VILLES_ACTIONS = [
  "Cotonou",
  "Ouidah",
  "Abomey-Calavi",
  "Allada",
  "Lomé (Togo)",
];
