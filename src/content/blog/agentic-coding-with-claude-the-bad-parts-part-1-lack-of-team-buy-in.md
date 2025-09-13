---
title: 'Agentic Coding with Claude: The Bad Parts, Part 1 - Lack of Team Buy-In'
description: 'A discussion about the challenges of team buy-in when adopting AI tools for software development.'
pubDate: 'Jul 31 2025'
categories: ['AI']
tags: ['ai', 'claude', 'claude-code', 'teams']
---

Hi, I'm Brian. You may remember me from such posts as [Using Claude Code to Automatically Fix Security Issues Discovered by Snyk](/security/using-claude-code-to-automatically-fix-security-issues-discovered-by-snyk/), and [Teaching Claude Code About Test Coverage](/uncategorized/claude-code-test-coverage/). I probably sound pretty bullish about the future of AI augmented coding.
And boy howdy, am I ever. My team maintains a legacy product, which means often our daily tasks are not fun, or creative. AI tools are helping me automate away the drudgery so we can focus on the interesting, creative stuff again.
But this post isn't about that. It's the start of a discussion about the parts of using AI for software development that influencers seem not to want to talk about.
This is the first in a series of posts about problems I've encountered while using AI tools for software development, and strategies we've used to mitigate the issues.
# The Problem: Lack of Team Buy-In
If you're team has a profound disagreement about if/how to use AI, things could get messy.
**And if you put 2 or more developers in a room, there's a good chance they don't agree on this topic. **Not all developers feel the same way about using AI in software development. You've got a spectrum of opinions, some of which I'm about to poke fun at a bit.
- **The "If AI Were Jonestown, I'd Be Dead and Diabetic" Types. **These folks drank the Kool-Aid and asked for seconds*. Bro, AI is changing everything bro. Bro in 6 months software developers won't have jobs, bro. Bro the CEO just has to [describe what he wants to Replit and hope it doesn't delete the prod database, bro](https://economictimes.indiatimes.com/news/new-updates/ai-goes-rogue-replit-coding-tool-deletes-entire-company-database-creates-fake-data-for-4000-users/articleshow/122830424.cms?from=mdr).  Also why didn't you buy my NFT's two years ago, bro*?* BRO???!*
- **The Pragmatists.** We love software development. We like having jobs in software development. We like tools that make our jobs and our work better. Maybe we should learn to use this thing but figure out when it is, and isn't, the right tool for the job.
- **The AI Amish. ***AI is the devil! AI will destroy the environment, tank the economy for all but the 1% of the 1%, atrophy the skills of human developers,  erode privacy, and bring shame on you, your family, and your cow! But also it's completely useless and produces awful slop.*
**Let's face it.** When you start using AI tools, the code you submit has a scent of AI on it. That doesn't mean it's *bad code*. It means that folks familiar with your codebase sense something slightly off about it. They know it's isn't the *artisanal, hand-crafted slop* you usually submit to PR. **It's AI slop!**
If someone isn't aligned on if, when, or how to use these tools, they may look for every reason to criticize and block your code.
## Possible Solutions
I live professionally in the quality consulting space and they often say *"there are no people problems, only process problems."*
`&lt;rant>` (But *that's definitely a little ***bullshit, isn't it?** There are **totally** people problems. I mean every company has a department *specifically* for people problems, [at least for now](https://www.moveworks.com/). So don't tell me there's no such thing as people problems when it's clearly a marketable skill to be able to ruin someone professionally without shifting your facial expression.) `&lt;/rant>`
Sometimes we can solve the alignment problem by building consensus and turning skeptics into cheerleaders by showing the way, and through [crucial conversations](https://amzn.to/41i90WH). Sometimes we need to use the power of policy to draw some boundaries around what proper use of the tool is, and what level of disagreement will, or won't, be tolerated. Sometimes we solve people problems by choosing to work with different people.
I can't say I've solved this completely, but here are some strategies I've found somewhat effective.
## Demonstrate Value
Obviously we're going to start with Step 1 in the [D.E.N.N.I.S System](https://itsalwayssunny.fandom.com/wiki/The_D.E.N.N.I.S._System). Use generative AI to go faster while being better. After all: if you can't do this, *then what's the point?* Most of all **don't submit slop for review just to demonstrate velocity. **You've just fueling their narrative.
(And yes, I'm guilty as charged on not taking my own advice a few times.)
## Be Clear About PR Feedback Expectations, Be Brutal in Enforcement
If your team does peer review (PR), have a [PR Policy](https://google.github.io/eng-practices/review/reviewer/standard.html) that defines what appropriate and inappropriate feedback and change requests look like. When folks *abuse the policy* to block AI generated code they don't personally like, fix the policy. When they block AI code they don't personally like in defiance of the policy, rub it in their face.
And be honest when AI code passes your policy and is still slop. Improve your prompts to improve your code. And improve the policy where it falls flat.
## Build the Team You Want
If AI is *that important* to adopt, then build the team you need to make adoption successful. Don't suffer folks that will throw sand in the gears of the effort. Brutal, but honest.