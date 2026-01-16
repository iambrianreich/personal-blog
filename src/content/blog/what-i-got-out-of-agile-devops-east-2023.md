---
title: "What I Got Out of Agile + DevOps East 2023"
description: "Key takeaways and insights from attending Agile + DevOps East 2023 conference."
pubDate: 2023-11-22
category: "agile-devops"
heroImage: "../../assets/images/blog/what-i-got-out-of-agile-devops-east-2023/DALL·E-2023-11-22-09.57.06-A-metaphorical-representation-of-the-fusion-of-agile-software-development-and-AI-in-a-16_9-aspect-ratio.-Central-focus-on-a-humanoid-figure-composed-o.png"
heroImageAlt: "What I Got Out of Agile + DevOps East 2023"
draft: false
---

I've never gotten the chance to attend a tech conference in person. Maybe that changes next year. This year, I got the chance to virtually attend Agile + DevOps East.

What I _wanted_ out of the conference isn't exactly what I got. As a baby engineering manager and aspiring _agilist_ I hoped to gain a better understanding of agile software development and DevOps, and take some lessons home to implement_._ What I got was a little confidence that I am already on the right path, and a _whole lot of prognostication about AI._

But it was useful.

I'll start with key take-aways that I pulled from the conference, and then move into a summary of each of the talks I attended.

## My Key Take-Away's from Agile + DevOps East 2023

At a high level, this is what I took away from Agile + DevOps East 2023

- The software industry is losing it's religion when it comes to agile.

- We still care about the foundations of agile. Those things the [manifesto](https://agilemanifesto.org/) sought to correct. But people are tired of the systems, and the rigidity. Agile is in its reformation.

- The industry has long-since moved on to DevOps and Continuous integration. Which to me looks a lot like "agility in practice."

- Software teams should be self-contained: all the expertise required to deliver working software should be on the team.

- The AI is coming! But coming to make us more efficient, not replace us.

## AI-Powered Agile and DevOps

This talk by Tariq King used, of all things, the evolution of Super Mario Bros. to demonstrate how and why software development processed have evolved to improve quality, efficiency, and flexibility as the the industry mature. Though sometimes the metaphor was a little stretched, it made the point and definitely spoke to my inner 80's kid who's still playing Mario games with his kids!

We're currently in the Agile + DevOps era. While we don't know what the shape is going to be exactly, we can be pretty certain AI is going to shape what's next.

But the attributes of current AI make it are tuned to make us efficient, not accurate. We need to use the tools ethically and intelligently to shape positive outcomes.

### Key Take-Aways

- Software models change. We're at the Agile + DevOps age right now. AI will influence what is next.

- AI will speed up all the processes in our development lifecycle including product management, requirements analysis, development, testing, and release.

- But _productivity_ cannot be measured in quantity alone. Productivity combines quantity, efficiency, and **quality**.

- We need trustworthy AI tools. Otherwise, we risk using AI to deliver garbage faster.

- To deliver quality, AI needs to be testable, controllable, observable, and explainable. These are attributes the current iteration of AI lacks.

- Don't build on assumptions. Form a hypothesis, test, and verify.

### A Minor Point of Disagreement

One of the slides in Tariq's presentation offered an example of how AI can help make development processes more efficient. A business analyst used AI to convert chat transcripts to user stories.

In my experience that example misunderstands where the valuable work is being done. The _real work_ was facilitating a conversation and asking the right questions to introspect the problem. All the AI did was crunch words into a different format. Which is, in fairness, valuable. It eliminated grunt work. It did not eliminate or even speed up the _real work_ of the analyst.

In my experience, AI has not been great at processing raw transcripts of conversations. Conversations have a pace and cadence that can be hard to parse. People speak in fragments that are clear in the moment but sound fragmented when converted to a raw transcript. There is unspoken information and context in the negative space of the conversation that tools cannot help to capture.

## How AI is Shaping High Performance DevOps Teams

Vitaly Gordon's talk was mostly about measurement. He makes that point that engineering is often the _least managed_ function in an organization (based on context I think he really meant to say _least measured_). In DevOps, we should be measuring the health and productivity of our team and product (DORA metrics are one example).

In the future, AI can help us measure and improve these metrics.

### Key Take-Aways

- Engineering is often one of the least managed and measured functions of a business.

- To reduce lead time we should reduce wait time. In other words, measure and identify blockers like slow PR approval, and figure out how to eliminate the blockers.

- Use automated testing to reduce Change Failure Rate.

- Use AI to generate more test coverage.

## DevSecOps in a Bottle: The Care and Feeding of Pocket Pipelines

Jennifer Hwe's talk focused on how her team improved security, maintainability, and delivery by bringing DevSecOps practices into an organization with a lot of complexity. Her team was charged with implementing DevSecOps, CI/CD, and containerization on a legacy product that required a focus on heightened security practices, and had to serve multiple teams that were previously working in silos, on separate networks with their own ops and security processes.

### Key Take-Aways

- Innovation was being held back by lack of DevSecOps automation. They couldn't deliver new features quickly because manual processes held them back.

- When you plan to implement DevOps or any Dev\*Ops variant, you'll likely cut across various parts of the organization with different cultures, and different opinions on how things should be done. Be prepared to identify and address both technical _and cultural challenges._

- Taka a phased approach.

- Change is slow. In an organization as large as Northrop Grunman, their transition was measured in years.

## Lead Without Blame

This talk by Tricia Broderick felt like the philosophical sibling of Sarah Drasner's Engineering Management for the Rest of Us. It's all about the fact that organizations often hire up from the developer pool into management, but does not prepare former individual contributors for their new role. This talk felt like the missing manual.

### Key Take-Aways

- As a technical manager don't write code because you're good at it, or because it's your happy place. That's not your job anymore.

- "Sitting together" doesn't make you a team. That just makes you a _group_. Health collaboration makes you a team.

- Individuals can _win_ while whole teams and projects _fail_. That's still a failuree.

- Transition yourself out of the "hub" of operations. You're not that important. You'll bottleneck productivity and team growth if you stay there too long.

- Don't focus so much on individual accountability.

- Focus on building team members who are responsible, motivated learners.

- Conflict good. Drama bad.

- Further Reading: [Lead Without Blame](https://amzn.to/3sOP3J5)

## The Potential of AI and Automated Testing, Conquer Test Script Challenges with AI

This talk by Jason Manning, Nyran Moodie, and Orane Findley was more of a high-level, open discussion about how AI has and will continue to change software testing. They discussed some of the pitfalls we need to be aware of as we build more reliance on AI to build tests and perform automated testing.

### Key Take-Aways

- AI can help you get data-driven metrics about your product (but didn't really dive into "how")

- It may be possible for AI to scan web pages and generate tests for you (again, "how")

- We need to consider risks to privacy and security as we plug AI into our products, our tests, and our intellectual property

- Consider how to use AI without sharing sensitive data or IP

- At this point, a human needs to be involved in order to ensure the results of AI-driven processes are accurate and secure.

## We Got Our Monolith to Move at Light Speed

This talk by Corry Stanley and Marianna Chasnik hit a bit close to home for me. It was all about how they moved a legacy monolith at Discover Financial from a "few releases a year" to a two-week release cycle. Sounds a lot like the journey I've been on. Discover succeeded by bringing Ops skills into the product team, using modern tools, infrastructure, and techniques to drive productivity, release faster, and reduce defects.

### Key Take-Aways

- The product team needs DevOps skills built-in

- Train your whole team in DevOps

- DORA metrics are lagging indicators of health

- Treat Pre-production (staging and test environment) failures as production failures. Act accordingly, and act fast.

- **Avoid broken baselines.** Use tools and processes line standardized branching models, automated deploys, automated quality tools, automated testing, and branch protection rules to shift quality and validation as early in the process as possible.

## The Art of Getting Less to be Faster, Smoother, and Better - Embracing the Agile Principle of Simplicity

Robert Clawson's talk was near and dear to me as the head of a project that suffers from a legacy of organic, unnecessary complexity. Robert advocated for achieving simplicity and productivity by maximizing the _work not done_.

### Key Take-Aways

- People and time are finite.

- Our incentive structures rarely reward subtraction, even though subtraction can be an incredibly intellectual, creative, and valuable endeavor.

- Features "not worked on" are valuable. It means you saved your resources, or chose to use them to do something with more value.

- Sometimes removing something is the most valuable thing you can do. Clawon's example was the [K-brick](https://lemelson.mit.edu/resources/anna-keichline#:~:text=Keichline%20received%20seven%20patents%20over,used%20for%20hollow%20wall%20construction.) which optimized cost and materials without sacrificing structural integrity.

- **Look for opportunities for reuse.** What do you have? How can you reuse or further capitalize on it without adding complexity?

- Further reading: [Subtract, The Untapped Science of Less](https://amzn.to/40XkeP1)

## AI and the Future of Coding

Christopher Harrison from GitHub gave a refreshingly down-to-Earth talk about the current and future state of AI.

Generative AI is an enhancement to software development that can make us faster, but AI cannnot write full applications, write perfect code, or replace developers.

In experienced developers risk shipping bad code by over-relying on AI and not understanding the results it generates.

Experienced developers driving AI can use it to work faster, reduce the pain and time engaged in unpleasant tasks.

### Key Take-Aways

- Automated code review is coming. But don't forget about other automated tools like GitHub Actions to automatically check security, code quality, etc.

- AI can help with unpleasant tasks like writing unit tests.

- AI can help with uncommon syntax, like figuring out regular expressions.

- AI can help you rapid prototype and experiment.

- But AI can't help you write good code if you don't already know how to write good code.
