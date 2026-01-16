---
title: "Dependency Injection Isn't Magic"
draft: true
---

When we program, we write bits of code that depend on other bits of code. We

call the relationship between these bits of code **\*\*dependencies\*\***, because one

unit of code depends on another to perform it's job.

In object oriented programming the "units" of code we work with are objects and

classes and before we call a method on an object with dependencies we need to

tell the object what those dependencies are.

For the purpose of this article we'll use a simple example: a database model

that stores users. A model usually requires a connection do it's database, the

connection requires some configuration. That gives a few layers of dependencies

with which to make things interesting.

**\## Wiring**

We colloquially call code that sets dependencies \`wiring\`, and we wire

dependencies in several ways.

First the dependant class needs to define it's dependencies as properties.

Let's do that first:

\`\`\`php

/\*\*

 \* The application configuration.

 \*/

class Config {

    /\*\* A key/value list of config options. \*/

    protected array $config;

}

/\*\*

 \*

class DatabaseModel {

    protected

}

\`\`\`

**\### Constructor Parameters**

One
