---
title: "How I Use Claude in May, 2026"
description: "A snapshot of how I'm using Claude day-to-day in May of 2026 — what works, what doesn't, and what's changed."
pubDate: 2026-05-08
category: "ai-agentic-coding"
draft: false
---

Over the past 18 months, one thing has remained constant: how I use AI in my job as a software developer keeps changing. I feel like I am getting good results. I am shipping more code without also shipping a meaningfully larger number of defects. By any measure, my contributions are up:

| Metric      | May 2026 | May 2025 |
| ----------- | -------- | -------- |
| PR's Opened | 64       | 36       |
| LoC Changed | 98,549   | 20,290   |
| Downtime    | 0        | 0        |
| Regressions | 2        | 1        |

This, all while having a very full schedule of meetings. So... what am I doing?

To answer that question, I had to think about the projects I've worked on in the last month, and how I went about doing them. But the essence of my process comes down to a few key strategies. Skip to the summary if you just want the juicy bits, and not the storytelling.

## AWS S3 Migration

**Summary**: Refactor legacy application to store files in S3 instead of local filesystem.

This is actually a big lift due to the shape of legacy code. The project was roughly 15 issues ranging in size from "a few hours" to "a few weeks." Many involved full rewrites of ancient Perl code to modern PHP for some critical features. Here's my strategy:

* **Plan Up-Front**. I began with a day of research and planning, just to get the lay of the land. What application processes touch the local filesystem, and how? This resulted in `specs/s3.md`, which was the project planning document shared between me and my tools.
* **Let Claude Manage the Living Document.** The spec is treated as a living document. Let Claude track its progress by updating as it goes. Mark off completed projects.
* **Make Claude Aware of Project Patterns and Practices.** Use `CLAUDE.md`, other documentation, and Claude's memory to establish and enforce baselines. When planning a refactoring task tell Claude you want it to refactor to established project patterns and quality standards.
* **Use Claude as a Reviewer.** Claude has the `/review` command to let it rip on a PR. But with the `superpowers` plugin you also get `/simplify` which you can use to review code on your current branch for quality, repetition, security, and other quality signals. Additionally, I like to use a [library of agent specialists I've built](https://github.com/brianreichtcs/core-claude-commands) and ask them to review bodies of work from specific perspectives.
* I use a Jira skill I wrote to update ticket description, status, and test plan for QA as I go. (Jira MCP can get you there too).

Using these practices I was able to do some very complex refactoring work from procedural Perl to object oriented PHP with good separation of concerns that matches established patterns in our modern codebase, and comprehensive unit testing to cover it all.

> **Key takeaway:** On a multi-week legacy refactor, the spec is the product. Treat it as a living document Claude maintains, and every session compounds on the last one's progress.

### Refactor Perl Document Archive to PHP

**Summary**: Refactor a procedural Perl "god process" to PHP in a compatible way while matching our modern architectural patterns and quality expectations.

The `document_archive.pl` script has been a frequent source of bugs and it's plugged into several key processes including archiving an uncontrolled document, and releasing a controlled document (which archives the previous version). I've refactored this entire script to PHP, dropping our total lines of Perl left in the codebase by a few percentage points.

- I point Claude at `document_archive.pl`
- I tell it that I want to refactor the code into modern PHP using the established patterns and practices in our repo.
- I ask it to form a refactor plan.
- I ask it to ask me any clarifying questions it needs to form the best plan possible.
- We converse through a plan
- It writes a spec in Markdown format.
- Then, I let it execute the plan.
- It will stop at milestones within the plan to rest. This is a good time to `/clear` context and then tell Claude to continue the plan.
- When it's done, I will go through several rounds of `/simplify` to find redundant code (it likes to do that), N+1 performance errors, etc.
- I will then do a review "my way" which is to ask Claude to invoke all of [my subagents](https://github.com/brianreichtcs/core-claude-commands) to review the code changes from their perspective. I ask for a consolidated list of feedback that each agent would require fixed to approve the PR.
- I iterate as needed.
- When I get to the point where there is no critical feedback and no "nice to haves" that I think are worth including in the body of work, I open the PR.
- Use Jira skill to update ticket description, status, and test plan.
- Ask Claude to help decompose the final PR from a 50-file change to multiple, small, atomic PR's that are trivial to review and merge.

> **Key takeaway:** Make Claude ask clarifying questions before it writes a single line. The plan you co-author is what you're really iterating on — the code is just the output.

## Perl Cleanup

**Summary**: Find dead Perl code and remove it. Find large swaths of Perl code and refactor them.

All Perl code at this point is tech debt. We have to use poor programming practices (`exec` risk) to call the Perl. There are no unit tests. So it's a goal of mine by the end of the summer to eliminate Perl completely.

- I ask Claude to find me dead Perl files or dead Perl submodules.
- It uses tool calls to search, grep and compile a list.
- From the list, I pick one. I verify it's truly dead by grepping the codebase.
- I let it do the work.
- I then hand verify the result doesn't touch live code.
- I use the `worktree` skill from superpowers to have Claude do the work in a separate git worktree. This superpower allows for working across multiple Claude sessions on the same repo without cross-contamination between tasks.
- Use Jira skill to update ticket description, status, and test plan.

> **Key takeaway:** Worktrees turn one Claude session into a parallel team. But always hand-verify "this code is dead" before letting anything get deleted.

## SmarterU Enhancements

**Summary**: Introducing `EmployeeID` as the source of truth for user identity in **SmarterU**, and some other enhancements to this API integration between our system and our third-party LMS.

I used the same strategies on this project as I did with others above. What was a bit different is that I used Claude, as well as CoPilot, to do numerous rounds of quality-checking on this project before I get another human being look at it. This integration gets weird, and Claude helps me find numerous edge cases and opportunities for simplification.

> **Key takeaway:** For integrations and edge-case-heavy code, two different AIs catch different things. Run both before a human reviewer ever sees it.

## Banish ARG_windowTitle

**Summary**: Fix a bad pattern splashed across our codebase that results in web application firewall false positives and randomly breaks features.

Since we've had a WAF with SQLi rules, we've had periodic issues with requests that have `ARG_windowtitle` as a request parameter. We've had to add very aggressive `ALLOW` overrides to our firewall to allow all requests in for specific URLs. Not great. Allowing all traffic to a URL just because of a bad naming convention is the wrong fix. The right fix is to change the name of the argument so it doesn't contain a `SQL` keyword. After stumbling on this again, I decided to just do it.

### First Attempt

This is the kind of project where, if you had to make a case for why it's important, it'll sit on your backlog forever. But it's also the kind of problem that Claude is terrific at turning the crank on. My first attempt, I let Claude do a Big Bang run against it and try to fix it everywhere.

Did it get it right? Probably.

But when I turned it into a Draft PR (always my first step after letting Claude "one-shot" something for me) the changeset was just too big to reason about. Not only would it be hard for me, the developer to understand, writing a test plan and executing a test plan would be difficult, and the review would be days of burden on someone else.

So I threw it away.

### Second Attempt

My second attempt took the learning from the first but I adjusted my strategy from "one-shot" to slowly turn the crank, which actually ends up being much faster.

* **Describe the problem to Claude**: the codebase is littered with a request parameter called `ARG_windowtitle` which is constantly blocked as a false positive by our WAF.
* Ask Claude to go build an understanding of how `ARG_windowtitle` is used in the codebase, and **form a plan** to rename the argument.
* **Instruct Claude to work iteratively**: identify a small "slice" across the front and back ends to change consistently. In other words, make one backend change, and include the frontend changes required to maintain API compatibility with the client.
* **Instruct Claude to stop between PR's**: so I can review them myself.

This worked amazingly. Each PR has essentially 2 - 10 lines of changes. A change on the backend, and a matching change on the frontend. I'd build the code. I'd validate that the touched feature still works as expected. I'd expand the code to make sure I was missing nothing around the PR context that might be an issue. I'd approve, I'd merge.

This resulted in around 40 PR's, but each one was just a few minutes of review to feel good about it, test it, and merge. This approach is a clever way to deal with the issue of faster development via AI turning into a slower, shittier day for everyone else because Peer Review is still important.

While we're talking about peer review, a few brief comments on how my thinking is evolving on this topic in the age of AI:

- AI results in being able to ship more lines of code faster, but those lines of code **do still need to be reviewed.** But by whom?
- If you use AI as a responsible, skeptical partner, developing with AI has some of the benefits of pairing with a human. If you embrace the [sycophancy](https://www.science.org/doi/10.1126/science.aec8352) of it all, you're in for a bad time.
- I use multiple modes of AI review, and I use different AI's using different models to conduct it.
- I've concluded that PR should be pragmatically performed, and not a dogmatic requirement with zero exceptions.

> **Key takeaway:** Don't one-shot horizontal refactors. Slice them — each PR small enough that review takes minutes, not days — even if it means forty of them. AI throughput is only a win if the reviewers can keep up.

## One More Thing: Yolo Mode

There's a practice underneath all of this that I didn't call out in any of the project stories, but it's probably the single biggest reason I move as fast as I do: **I always run Claude with `--dangerously-skip-permissions`**.

Yeah, that flag is named the way it is for a reason. I feel safe doing it because:

1. **I run Claude in a sandboxed, virtualized dev environment.** There's nothing it can break that I can't roll back.
2. **I'm careful about what Claude can actually talk to.** I avoid most MCPs and keep firm limits on its reach. I might use Claude to *troubleshoot* a cloud architecture problem, but I'll never run in "yolo" mode while connected to prod with admin permissions.

The point isn't that permission prompts are bad — they're a sensible default. The point is that for *my* setup, they're pure friction. The blast radius is bounded by the environment, not by Claude's prompts.

## Summary

The strategies that show up across every project above:

- **Plan up-front and persist the plan.** A markdown spec in the repo (`specs/foo.md`) becomes a shared working document for me and Claude. Claude updates it as work progresses.
- **Establish patterns before you write code.** `CLAUDE.md`, project docs, and Claude's memory are how you tell the AI what "good" looks like in your codebase. Don't skip this.
- **Force a planning conversation before execution.** Make Claude ask clarifying questions before it touches code. Cheap insurance against bad assumptions.
- **Don't one-shot big refactors.** Slice the work. Each PR should be small enough to review in minutes, not hours. Faster development via AI shouldn't mean a slower, shittier day for your reviewers.
- **Stop at milestones, `/clear`, continue.** Long-running tasks benefit from fresh context.
- **Use `worktree` for parallel sessions.** Multiple Claude sessions on the same repo without cross-contamination.
- **Review in layers.** `/review` for PR-level. `/simplify` for branch-level quality and dedup. [Custom subagents](https://github.com/brianreichtcs/core-claude-commands) for domain-specific perspectives. CoPilot or another AI for a second opinion on tricky integrations.
- **Always start with a Draft PR after a one-shot.** It's the fastest way to see if the change is reviewable before you ask anyone else to review it.
- **Keep tickets in sync automatically.** A Jira skill (or Jira MCP) updates description, status, and test plan as work progresses, so QA isn't waiting on you.
- **Treat AI as a skeptical partner, not a sycophant.** The benefits of pairing only show up if you push back.
- **Bound the blast radius, then turn off the friction.** Run in a sandboxed environment, keep Claude away from prod and broad MCP access, then run with `--dangerously-skip-permissions` so prompts stop interrupting you.
