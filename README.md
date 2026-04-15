# Komizo Partners — Site vitrine V2

> Société à mission · Lyon · [fabriceliut.github.io/Komizo](https://fabriceliut.github.io/Komizo/)

## Stack technique

- **Astro 5** — génération statique
- **Tailwind CSS 3** — styling utilitaire, charte graphique custom
- **Google Fonts** — Outfit (300–700)
- **FormSubmit.co** — formulaire de contact (zéro compte)
- **GitHub Pages** — hébergement, déploiement auto via GitHub Actions

## Structure

```
src/
  layouts/BaseLayout.astro         # Head, meta OG, JSON-LD, scripts globaux
  pages/
    index.astro                    # Page principale (hero → contact, single page)
    mentions-legales.astro         # Mentions légales
    politique-de-confidentialite.astro  # Politique RGPD
    404.astro                      # Page 404 custom
  components/
    Header.astro                   # Nav fixe + scroll spy + mobile hamburger
    Section.astro                  # Wrapper de section (tones: default/muted/dark)
    TeamGrid.astro                 # Fondateur + 11 partenaires
    ContactForm.astro              # Formulaire FormSubmit avec validation JS
  styles/global.css                # Tailwind + composants (btn, card, reveal, marquee)
public/
  images/
    hero/hero-bg.webp              # Image de fond hero (WebP)
    team/*.webp                    # Photos équipe (WebP, max 800px)
    team/comite-mission/*.webp     # Photos comité de mission
    logos/                         # Logos clients, associations, startups (WebP/PNG/SVG)
  favicon.ico, favicon.png         # Favicon multi-format
  apple-touch-icon.png             # iOS icon 180×180
  robots.txt
ressources_v2_komizo/              # Briefs, sources logos, PV de réunion (historique)
```

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
```

## Déploiement

Push sur `main` → GitHub Actions build & deploy automatique sur Pages.

## Formulaire de contact

Utilise [FormSubmit.co](https://formsubmit.co) — les soumissions arrivent à `corentin@komizo-partners.com`.
Au premier envoi, un email de confirmation est envoyé — cliquer dessus une fois pour activer.

## Itérations

### 15 avril 2026

- Restructuration complète des sections (ordre : hero → logos → à propos → équipe → offres → CTA → références → engagements → comité de mission → contact)
- Renommage "collectif" → "partenaires" partout
- Ajout section comité de mission (4 membres avec photos et bios)
- Ajout section engagements (6 engagements + logos associations/startups)
- Références enrichies avec vrais noms et verbatims
- Offres empilées pleine largeur avec bordure colorée
- Carousel références : fade-in animation + indicateurs numérotés
- Barre de progression scroll
- Micro-interactions boutons (scale hover/active)
- Fix `h2::after` sur fonds sombres
- Pages mentions légales et politique de confidentialité (RGPD)
- Optimisation images : ~17 MB → 1.7 MB (Pillow resize + WebP)
- Favicon multi-format (ico/png/apple-touch-icon)
- Responsive amélioré (mobile 320px → desktop 15")
- SASU → SAS, suppression lien rapport de mission, mise à jour nav
- Score UX/UI : 92/100

### 8 avril 2026

- Restauration image hero avec overlay gradient
- Accent bar vert sur titres de section
- Activation formulaire FormSubmit.co
- Audit conformité brief : 85/100

### Reste à faire

- [ ] Image OG optimisée 1200×630 pour partage LinkedIn
- [ ] Analytics léger (Plausible ou Umami)
- [ ] Domaine komizo-partners.com → redirection vers GitHub Pages
