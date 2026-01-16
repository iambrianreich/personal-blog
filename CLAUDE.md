# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

This is Brian Reich's personal blog (brianreich.dev), built with Astro 5. The site is a static blog with:

- **Content Collection**: Blog posts are markdown files in `src/content/blog/` with frontmatter schema defined in `src/content/config.ts`
- **Categories**: Posts use a predefined category enum (ai-agentic-coding, security, business, engineering-management, book-reviews, agile-devops, frontend, uncategorized)
- **Draft support**: Posts with `draft: true` are excluded from production builds

### Page Routing

- `/` - Home page with paginated blog listing (10 posts per page)
- `/blog/[slug]` - Individual blog posts (dynamic routing via `[...slug].astro`)
- `/blog/page/[page]` - Blog pagination
- `/category/[category]` - Category-specific listings
- `/resume` - Resume page
- `/rss.xml` - RSS feed

### Layout Structure

- `BaseLayout.astro` - Root layout with Header, Footer, and global styles
- `BlogPost.astro` - Blog post layout with JSON-LD structured data
- `PageLayout.astro` - Generic page layout

### Key Components

- `BlogCard.astro` - Post preview cards on listing pages
- `CategoryBadge.astro` - Category tag styling
- `JsonLd.astro` - Structured data for SEO
- `BaseHead.astro` - Meta tags and SEO head content

### Styling

- CSS custom properties in `src/styles/global.css` define the design system
- Accent color: `#DB0042` (crimson)
- Code highlighting: Shiki with github-dark theme

## Deployment

GitHub Pages deployment via GitHub Actions (`.github/workflows/deploy.yml`). Pushes to `main` trigger automatic builds using `withastro/action@v3`.

## Blog Post Frontmatter

```yaml
title: string (required)
description: string (required)
pubDate: date (required)
updatedDate: date (optional)
heroImage: image path (optional)
heroImageAlt: string (optional)
category: enum (required)
draft: boolean (default: false)
```

Images for posts go in `src/assets/images/blog/[post-slug]/`.
