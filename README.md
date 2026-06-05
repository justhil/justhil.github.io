# Ink Blog

A minimalist, bilingual blog template built with Astro 6, React 19, and Tailwind CSS 4.

![Astro](https://img.shields.io/badge/Astro-6-blue) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4) ![React](https://img.shields.io/badge/React-19-61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6)

## Features

- **Bilingual** — English and Chinese with automatic language detection
- **Dark mode** — Light/dark theme with user preference memory
- **Full-text search** — Static search powered by Pagefind
- **Mermaid diagrams** — Hand-drawn style by default
- **Math rendering** — LaTeX via KaTeX
- **Comments** — Giscus (GitHub Discussions) integration
- **RSS feeds** — Separate feeds for each language
- **Image lightbox** — Click-to-zoom with thumbnail gallery
- **SEO optimized** — JSON-LD structured data, sitemap, robots.txt
- **Reading time** — Automatic estimation per article
- **Table of contents** — Active section tracking on article pages
- **Optimized fonts** — Inter, Noto Sans SC, JetBrains Mono via Astro Fonts API

## Quick Start

```bash
# Clone the template
git clone https://github.com/OldJii/ink-blog.git my-blog
cd my-blog

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:4321` to see your blog.

## Configuration

Edit `site.config.ts` to customize your blog:

```typescript
export default defineSiteConfig({
  site: 'https://your-blog.com',
  title: 'My Blog',
  description: 'A minimal blog',
  avatar: '/avatar.png',
  theme: { mode: 'light', enableUserChange: true },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/your-username' },
  ],
  // See site.config.ts for all options
});
```

### All Options

| Option | Type | Description |
| --- | --- | --- |
| `site` | `string` | Production URL (required) |
| `title` | `string` | Site title (required) |
| `description` | `string` | Site description (required) |
| `avatar` | `string` | Avatar image path |
| `theme` | `{ mode, enableUserChange }` | Theme settings |
| `contentWidth` | `{ type }` | `narrow` / `medium` / `wide` / `full` |
| `socialLinks` | `SocialLink[]` | Social media links |
| `giscus` | `GiscusConfig` | Comment system (see [giscus.app](https://giscus.app)) |
| `readTime` | `boolean` | Show reading time |
| `lastModified` | `boolean` | Show last modified date |
| `follow` | `{ feedId, userId }` | [Follow.is](https://follow.is) subscription |

## Writing Content

### Articles

Add Markdown files to `src/content/post/en/` (English) and `src/content/post/zh/` (Chinese):

```yaml
---
title: My First Post
description: A brief description
tags:
  - Tech
  - Life
pubDate: 2026-01-01
draft: false
contentWidth: medium  # optional: narrow, medium, wide, full
---

Your article content here...
```

### Pages

Static pages go in `src/content/pages/`. The About page uses `about.md` (Chinese) and `about-en.md` (English).

### Supported Syntax

- Standard Markdown (headings, lists, tables, images, code blocks)
- LaTeX math: `$inline$` and `$$block$$`
- Mermaid diagrams in fenced code blocks
- Container blocks: `:::tip`, `:::warning`
- GitHub emoji: `:rocket:` → :rocket:

## Project Structure

```
├── plugins/              # Remark plugins
├── public/               # Static assets
├── src/
│   ├── assets/           # Styles
│   ├── components/       # UI components
│   ├── content/
│   │   ├── pages/        # Static pages
│   │   └── post/
│   │       ├── en/       # English articles
│   │       └── zh/       # Chinese articles
│   ├── helpers/          # Utilities
│   ├── i18n/             # Translation strings
│   ├── pages/            # Route pages
│   └── typings/          # Type definitions
├── astro.config.mjs
├── site.config.ts       # Site configuration
└── tsconfig.json
```

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Production build with Pagefind indexing |
| `npm run preview` | Preview production build |
| `npm run lint` | TypeScript + Astro checks |
| `npm run format` | Format code with Prettier |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Deploy — zero configuration needed

### Other Platforms

The build output is a static site in `dist/`. Deploy it to any static hosting (Netlify, Cloudflare Pages, GitHub Pages, etc.).

## Acknowledgments

Design inspired by [slate-blog](https://github.com/SlateDesign/slate-blog).

## License

[MIT](./LICENSE.txt)
