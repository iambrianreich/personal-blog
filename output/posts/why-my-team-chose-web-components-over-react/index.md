---
title: "Why My Team Chose Web Components Over React"
date: 2022-11-08
categories: 
  - "frontend"
tags: 
  - "react"
  - "web-components"
---

My team recently backed out of a decision to adopt [React](https://reactjs.org/) as the foundation of a product rewrite and chose [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) instead. This post explains why.

## TL;DR

To sum up the situation: my organization had decided that we would do a rewrite of our application. Think Basecamp's "[The Big Rewrite](https://signalvnoise.com/posts/3856-the-big-rewrite-revisited)." Only without Basecamp's resources.

While words of support for a rewrite were vocalized, the reality that the organization couldn't live with the feature freeze required to write a new app set in. And so, we change strategies to focus on iterating what we have. But that required us to reconsider key technical decisions that supported the rewrite. Should we still adopt React?

Grafting React onto our legacy codebase is infeasible. Reaching our goals of modernizing our UI and modularizing our code required us to limit consideration to solutions we could use _today,_ with our existing codebase. The obvious choice was Web Components.

## Why We Decided Not to Adopt React

I'd like to tell you we're adopting Web Components because we did some deep, data-driven research that supports the decision. **We didn't.**

I'd like to say the Web Component API is so _mature_ and so _universally adored_ that it has knocked React from it's throne .**It's not, and it hasn't, and it probably won't**.

More than anything else, I'd like to tell you we made a brilliant decision and it was my expert leadership that got us there. **It did not, and there's a nonzero chance I'm an idiot** and you shouldn't even be reading this. You've been warned!

In reality once we reached consensus that a rewrite wasn't realistic, there was very little decision making to be done. Here's why.

## Our Current Technical Realities

Our existing application is _**Vanilla JavaScript**_ written and bundled in in a specific order such that dependencies are resolved by order of parsing the code, not any modern concepts like imports, modules, etc.

We could overcome that with a few weeks of refactoring. But then we have to contend with the way the frontend code was originally written, which is to say setup camp in the innermost circle of _global scope hell_.

Modern tooling, bundlers, frameworks, have expectations of code being well-organized. Ours is not. And as previously discussed, we can't spend a year or so rewriting it from scratch.

Given the shape of our codebase, attempting to graft on React would be difficult and painful. We would have to fundamentally reshape our application to conform to React's expectations. And since we've already concluded that we don't have the time or resources for that, React adoption was a non-starter.

Given this new shared reality, what could we do?

## Start By Defining the Problem

Let's face it: developers like React, and it can be easy to have a preferred solution in-hand and try to work backwards from there. In this instance we caught ourselves in the act and reacted accordingly.

We had to start over by redefining our problems and limitations.

### **What Problem Are We Trying To Solve?**

- We want to adopt a [Component Driven Development](https://www.componentdriven.org/) philosophy and ship modular, reusable UI components.

- We want to build accessible, attractive, consistent, responsive, and reusable components from which we can compose complex views in our application in the future.

- Any solution to those problems must "play nice" with our existing codebase so we can introduce our components as evolution, not a single revolutionary rewrite.

## Web Components Solve Our Problem

Web Components are not popular. They're not easy. And they certainly don't _solve all the problems._ But they have a lot going for them which make them the perfect solution for us:

- **They're here.** Web components are a native web API that is now well supported in all major browsers.

- **They're stable.** They're a native web API, which means we can start using them today without worrying about _npm dependency hell_ making life problematic for us in the future.

- **We can use them today.** Because they are a native API, and because once you register a web component you simply use it as an HTML tag, we can introduce web components to our codebase today without any major rewrites, refactoring, or changes to our build process.

- **Web Components Help Write Modular Frontend Code.** Component is right there in the name. Writing components that implement a generic user interface feature will support our desire to write modular code that separates the view from storage and logic going forward.

- **They Don't Preclude Using a Framework in the Future**. Major frameworks like Angular, Vue, and React are all figuring out how to coexist and support web components. If we reach a point where we can adopt a framework in the future, we don't have to throw away our work.
