# brianreich.dev

Personal blog of Brian Reich — Technical Manager, Recovering Individual Contributor.

**Live site:** [brianreich.dev](https://brianreich.dev)

## Tech Stack

- [Astro 5](https://astro.build) - Static site generator
- GitHub Pages - Hosting
- Shiki - Syntax highlighting

## Local Development

```bash
npm install
npm run dev      # http://localhost:4321
```

## Adding a Blog Post

1. Create a markdown file in `src/content/blog/` (filename becomes the URL slug)
2. Add required frontmatter:

```yaml
---
title: "Your Post Title"
description: "Brief description for SEO and previews"
pubDate: 2024-01-15
category: frontend  # see categories below
---
```

3. Optional frontmatter fields:
   - `heroImage` - Path to image in `src/assets/images/blog/[slug]/`
   - `heroImageAlt` - Alt text for hero image
   - `updatedDate` - If post was revised
   - `draft: true` - Exclude from production build

**Categories:** `ai-agentic-coding`, `security`, `business`, `engineering-management`, `book-reviews`, `agile-devops`, `frontend`, `uncategorized`

## Building

```bash
npm run build    # Output to ./dist/
npm run preview  # Preview the build
```

## Deployment

Pushes to `main` automatically deploy via GitHub Actions.
