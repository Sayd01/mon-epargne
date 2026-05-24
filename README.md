# Caisse Papa

PWA personnelle pour suivre l'épargne envoyée à mon père (FCFA / XOF).

## Fonctionnalités

- **Dépôts + Retraits** : enregistre chaque envoi à papa et chaque retrait
- **Solde en temps réel** avec total déposé / total retiré
- **Liste groupée par mois** avec total mensuel coloré
- **Édition / suppression** d'un mouvement par tap
- **Statistiques** : 6 derniers mois en graphiques, moyennes, comptages
- **Export / Import JSON** pour sauvegarder
- **100% hors-ligne** après 1er chargement (Service Worker)
- **Mobile-first** : design optimisé pour usage smartphone

## Démarrer localement

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Déploiement GitHub Pages

Settings → Pages → Source : `main` · `/(root)` → Save.

## Sur Android

Ouvre l'URL HTTPS dans Chrome → menu ⋮ → **Installer l'application**.

## Stack

- HTML5 + JavaScript vanilla (aucun framework)
- CSS custom (pas de Tailwind, palette navy + cream + gold)
- Google Fonts : Plus Jakarta Sans
- `localStorage` pour la persistance
- Service Worker (network-first)
- Manifest PWA

## Structure

```
caisse-papa/
├── index.html              # App complète (self-contained)
├── manifest.json
├── sw.js
├── data/                   # Réservé (rien dedans pour l'instant)
├── icons/icon-192.png
├── icons/icon-512.png
└── generate-icons.js       # Régénération des icônes (Node + sharp)
```
