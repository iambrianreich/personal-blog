// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://brianreich.dev',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  redirects: {
    // Blog post redirects from WordPress URLs to actual Astro slugs
    '/ai/agentic-coding-with-claude-the-bad-parts-part-1-lack-of-team-buy-in/': '/blog/agentic-coding-with-claude-the-bad-parts-part-1-lack-of-team-buy-in/',
    '/security/using-claude-code-to-automatically-fix-security-issues-discovered-by-snyk/': '/blog/using-claude-code-to-automatically-fix-security-issues-discovered-by-snyk/',
    '/uncategorized/claude-code-test-coverage/': '/blog/claude-code-test-coverage/',
    '/business/make-number-go-up-at-all-costs/': '/blog/make-number-go-up-at-all-costs/',
    '/security/phishing-for-cows/': '/blog/phishing-for-cows/',
    '/book-review/tidy-first-by-kent-beck/': '/blog/tidy-first-by-kent-beck/',
    '/agile/what-i-got-out-of-agile-devops-east-2023/': '/blog/what-i-got-out-of-agile-devops-east-2023/',
    '/engineering-management/technical-debt-for-the-nontechnical/': '/blog/technical-debt-for-the-nontechnical/',
    '/engineering-management/how-to-code-as-an-engineering-manager-maybe-dont/': '/blog/how-to-code-as-an-engineering-manager-maybe-dont/',
    '/frontend/exception-handling-in-javascript/': '/blog/exception-handling-in-javascript/',
    '/frontend/why-my-team-chose-web-components-over-react/': '/blog/why-my-team-chose-web-components-over-react/',
    '/uncategorized/hello-world-2/': '/blog/hello-world-2/',
    // Home redirect
    '/home/': '/',
    // Category redirects to blog listing
    '/category/ai/': '/',
    '/category/security/': '/',
    '/category/business/': '/',
    '/category/engineering-management/': '/',
    '/category/book-review/': '/',
    '/category/agile/': '/',
    '/category/frontend/': '/',
    '/category/uncategorized/': '/',
    // Pagination redirects
    '/page/2/': '/',
  },
});
