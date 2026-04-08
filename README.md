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
  layouts/BaseLayout.astro      # Head, meta OG, JSON-LD, scripts globaux
  pages/index.astro             # Page unique (hero, à propos, offres, équipe, refs, contact)
  pages/404.astro               # Page 404 custom
  components/
    Header.astro                # Nav fixe + scroll spy + mobile hamburger
    Section.astro               # Wrapper de section réutilisable (tones: default/muted/dark)
    TeamGrid.astro              # 3 niveaux : fondateur, partenaires clés, réseau
    ContactForm.astro           # Formulaire FormSubmit avec validation JS
  styles/global.css             # Base Tailwind + composants custom (btn, card, input, reveal)
public/
  images/hero/hero-bg.jpg       # Image de fond hero
  images/team/                  # Photos équipe (corentin, lauramay, aurelien, sirine)
  images/logos/                 # Logo couleur + blanc + avatars
  favicon.png, robots.txt
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

## Itération du 8 avril 2026

- Restauration de l'image hero (hero-bg.jpg) avec overlay gradient
- Suppression des icônes lighthouse SVG sur les titres de section → accent bar vert
- Remplacement des icônes engagement cassées par des SVG simples et lisibles
- Suppression du doublon "Contact" dans la nav (CTA "Nous contacter" conservé)
- Activation du formulaire de contact via FormSubmit.co
- Audit de conformité brief : 85/100 sur le contenu, structure complète

### Reste à faire (prochaine itération)

- [ ] Remplacer hero-bg.jpg par une vraie photo (équipe / bureau)
- [ ] Ajouter le PDF du rapport de mission 2024 (lien actuellement placeholder)
- [ ] Pages Mentions légales / Politique de confidentialité
- [ ] Image OG optimisée 1200×630 pour partage LinkedIn
- [ ] Analytics léger (Plausible ou Matomo)
- [ ] Domaine komizo-partners.com → redirection vers GitHub Pages
