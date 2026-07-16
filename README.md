# Prag Attorneys — React + Vite

A multi-page React port of the Prag Attorneys site.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Push to GitHub

```bash
# from inside this folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Create the empty repo on github.com first (no README/.gitignore — this folder already has them), then run the commands above.

## Structure

```
react-project/
├── index.html              ← Vite entry
├── public/
│   └── assets/             ← logo and any static images
├── src/
│   ├── main.jsx            ← ReactDOM root
│   ├── App.jsx             ← hash-based router + Tweaks
│   ├── styles.css          ← global styles
│   ├── data.js             ← practice areas, team, stats…
│   ├── chrome.jsx          ← Header (hamburger nav), Footer, Ticker
│   ├── primitives.jsx      ← icons, Eyebrow, PageHead, ImgPlate
│   └── pages/
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Practices.jsx
│       ├── Team.jsx
│       ├── Insights.jsx
│       ├── Careers.jsx
│       └── Contact.jsx
```

## Notes

- Routing is hash-based (`#/home`, `#/about`, …). Swap for `react-router-dom` if you prefer real routes.
- Fonts load from Google Fonts (Cormorant Garamond + Libre Franklin) via the `<link>` in `index.html`. Swap to a self-hosted setup for offline use.
- Photography lives in `public/assets/`. The insights articles and lawyer portraits are sample/placeholder content — replace before production.
