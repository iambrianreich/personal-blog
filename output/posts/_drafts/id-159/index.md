---
title: "Generators Have My Engine Revving"
draft: true
---

This post is a love letter to generators. Specifically in PHP.

I work in a PHP shop. To be more specific, I work in a PHP and Perl shop, that's constantly working to factor away the Perl. I'll note that if you're coming to this article as a PHP hater, either you haven't bothered to learn about the improvements to the language since version 5, or you haven't done much work in Perl. Perl is either far less forgiving or _far more_, depending on how you want to think about it.

The Perl scripts we replace were written in a different era of web development. Our predecessors didn't have nice things, like message queues, or apparently any concept of security, or code cleanliness. The good news is that, in spite of Perl's seemingly _intentional_ obtuseness, the code isn't hard to read. It's procedural, and pretty formulaic. Get a dataset from the database. Iterate over that dataset. Do some unit of work on each entry.

It's code that's easy to translate over to PHP.

Recently, I've found myself translating code for long-running processes that operates on large datasets. For example, get a list of every customer, for each customer, get a list of files in their account, then add each file to a ZIP backup for the customer.

A direct rewrite is easy, and will be faster simply by running the same steps in modern PHP instead of Perl. But there's room to do better.

So, let's talk about generators.

Simply put, generators are functions that return iterators. OK, that's _not so simply put_ if you don't already understand iterators.
