# mauriballes Website

Personal website for Mauricio Ballesteros, built with Vite and React.

The site is bilingual:

- `/` renders the English version.
- `/es` renders the Spanish version.

## Stack

- Vite
- React
- Lucide React
- CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
website/
├── public/
│   └── logo.svg
├── scripts/
│   ├── clean-dist.mjs
│   └── create-es-route.mjs
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── vite.config.js
```

## Content

Most page content lives in `src/App.jsx` inside the `content` object:

- `content.en` for English.
- `content.es` for Spanish.

The app checks the current path and uses Spanish when the path starts with `/es`; otherwise it uses English.

## Static Hosting Notes

The production build generates:

- `dist/index.html`
- `dist/es/index.html`

This makes `/es` work on static hosts that serve folder indexes. For hosts with custom rewrites, point all routes to `index.html`.
