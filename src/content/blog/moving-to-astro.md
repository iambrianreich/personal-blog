---
title: "Moving from WordPress to Astro"
description: "How a WordPress pro moved from WordPress to Astro in about ten minutes, and will never look back."
pubDate: 2026-01-15
category: "ai-agentic-coding"
heroImage: "../../assets/images/blog/moving-to-astro/hero.png"
heroImageAlt: "Using Claude Code to convert a site from WordPress to Astro"
draft: false
---

Tonight [Claude Code](https://code.claude.com/docs/en/overview) empowered me to
do something that I've been putting off for a year or more: get my personal blog
off of WordPress.

# Background

From 2003 through 2019 I did web consulting, first part time, and eventually as
a full time consultant. During that time it's safe to say I built *hundreds* of
WordPress sites. **I was good at it.** I built a reputation for myself because
unlike most fly-by-night web devs and some consultancies, I understood the web
at more fundamental levels. I know when and how to use WordPress and when not to.
I could deliver customizations others could not because I was a skilled
PHP developer, and not a *plug-in installer.*

My life has changed. I haven't worked on WordPress as anything but a technical
backstop to my current company's marketing team in 6 years.

When I sold my consulting business I gave up all of my old content: it now
belonged to someone else. So I set this site up as a place to write, and I
maintained it in WordPress up until tonight.

The less I use WordPress, and the more I'm exposed to other ways of working,
the more I yearned for something simpler:

- **The ability to author in Markdown.** - Over the past 5 years I've grown
  to love Markdown as I use it to build documentation in my team's repos,
  and use it to quickly take notes in Obsidian. Its speed, simplicity, and
  ability to build consistent styling and structure without getting in
  the way of writing content has made me a fan.
- **The ability to reduce my hosting costs.** - When I use WordPress I
  always pair it with managed hosting, because I'd rather not be on the
  hook for malware scans, backups, etc.
- **Getting off the update treadmill.** - WordPress and its ecosystem are
  always changing, and that's both a strength and a weakness. I want to
  write without having to worry about updating a CMS, themes, and plugins.
- **Get back to web fundamentals.** I wanted to get back to delivering a
  simple static site, rather than relying on a stack of janky plugins to
  layer in fixes on top of a slow foundation. I might author in something
  else, but I want my site to build to vanilla HTML, CSS, and JS that is
  fast anywhere.

# Enter Astro

Over the past year or so I've had multiple false starts with evaluating,
trying, and backing out of static site generators. I've built my own
solution in PHP twice now. Then I tried Gatsby, and decided it was a
*goddamned nightmare.* I backed out of that about 9 months ago, and kept
maintaining my WordPress.

Then I heard about [Astro](https://astro.build/) on [Syntax.fm](https://syntax.fm).

At first I wasn't that excited: a content creator's job is to... *you know*...
**create content**. I've already heard the talks about [Gatsby](https://gatsbyjs.com)
and [11ty](https://11ty.dev) and [Jekyll](https://jekyllrb.com) and a dozen other forgettable static site generators.
But a few things drew me to Astro:

* **Low barrier to entry**. Astro has a low barrier to entry. It's very easy to
  get started. Compared to WordPress? Well WordPress is pretty easy, too,
  especially if you buck up for a managed provider. But comparing to other static
  site generators I've tried, such as Gatsby, I was drawn to how few upfront
  choices I had to make, and how little boilerplate was required to implement a
  `Hello World` level project.
* **Local Development.** Astro is a [Node.js](https://nodejs.org) based tool and it offers
  all the upside of that ecosystem, such as the ability to test your site
  locally via `npm run dev`, and hot reloading, with none of the risk and
  downside as I see it. Which leads me to...
* **Ship web primitives.** Astro itself is a `NodeJS` app but the sites that
  it generates can ship *whatever*. If you need to ship a bunch of JavaScript,
  cool! You can do that. I'm mostly writing text. I want it to be fast, easy
  on the eyes, and lean. So I want to ship vanilla HTML and CSS, and with
  Astro, that's exactly what it's going to do until I tell it not to.
* **Dynamic Stuff Happens During the Build.** That doesn't mean your site can't
  have features like tag and category navigation, or other features that
  require understanding and processing the site's larger context to work.
  It just means for those features, the work gets done during the build,
  rather than at page render. By the time the user loads the page, it's
  already been worked out. There's no backend language to run, no database
  to query. Which means less infrastructure, less risk of things breaking,
  and less waiting.

So I decided to try Astro.

# Prerequisites

My end goal was to host the new Astro version of my site using GitHub pages.
On GitHub, you can pretty easily setup a repository to populate a static site
using the GitHub Pages feature. It wants to use Jekyll by default as the
static site generator, but it's low-effort to write a GitHub Action to populate
your site using different tools, GitHub Actions, and their build artifacts.

1. Setup a [GitHub](https://www.github.com) repo for the Astro version of my site.
2. Enable GitHub Pages for the repo and configure with a custom domain.
3. Update DNS for my domain to point to GitHub Pages.
4. Wait for DNS to propagate and SSL cert to generate.

While DNS did its thing, I set about the actual site conversion.

# Using Claude Code to Convert the Site

Instead of starting from scratch I chose to use Claude to help with the process.
The results? **Astounding**. It successfully [one-shotted](https://www.ibm.com/think/topics/one-shot-prompting)
the problem.

## Start in Planning Mode

I stuck Claude in [Plan Mode](https://docs.anthropic.com/en/docs/claude-code/common-workflows). I almost *always*
start in Plan Mode. Then I prompted as follows:

```text
I have a WordPress website at https://brianreich.dev/ that I would like to Convert to Astro:

- I would like to mimic the existing theme.
- I would like the generated site to be web native. That is: HTML, CSS, and limited client-side JavaScript.
- I would like to retain my link structure.
- I would like to migrate all of the existing content.
- I would like to host the site using GitHub Pages.
```

Claude thought for about a minute. Then it formed a plan to:

- Setup a bare Astro project.
- Add some dummy content and use it to build out the theme and layout, and styling.
- Guide me through exporting my content from WordPress and [importing it into Astro](https://github.com/lonekorean/wordpress-export-to-markdown) as Markdown.
- Adding a GitHub Action to build and publish when I push to `main`.

# Executing the Plan

I reviewed the plan. It seemed reasonable. And I knew that because my new site was
*just a git repo*, there's no mistake I cannot back out of. So I told Claude to
execute its plan.

The result? *You're looking at it.* It's minimal, fast, and functional. Which is
exactly what I was going for. It looks like my WordPress site (for better or for
worse), except you don't have to wait for pages to render, and I don't have to
pay for and maintain an instance of WordPress.

# Steps I Took Before I Published

When I "vibe code" anything, I always try to implement quality at the lowest possible level
so:

- I can't commit slop that doesn't meet whatever standards I set for the project.
- AI tools get feedback from quality tools automatically and use it to auto-heal
  as much slop as possible.

Now I knew *some* of the things I wanted to do, but I wanted to see what Claude (using Opus 4.5, btw)
was going to come up with. So I asked:

```text
Recommend any quality checks you think I should run before publishing the site.
```

It came up with a list:

- Run `astro check` which is a basic Astro component validator
- Use `linkinator` to spider the site and verify all links and navigation work
- Validate JSON-LD used on the site
- LightHouse audits for performance, accessibility, seo, best practices

I like this list. So not only did I tell it to run them, I told it to add the
quality checks to my [CLAUDE.md](https://github.com/iambrianreich/personal-blog/blob/main/CLAUDE.md)
so it would know to run them in the future.

The quality checks ran successfully. I reviewed the output, then I reviewed
the site manually on the `localhost` URL, and built some confidence that
Claude not only *did the right work*, but also *did the work right*.

# Publishing the Site

Literally:

```bash
git commit -m 'refactor: convert from WordPress to Astro'
git push
```

# What's Next?

What's next? Well, I have some thoughts:

- **Add better navigation**. Right now it's very simplistic, and there's no good way
  to get an overview of the content, or navigate the category hierarchy.
- **Analytics**. I'd like to understand who's using my site. Not sure if I'll
  use Google Analytics like I did before, or something else.
- **On the fly image optimization.** I'd like a process through which I can add image
  content to my site and it handles optimization for me, during the build.

Of course these are all things WordPress handled for me. But it did so via
running code while the user waited for the page to load.

Also, **using Claude as my CMS.** Wait, *what?*

While Claude Code has *code* right there in the name, it is a general-purpose agentic
*work-doing tool.* I am excited to use Claude to help me write, edit, and publish
content in this new framework going forward. I'm confident I can get Claude to do
things like

* Creating a blank articles for me from a template.
* Generating hero images for me that are consistent with some "branding guidelines"
  using another tool, like Chat Gippity or Nano Banana.
* Checking my content for quality and accuracy.

# Observations

I have a few take-aways from this process.

1. **My knowledge of WordPress meant very little.** The fact that I'm a WordPress
   veteran meant nothing. Claude knew enough to do the job without my intervention.
2. **My lack of knowledge of Astro meant very little.** The fact that my history
   with Astro is about two hours long meant nothing. Claude knew enough to do the
   job without my intervention.
3. **My knowledge of the primitives meant a great deal.** I still had to understand
   the problem domain (the content and structure of my old website). I still had to
   understand the web platform enough to write a prompt that covered a ton of
   requirements in very few words, and placed critical guardrails around the process.
   I still had to know "what makes a good website?" in order to know which quality
   checks to run before I publish.
4. **We are absolutely cooked.** The above process took about 10 minutes. Holy shit.

The challenge? Helping customers and business leaders understand that a process like
this can take ten minutes only because I have decades of experience that went into
the prompts.