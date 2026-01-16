---
title: "Agentic Coding with Claude: The Bad Parts (Part 2)"
draft: true
---

# 2\. Non-Deterministic Results

[Generative AI is non-deterministic](https://sombrainc.com/blog/deterministic-vs-generative-ai#:~:text=Capabilities,for%20evolving%20tasks%20or%20environments.). That means that given the same inputs, a generative AI model may return different outputs. Don't ask me about the computer science behind it because I'm a humble web monkey and [Meta isn't offering me kajillions for my talents.](https://www.cnn.com/2025/07/25/tech/meta-ai-superintelligence-team-who-its-hiring) But my understanding is that generative AI's use randomness, probability, and applying _temperatures_ to possible answers before selecting one in such a way that it mimics a level of creativity.

_Depending on your use case this can be considered a feature, not a bug._

But for instance, if you want to use Claude Code as a refactoring tool, the fact that the model is _non-deterministic_ isn't ideal. Refactoring tools understand syntax, and how to reliably mutate syntactical patterns into other syntactical patterns.

Meanwhile, generative AI's are [planet-eating word calculators](https://news.mit.edu/2025/explained-generative-ai-environmental-impact-0117). They don't understand syntax. They don't use programmatic algorithms to mutate one syntax into another. _They guess the next token._

**And they're really goddamned good at it**. So they often feel quite reliable. Until they don't. This happens to me constantly with Claude Code.

## Possible Solutions

1. **Ask the AI how to do the thing, then do it manually.** Generative AI is really good at understanding how to answer your programming questions, especially when you're asking about a language or framework that has great documentation and a vibrant online community. Asking it "how" to apply some refactor, then doing it yourself, is a great way to start.

3. **Plan first. Then do.** Claude Code (and I'm guessing all the copycats) has a [plan mode](https://www.youtube.com/watch?v=7LWl3EbcFTc). Plan mode is essentially a read-only mode that can do research tasks, then come up with a plan of action which you can either do manually, or ask the agent to execute. I like to use plan mode to come up with a plan of attack and write the plan to a "spec" or "task list" file. Then use agents in separate context windows to bite off each task.

5. **Prompt refinement.** A hard-won lesson for me is that using generative AI for complex programming tasks rarely looks looks like a one-off shot-gunned prompt doing exactly what I expect. I usually have to choose better words, add rules about how to handle some corner cases, etc. But be on the lookout: if you're too focused on making the tool do what you want and not on the end results, you might end up spending more time refining a prompt to do a thing than you would _just doing the damned thing._

7. **Maybe just use different tools**. If there is a better tool for the job, consider using that instead of trying to shoehorn your problem through AI. Specifically for refactoring, [Jetbrains](https://www.jetbrains.com/) IDE's and VSCode extensions like [PHP Intelliphense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client) provide refactoring tools that get me pretty far. They actually understand the language, how to break your code into syntax trees, and mutate them into new, _different but functionally equivalent_ syntax trees.

# 3\. Spending Time Refining Prompts vs. Refining Code

Sometimes I'm so determined to solve a problem using Claude Code that I revert to my old self. After all, _why spend 5 hours doing a task that I can spend 15 hours automati_ng?

I'm so determined to craft the perfect repeatable prompt that I'll spend more time prompting, failing, refining, only to realize hours in that Claude has completely lost the plot, I give up, and go _just do the damn thing_ the way I knew to do it in the first place.

## Possible Solutions

1. **Go do the thing.** It's possible you don't understand what you want to do well enough to describe it to somebody else, including a digital _somebody else_. Sometimes just hacking on the problem teaches you enough to clarify your approach through Claude.

3. **Clear your context and start over.** Yes, sometime `/cl`ear is really the solution. If Claude starts to go off script or feel like it's "losing the plot," often it's easier to start over with a new context window.

5. **Start Over in Planning Mode.** Use that `[tab][tab]` to go into planning mode and tell Claude to _form a plan_ do what it is you set out to accomplish rather than telling it directly to do stuff. If you've spent a bunch of time refining yourself into _prompt jail_ it's possible that you've learned enough about the shape of the problem to describe it more accurately in a second pass, with a clear context.

# 4\. Am I Seriously Playing Planning Poker with Claude?

Planning poker just might be a better strategy with generative AI than it is with people. Because I find that it does a better job when I manage to right-size tickets to it's context window.

Sometimes you can shotgun a complex task to Claude. If it gets it right on the first try, that's a really big win, isn't it? But if it doesn't, what then? Once Claude generates a bunch of code that isn't quite what you expected, I find that almost always _just gets worse_ as I try to refine it into the shape I want.

But it I throw it out, start over in a fresh context with Planning Mode, and take the time to describe the problem in as much detail as possible, _then as Claude to form a plan_,

One of the tricks to getting good results out of Claude Code and other generative AI tools is right-sizing your tasks. When Claude gets close to the end of it's context window, it starts to lose the plot.

When Claude fails quickly, I go into "_I'm not angry, I'm just disappointed_" mode. But when Claude does exactly what I want for 10 iterations, then goes completely off-script going forward, that's when I wish the AI was something physical.... so I could punt it across the office.

I get better results when I make my first prompt in Planning Mode, and I make it a "big bang" prompt that tells Claude to "use deep thinking" or "ultrathink" to form a plan to do the thing, and write the plan to a spec file as a markdown document. I commit the plan. I throw out the context window, and start a fresh session asking Claude to pickup and execute the next task in the plan.
