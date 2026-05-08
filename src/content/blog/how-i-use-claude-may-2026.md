---
title: "How I Use Claude in May, 2026"
description: "A snapshot of how I'm using Claude day-to-day in May of 2026 — what works, what doesn't, and what's changed."
pubDate: 2026-05-08
category: "ai-agentic-coding"
heroImage: "../../assets/images/blog/how-i-use-claude-may-2026/hero.png"
heroImageAlt: "Cartoon-style illustration of a developer at a desk collaborating with a Claude AI assistant against a futuristic May 2026 backdrop"
draft: false
---

In the age of [Large Language Models](https://uit.stanford.edu/service/techtraining/ai-demystified/llm),
one thing remains constant: every few months, *everything I know feels wrong.* I
feel like I am getting good results. I am shipping more code without *also*
shipping more defects. By any metric I track, my contributions are up:

| Metric      | May 2026 | May 2025 |
| ----------- | -------- | -------- |
| PRs Opened  | 64       | 36       |
| LoC Changed | 98,549   | 20,290   |
| Downtime    | 0        | 0        |
| Regressions | 2        | 1        |

How I use AI changes constantly. So you might ask:

> Given you spend half your day in Teams meetings and only part of your day
> writing code, how the **hell** do you get so much done?

**Great question!** To answer, let's walk through my last month of projects and see what we can learn. If you prefer a TL;DR, and not the storytelling of a legacy archaeologist, just scroll to the end.

## AWS S3 Migration

**Summary**: Refactor legacy application to store files in S3 instead of local filesystem.

In a sane codebase this would be trivial, because a sane codebase understands [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns). But I don't work on one of those.

This is actually a big lift on our code, in its current shape. The project was roughly 15 issues ranging in size from *"eat a cheeseburger, you look unhealthy"* to *"have you heard the good news about our lord and savior Ozempic?"* Many involved full rewrites of ancient Perl code to modern PHP for some critical features. Here's my strategy:

* **Plan Up-Front**. I spent a day mapping which application processes touch the filesystem and how. The result, `specs/s3.md`, became the planning doc shared between me and my tools.
* **Let Claude Manage the Living Document.** Have Claude update the spec as work progresses, marking off completed items as it goes.
* **Make Claude Aware of Project Patterns and Practices.** Use `CLAUDE.md`, project docs, and Claude's memory to establish and enforce baselines. When refactoring, explicitly tell Claude to match your project's patterns and quality standards.
* **Use Claude as a Reviewer.** `/review` audits a PR. The [`superpowers`](https://github.com/obra/superpowers) plugin's `/simplify` audits your current branch for quality, repetition, and security. I also run my [library of agent specialists](https://github.com/brianreichtcs/core-claude-commands) for domain-specific perspectives.
* I use a Jira skill I wrote to update ticket description, status, and QA test plan as I go. (Jira MCP works too.)

Using these practices I was able to do some very complex refactoring work from procedural Perl to object-oriented PHP with good separation of concerns that matches established patterns in our modern codebase, and comprehensive unit testing to cover it all.

> **Key takeaway:** On a multi-week legacy refactor, the spec is the product. Treat it as a living document Claude maintains, and every session compounds on the last one's progress.

### Refactor Perl Document Archive to PHP

**Summary**: Refactor a procedural Perl *god process* to PHP in a compatible way while matching our modern architectural patterns and quality expectations.

The Perl script responsible for processing document archive requests is a frequent
source of bugs. Multiple developers have made attempts at a rewrite, only for
their feature branches to end up *in the bin.* Using Claude, I've refactored
the entire script to PHP, dropping our total lines of Perl left in the codebase
by a few percentage points and adding comprehensive unit testing to a process
that previously had none.

- **Point Claude at the file** and tell it I want a refactor to modern PHP that matches our repo's established patterns and practices.
- **Force a planning conversation.** Ask Claude to form a plan and surface clarifying questions *before* committing. We talk it through. Then it writes the plan as a Markdown spec.
- **Execute, with breaks.** Claude pauses at planned milestones — perfect moments to `/clear` context and tell it to continue.
- **Verify code parity.** Especially when the original has no tests, ask Claude to compare old and new behavior side-by-side — inputs, outputs, side effects, edge cases. The new code has to do *exactly* what the old code did, no more and no less.
- **Review in layers.** Several rounds of `/simplify` to flush out redundant code (it loves writing some) and N+1 performance errors. Then I have Claude invoke [my subagents](https://github.com/brianreichtcs/core-claude-commands) and consolidate their feedback into a single list of must-fixes. I iterate until there's no critical feedback and no "nice to haves" worth chasing.
- **Open, decompose, ticket.** Open the PR, ask Claude to split the 50-file change into small atomic PRs that are trivial to review, and update the Jira ticket via my Jira skill.

> **Key takeaway:** Make Claude ask clarifying questions before it writes a single line. The plan you co-author is what you're really iterating on — the code is just the output.

## Perl Cleanup

**Summary**: Iteratively work towards **zero lines of Perl**. Find and remove dead Perl code. Refactor existing Perl code to object-oriented PHP.


Without making a federal case about it, my team's predecessors thought it was a smart idea to do all the "heavy lifting" in our codebase in Perl rather than PHP. We disagree, with extreme prejudice. We consider every line of it technical debt, so it's a goal of mine by the end of the summer to eliminate Perl completely.

- **Generate a candidate list.** Ask Claude to find dead Perl files or submodules — it'll grep around and compile a list.
- **Verify it's actually dead.** Pick one. Grep the codebase yourself before authorizing deletion.
- **Let Claude do the work in a worktree.** The `worktree` [superpower](https://github.com/obra/superpowers) runs multiple Claude sessions on the same repo without cross-contamination.
- **Hand-verify the result, then ticket.** Confirm Claude didn't touch live code. Update Jira via my skill.

> **Key takeaway:** Worktrees turn one Claude session into a parallel team. But always hand-verify "this code is dead" before letting anything get deleted.

## SmarterU Enhancements

**Summary**: Our predecessors integrated with a third-party API in a way that causes nonstop toil to resolve data consistency issues. This is a *"slow down to go faster"* move. Eliminate a source of toil so you can spend the time coding on new stuff in the future.

I used the same strategies on this project as I did with others above. What was a bit different is that I used Claude, as well as GitHub Copilot, to do numerous rounds of quality-checking on this project before I have another human being look at it. This integration gets weird, and Claude helps me find numerous edge cases and opportunities for simplification.

When I use Claude to review code that Claude itself wrote, I generally use `/clear` to clear context. To some extent, this avoids the problem of Claude sniffing its own farts; or as a less *gross* person might say it, *checking its own work.*

> **Key takeaway:** Don't just use AI to write and plan. Use it to code review too. Even better, use multiple/different agents to perform the review.

## Banish a Badly Named HTTP Parameter

**Summary**: Fix a bad pattern splashed across our codebase that results in web application firewall false positives and randomly breaks features.

Since we've had a WAF with SQLi rules, we've had periodic issues with requests that have `ARG_windowtitle` as a request parameter. We've had to add very aggressive `ALLOW` overrides to our firewall to allow all requests in for specific URLs. Not great. Allowing all traffic to a URL just because of a bad naming convention is the wrong fix. The right fix is to change the name of the argument so it doesn't contain a `SQL` keyword. After stumbling on this again, I decided to just do it.

### First Attempt

This is the kind of project where, if you had to make a case for why it's important, it'll sit on your backlog forever. But it's also the kind of problem that Claude is terrific at turning the crank on. My first attempt, I let Claude do a Big Bang run against it and try to fix it everywhere.

Did it get it right? Probably.

But when I turned it into a Draft PR (always my first step after letting Claude "one-shot" something for me), the changeset was just too big to reason about. Not only would it be hard for me, the developer, to understand, writing a test plan and executing a test plan would be difficult, and the review would be days of burden on someone else.

So I threw it away.

### Second Attempt

My second attempt took the learning from the first, but I adjusted my strategy from "one-shotting" to "slowly turning the crank," which actually ends up being much faster.

* **Describe the problem.** "The codebase is littered with `ARG_windowtitle` which our WAF keeps blocking."
* **Ask Claude to map usage and form a plan** to rename it across the codebase.
* **Work in slices.** Each PR is one backend change plus the matching frontend changes to keep the client compatible.
* **Stop between PRs** so I can review each one before continuing.

This worked amazingly. Each PR has essentially 2–10 lines of changes. A change on the backend, and a matching change on the frontend. I'd build the code. I'd validate that the touched feature still works as expected. I'd expand the code to make sure I was missing nothing around the PR context that might be an issue. I'd approve and merge.

This resulted in around 40 PRs, but each one was just a few minutes of review to feel good about it, test it, and merge. This approach is a clever way to deal with the issue of faster development via AI turning into a slower, shittier day for everyone else because peer review is still important.

While we're talking about peer review, a few brief comments on how my thinking is evolving on this topic in the age of AI:

- **Review is Still Important**: AI results in being able to ship more lines of code faster, but those lines of code **do still need to be reviewed.** But by whom? Well, keep reading.
- **Pairing With AI Can Be Legitimate Pair Programming**: If you use AI as a responsible, skeptical partner, developing with AI has some of the benefits of pairing with a human. But if you follow the vibes and embrace the [sycophancy](https://www.science.org/doi/10.1126/science.aec8352) of it all, you're in for a bad time.
- **AI Is Pretty Good at Code Review**: I use multiple modes of AI review, and I use different AIs using different models to conduct it. I always `/clear` context between work mode and review mode to reduce issues with Claude believing its own brilliance.
- **Hot Take: Not Every PR Needs Another Human**: I've concluded that PR should be pragmatically performed, and not a dogmatic requirement with zero exceptions.

> **Key takeaway:** Don't one-shot horizontal refactors. Slice them — each PR small enough that review takes minutes, not days — even if it means forty of them. AI throughput is only a win if the reviewers can keep up.

## One More Thing: Yolo Mode

There's a practice underneath all of this that I didn't call out in any of the project stories, but it's probably the single biggest reason I move as fast as I do: **I always run Claude with `--dangerously-skip-permissions`**.

Yeah, that flag is named the way it is for a reason. I feel safe doing it because:

1. **I run Claude in a sandboxed, virtualized dev environment.** There's nothing it can break that I can't roll back.
2. **I'm careful about what Claude can actually talk to.** I avoid most MCPs and keep firm limits on its reach. I might use Claude to *troubleshoot* a cloud architecture problem, but I'll never run in "yolo" mode while connected to prod with admin permissions.

The point isn't that permission prompts are bad — they're a sensible default. The point is that for *my* setup, they're pure friction. The blast radius is bounded by the environment, not by Claude's prompts.

## Summary

What can we learn from a month of using Claude to sling almost 100,000 lines of improvements that include meaningful enhancements as well as reductions in performance-degrading toil and tech debt?
 
The strategies that show up across every project above:

- **Plan up-front and persist the plan.** A markdown spec in the repo (`specs/foo.md`) becomes a shared working document for me and Claude. Claude updates it as work progresses.
- **Establish patterns before you write code.** `CLAUDE.md`, project docs, and Claude's memory are how you tell the AI what "good" looks like in your codebase. Don't skip this. Getting Claude to know **and remember** what it is you want over time is a [flywheel building exercise](https://www.jimcollins.com/concepts/the-flywheel.html) that continuously builds your and your team's momentum over time.
- **Force a planning conversation before execution.** Make Claude ask clarifying questions before it touches code. Cheap insurance against bad assumptions.
- **Don't one-shot big refactors.** Slice the work. Each PR should be small enough to review in minutes, not hours. Faster development via AI shouldn't mean a slower, shittier day for your reviewers.
- **Stop at milestones, `/clear`, continue.** Long-running tasks benefit from fresh context.
- **Use `worktree` for parallel sessions.** Multiple Claude sessions on the same repo without cross-contamination.
- **Review in layers.** `/review` for PR-level. `/simplify` for branch-level quality and dedup. [Custom subagents](https://github.com/brianreichtcs/core-claude-commands) for domain-specific perspectives. Copilot or another AI for a second opinion on tricky integrations.
- **Always start with a Draft PR after a one-shot.** It's the fastest way to see if the change is reviewable before you ask anyone else to review it.
- **Keep tickets in sync automatically.** A Jira skill (or Jira MCP) updates description, status, and test plan as work progresses, so QA isn't waiting on you.
- **Treat AI as a skeptical partner, not a sycophant.** The benefits of pairing only show up if you push back.
- **Bound the blast radius, then turn off the friction.** Run in a sandboxed environment, keep Claude away from prod and broad MCP access, then run with `--dangerously-skip-permissions` so prompts stop interrupting you.

If you *really* want me to boil the ocean, I can sum up like this:

> Be a better communicator.

Bam. There it is. Treat your agents like partners in crime that need to understand the fine-grained details of the caper you're about to commit. Ensure your understanding of the problem space is consistent with *their* understanding of it. Ensure the plan is written down. Use them in a way that fits your process, and doesn't burn other people out by requiring them to review PR slop that ends in *Generated by Claude*.

