---
title: 'Tidy First? by Kent Beck'
description: 'A light, easy read about if, when, how, and why to tidy up your code before making behavioral changes.'
pubDate: 'Nov 29 2023'
categories: ['Book Review']
tags: ['coding', 'kent-beck', 'programming', 'refactoring', 'tidy-first', 'tidying']
---

[Tidy First?](https://amzn.to/3QZIQ59) by Kent Beck is a light, easy read about if, when, how, and why to "tidy up" your code.
The **"?"** in the title is not a typo. [Tidy First?](https://amzn.to/3QZIQ59) is not a how-to: it starts with a question it does not intend to answer. Beck provides a framework built from decades of experience in the craft that you can apply to answering that question for yourself and your own unique situation.
Make no mistake: this is not a book about refactoring.  [Beck and Martin Fowler have that covered in another book](https://amzn.to/3RmEHd2).  [Tidy First?](https://amzn.to/3QZIQ59) is a small book about small changes.  Refactoring and tidying have a lot of overlap, but Beck defines a *tidying* as the "*cute, fuzzy little refactorings that nobody could possibly hate on.*" Tidy First? is about making small structural changes that make behavioral changes easier, and how to make intelligent decisions about when you take time to do it.
The book is divided in three parts: *Tidyings*, *Managing*, and *Theory*. 
## Tidyings
Tidyings are small structural changes that make behavioral changes (features) easier later. *[Tidy First?](https://amzn.to/3QZIQ59)* defines and provides examples for 15 different types of tidyings. Some examples:
- Deleting dead code
- Adding comments to explain a complicated block of code
- Deleting explainer comments *after* you've tidied up a block of code, making the comment redundant
- Moving guard clauses to the top of a function to avoid deep nesting later
- Normalizing symmetries. In other words: pick a way of doing things, and then do it that way consistently
Kent's tidyings are pretty uncontroversial.  The controversy around tidyings exists because software is written by humans, used by humans, and represents financial value and financial risk to humans too.
## Managing
The first section of the book addressed *how* to tidy up. *Manag*ing addresses *if and when* to tidy up.
One could be forgiven for thinking that questions like "*should I tidy up?*" and "*should I tidy up now or later?*" are at best philosophical distractions or at worst *actively harmful*.  Should we as experienced, responsible professionals, even entertain the option of *not* making our code clearer and more resilient to future change?
It turns out that in practice the reality of software being in part a social construct starts chucking rocks at that glass house we were living in. Other people review our code, and may have opinions about whether one pull request should include both structural *and* behavioral changes. Your team likely has value they are expected to deliver by a certain point, and so you can only spend so much time on the tidying treadmill before you hop off and do feature work.
Beck isn't so bold as to trade in absolutes. He's spent a lifetime in the trenches, holding his nose and making trade-offs like the rest of us.  Tidy Up? doesn't give us answers. It gives us strategies for reaching sound conclusions, in our own unique situations. It helps us make decisions about:
- When to tidy: before behavior changes, after behavioral changes, later, or never
- When to stop tidying
- Whether or not to combine structural changes and behavioral changes (put tidying and feature enhancements in the same Pull Request)
- When and how to batch
Beck's advice gives you a list of questions to ask yourself to build confidence that, whether you decide to tidy now, later, or not at all, you're making the right decision for the right reasons. It gives you a framework from which you can work with other well-meaning developers to resolve disagreements about if and when to tidy, and how to organize the work.
## Theory
*Tidyings* helps you do your job as an individual contributor. It tells you *how* to tidy up. *Managing* frames tidying as something you to as part of a larger team working towards a shared vision of success and technical excellence. It helps the *collective you* make decisions on *if* and *when* to tidy up.
At this point we haven't answered a really important question: *why* tidy up?
And as it turns out, "why *tidy up*?" is a question you should be prepared to answer. If you aren't prepared to answer *why*, it's easy for the *Code People* to position themselves at odds with the *Money People*, simply because they didn't think they should have to explain why tidying actually supports revenue.
As Kent Beck says in the book,
> "When geeky imperatives clash with money imperatives, money wins. Eventually."
> 
> Kent Beck, Tidy First?
Beck tries to explain his position using financial markets and options trading as a metaphor. The metaphor flew straight over my thick skull. Fortunately I think I understand his direct arguments, because I'm an engineering manager and I'm constantly listening to the concerns of the Coders and the Money People, and helping all parties find balance.
His base points were:
- **Deliver value** **early. **Delivering working code now is worth more than delivering tidy code later. You can profit off the delivered feature. You can collect direct feedback on how to make it better. So, sometimes tidying later is the pragmatic thing to do.
- **Create optionality**. Tidying your code promotes, future change which provides options to do more, faster, in the future. Tidying is necessary to keeping the code ready to accept new features and deliver future value. It supports the money decisions.
- **Practice balance. **Go through the mental exercise of making decisions about if and when to tidy up. Tidying is low-risk and low-effort. Doing the exercise will help prepare you for higher-risk, higher-effort decisions and disagreements later.
- **Make reversible changes.** When possible, make changes that are easy to reserve. This makes experimentation lower-risk.
- **Coupling drives the cost of software.** Coupling means two units of code must change together. Reduce coupling to reduce the cost of change.  When tidying, consider reducing coupling. Be on the lookout for tidyings that will turn into rabbit holes that last hours, days or weeks, due to cascading coupling. Maybe tidy that up "after."
## Summary
*[Tidy First?](https://amzn.to/3QZIQ59)* is a book for anyone creating software but especially for those creating software with a team and organization behind it. The tidyings themselves are, in some cases, so obvious as to hardly need a paragraph, let alone a chapter.  It is not a how-to, but rather a "how-to think" kind of a book.  It provides a way to navigate the choices, conversations, and decisions we all run into while developing software. It helps us understand the "money people" and helps   us form arguments that can help the "money people" understand us.
My understanding is that [Tidy First?](https://amzn.to/3QZIQ59) is the first short book in a longer series.  I'm excited to see what Kent comes up with next.