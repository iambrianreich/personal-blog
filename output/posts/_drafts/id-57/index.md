---
title: "Unit Testing WordPress Plugins"
draft: true
---

Unit testing WordPress plugins ought to be part of your process. But if you're reading this, there's a good chance it's not, and I don't blame you. It's hard to setup and can be hard to figure out what and _how_ do test once you run the gauntlet and get the setup correct.

This document aims to bridge the gap and help you get started unit testing your WordPress plugins using WP-CLI and PHPUnit.

## What is Unit Testing?

Unit testing is a software testing technique where individual units or components of a software application are tested in isolation from the rest of the system. It involves writing and running automated test cases that validate the functionality of these units and ensure that they meet the desired specifications. Unit testing helps to identify bugs and errors early in the development process, which makes it easier and less expensive to fix them. By testing individual units separately, developers can also ensure that changes made to one unit do not break the functionality of other units in the system.

## Why Should You Unit Test Your Plugins

The benefits of unit testing are well documented. So I'll [link](https://www.codemag.com/Article/1901071/10-Reasons-Why-Unit-Testing-Matters), not repeat. But it may be less obvious why you should unit test your WordPress plugin code. But there are additional arguments for unit testing your WordPress plugin code.

WordPress is the CMS everyone _loves to hate_ on. It's the most popular content management system in existence. Yet it continues to have a reputation for being poorly written, insecure, and hard to maintain. It's the worst CMS. _Except for all the other one's,_ I guess.

As a WordPress plugin developer, it's my opinion that you should unit test your plugins for the following reasons:

1. To ship higher quality code with fewer defects.

3. To simplify validation of your plugin code against new (and old) versions of WordPress.

5. To speed up your plugin development and testing cycles.

7. To do your part to help reduce the WordPress ecosystem's "code rot" and improve it's reputation.

## Why Unit Testing Your Plugins Takes Special Effort

WordPress plugins take special effort to test because WordPress was not engineered to be testable. That's a spicy take! But hear me out.

From the perspective of a "backend" developer WordPress is a functional API with a number of classes bolted on for particular purposes. In order to change the behavior of WordPress by writing plugins, our plugins integrate with WordPress by calling it's functional API to register "hook" and "filter" functions. When WordPress performs an action we've hooked into, it'll execute our callback functions.

On top of that, it all depends on a MySQL (compatible) database being available while WordPress--and-your plugin code--execute.

One of the goals of unit testing is validation of small units of software _in isolation_. But because WordPress is a collection of functions (not classes and interfaces), and there is no Separation of Concerns in WordPress' codebase and API's that would allow us to isolating your code from WordPress for testing-purposes is a non-starter.

If you're going to unit test your code, your code needs a fully-functioning WordPress available.

## What About WP\_Mock?

There are efforts, like WP\_Mock, that attempt to "mock" WordPress in order to make it possible to unit test your plugin code without WordPress being available. They do this by overriding WordPress's build-in functions with mocks that return expected values. This means you _can_ unit test your plugin in isolation.

And that means your unit tests aren't actually testing if your code works with WordPress, today, or tomorrow. It's this dude's opinion that this makes your tests less valuable.
