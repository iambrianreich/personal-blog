---
title: "Using Claude Code to Automatically Fix Security Issues Discovered by Snyk"
date: 2025-07-20
categories: 
  - "security"
tags: 
  - "ai"
  - "claude-code"
coverImage: "ChatGPT-Image-Jul-20-2025-10_32_07-AM.png"
---

My team has been working on a security remediation project for the last 8 months. At the beginning of the project we asked ourselves the question: _could generative AI help solve this problem faster?_ And six months ago, the answer was _probably not._ Out experimentation with AI at that point suggested that none of the tools at the time could do a great job at working on the languages we use, in the shape much of our legacy code is in.

Today, that's changed completely. In particular, I find [Claude Code](https://www.anthropic.com/claude-code) incredibly adept at working with legacy, especially when I don't ask to much of it at one time.

I've been using it successfully to point it at a file, and ask it to remediate security issues such as [SQL injections](https://learn.snyk.io/lesson/sql-injection/?ecosystem=java) and [Command injections](https://snyk.io/blog/command-injection/). I've written [custom slash commands](https://docs.anthropic.com/en/docs/claude-code/slash-commands#custom-slash-commands) to make it consistent and repeatable. But it's still a manual process.

Today's challenge: scale it up by letting Claude Code talk to [Snyk](https://snyk.io/), our secure code auditing tool, and let it spin up asynchronous subtasks which fix specific issues, and submit pull requests.

## Talking to Snyk

I am having a heck of a time getting Claude Code to talk to Snyk in spite of the fact that:

- Snyk has a good CLI

- Snyk has preview MCP support

My issues seem to stem from the fact that we have an **organizational account, not an enterprise account,** and API (and therefore, MCP) access is limited unless we want our bill to explode. After working with Snyk the 8 months, this is my biggest gripe about it: their pricing structure and feature set for small teams... _kinda sucks_.

## The Workaround: Generate Results Offline

Fortunately our account type and bank account balance don't need to be a roadblock. I worked around the limitation by generating the results offline rather than having Claude get them via API in real-time. (This also happens to speed up future steps and reduce the number of prompts we need to get data iteratively in future steps.)

```
snyk code test --json-file-output=snyk-output.json
```

Now we have a JSON file that lists all the issues detected by Snyk.

## Getting Claude Code to Read the File and Remediate Issues

What I want Claude Code to do is, well… exactly what I'd do were I to do the work myself. Most of our security remediation work is done with a _scalpel_, not a _chainsaw_. We fix the specific lines of code that have specific issues, and don't make big changes unless they're required. The process looks like this:

- Pick the next vulnerability from the file.

- Create a branch.

- Fix the vulnerability.

- Run all quality checks against the change (linters, tests).

- Fix any quality check issues.

- Stage, commit, push.

- Submit PR

My prompt pretty much says that:

```md
The file snyk_output.json is the JSON output of running "snyk code test," so it describes security issues Snyk found in out codebase. Go learn about this file format so you understand what the issues are. Then, for each issue start a sub task which creates a new branch, fixes the issue, runs all quality and testing commands available and, once they all pass, stages, commits, pushes the work, and then opens a PR which explains what was fixed and how to test. Stop at ten remediated vulnerabilities. 
```

In other words: do what I would do, and stop at ten iterations. I build the limit into the prompt so if something goes wrong, or the automation can be improved, I want time to iterate before we go nuts with it.

## The Results

Claude did a great job. I had to approve changes frequently, but I got the PR's I expected, in more or less the shape that I want. My next steps will be:

- Refine the prompt to make Claude include the Snyk issue link in the PR.

- Refine the prompt to use Jira's `CLI` or MCP to create a matching issue.

- Refine the prompt to make Claude include the Jira issue ID in the PR.

- Refine the prompt to include a test plan in the PR description and Jira issue.

Once things things are complete, and I test a few more PR's, I'll run with `--dangerously-skip-permissions` and go full auto mode.
