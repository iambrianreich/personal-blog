---
title: "Exception Handling in JavaScript Made Easy"
description: "A practical guide to exception handling in JavaScript, including try-catch patterns, custom errors, and best practices."
pubDate: 2022-11-22
category: "frontend"
draft: false
---

Welcome to the wild world of Exception Handling, where programmers write code that _tries_ to do the right thing and _catches_ itself in the act of doing something else. That's going to make sense in a few minutes. **Trust me.**

## 1\. What is Exception Handling?

Exception handling can be a daunting subject, especially to inexperienced developers. Since I don't know where you're at in your journey let's forget about programming for just a minute. In the _English language_, what does the word _exception_ mean?

> Something excepted; an instance or case not conforming to the general rule.
> 
> ([Exception Definition & Meaning, Dictionary.com](https://www.dictionary.com/browse/excepted))

So that means an exception is _something out of the ordinary._ On the negative side of the spectrum, that kind of sounds like an **error**, doesn't it?

We can start from a simple, high-level premise: an _Exception_ is just a _kind_ of error, and _exception handling_ is how we deal with them.

## 2\. Exception Handling with the The Try...Catch Statements

Most programming languages that support exception handling do so with a very similar structure: The [_try_..._catch_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) statements, and JavaScript is no different.

```js
try {
    // Do some work
} catch (error) {
    // Handle errors
}
```

You'll notice there are two code blocks: a _try_ block and a _catch_ block. One cannot exist without the other: a _try { ... }_ must always be followed by a _catch { ... }._ (**Note:** th_ough this is the most common pattern, technically try can also be followed by finally, but we'll get to that.)_

### The Try Block

The `try { ... }` block _tries_ to run the code within it. If an exception is thrown during execution, the code that follows is not executed.

(Note the use of the verb **throw.** When an exception occurs, we say the code _threw_ an exception. You may also hear the verb _raising an exception_ too. _Throwing_ an exception and _raising_ an exception mean the same thing.)

There is very little more to say about the `try` block:

- The keyword `try` followed by a bracketed block of code.

- The code in the block _tries_ to execute. If an exception is thrown, the code after the exception is thrown is not executed.

- Must be followed by a `catch { _... }_` block, a `finally { ... }` block, or both.

### The Catch Block

A [catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block handles Exceptions thrown from the `try` block that precedes it. It begins with the `catch` keyword, optionally followed by `(error)`, where _error_ defines the name of a variable that will reference the Exception, followed by a block `{ ... }` containing the exception handling code.

There are a few things to know about the _catch_ statement:

- **It has two forms.** You can simply write `catch { ... }` if you don't care about the error's details in order to handle it, or you can write `catch (error) { ... }` where _error_ is a variable that references the caught Exception.

- **Don't catch Exceptions you can't handle.** You should only use `try...catch` to catch errors you can reasonably handle. If you can't handle the error, then don't catch it. _Let it "bubble up."_

- **Write Tight, Limited `try...catch` blocks.** You should only wrap code in `try...catch` for which you are prepared to catch and handle Exceptions. Avoid wrapping entire method bodies in a single `try...catch`. If you do, you risk handling/squashing exceptions you don't actually want to catch.

- **Re-throw Exceptions you don't know how to handle.** If multiple kinds of Exceptions are possible, inspect the Exception by type (using `instanceof`), or by name (`error.name === 'DomainError'`).

Now that we have try and catch, we know just enough syntax to implement exception handling in our code. Here's a simple example:

```js
/**
 * The following code will throw and catch a RangeError by trying to create an Array with an
 * invalid range.
 */
try {
    // Try to create a new array with an invalid length.
    const array = new Array(-1);
} catch (error) {
    // Check for the kind of error we want to handle.
    if (error instanceof RangeError) {
        // Handle the error by reporting a more useful error.
        console.error('An array cannot have a length less than zero.');
    } else {
        // Rethrow any errors we don't actually know how to handle.
        throw error;
    }
}
```

### The Finally Block

A [finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block provides code that runs after the try and catch phases, regardless of whether an error happened or not. It can be used to perform steps that should always happen regardless of the success of the code in the try or whether an error was throw or caught.

A practical use case is in a graphical application when you want to show a progress indicator or _spinner_ while a process runs, and hide the spinner when it completes regardless of success or failure:

```js
/**
 * The following code shows a spinner, performs a long-running calculation, and then hides
 * the spinner when the process completed regardless of whether or not an Exception was
 * thrown.
 */

// Show the spinner. Assume this function is defined.
showSpinner();

try {
    // Assume generateReport() exists, does a bunch of complicated work, and could
    // throw an Exception if something goes wrong.
    generateReport();
} catch(error) {
    // ... handle the exception  ...
} finally {
    // Hide the spinner after try and catch complete.
    hideSpinner();
}
    
```

**Note:** While less relevant in front-end JavaScript code, `finally` is also very useful for closing resources when a process completes, regardless of success. Think open file pointers, database connections, etc.

## 3\. The Error Class

In JavaScript the [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) class is the base for all runtime errors and one of the fundemental building blocks of exception handling. There are a number of sub types of `Error` including `EvalError`, `RangeError`, `ReferenceError`, and `SyntaxError`.

You can also extend `Error` to create our own custom error types. For example, we might use `DomainError` when we want to throw an Exception caused by a violation of our domain logic. Extending `Error` looks like this:

```js
/**
 * A DomainError represents an error caused by a fault in business logic.
 */
class DomainError extends Error {
    /**
     * Creates a new DomainError.
     *
     * @param {string} message The error message.
     * @param {object|null} options Options that specify the cause.
     */
    constructor(message, options) {
        // Call the base Error class constructor
        super(message, options);

        // Set the name of our Error type
        this.name = 'DomainError';
    }
}
```

The Error class has several standard properties, set via it's constructor:

- `message` \- The message that describes why the error occurred.

- `options` \- An optional object which can specify the _cause_ or the error. (You won't use this much.)

Depending on the browser `Error` also supports a bunch of nonstandard properties, which you can learn about [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error#browser_compatibility).

Now you know how to create an exception. Creating an Exception doesn't do anything. You need to throw it. To `throw` it, use the throw keyword:

```
const age = parseInt('userInput', 10);

if (isNaN(age)) {
    throw new DomainException('age was not a number, which violates our business rules');
}
```

**Throwing an exception breaks the flow of execution**. Any code that follows the throw statement will not be executed. The exception "bubbles up" through the call stack to the closest `catch { ... }` block, which will handle the Exception. If the exception isn't caught, the JavaScript engine will handle it by sending the error to the console.

One other important caveat of JavaScript: you can throw _literally anything_. It doesn't have to be an `Error`. But I don't recommend it!

```js
/**
 * In the code below we get user input and convert it to a number. If the user input is not
 * a valid number we throw a string as an error.
 */

try {
    // Assume <input id="age"/> exists and we get it's value as a string.
    const ageInput = document.querySelector('#age').value;

    // Parse the input into a base-10 number
    const age = parseInt(ageInput, 10);
    
    // Use isNaN() to check if the user entered an invalid number.
    if (isNaN(age)) {
        // Look what we're doing: throwing a string instead of an Error. Very legal and very cool
        throw `Some lunatic thinks ${ageInput} is a valid age. Enter a number, you goofball.`;
    }
catch (error) {
    // When an Exception is caught, log an message that tells us the type. It should be "string"
    console.log('An error occurred and it's type was ' + (typeof error));
}
```

Let's review:

- `Error` is the base type for all errors in JavaScript.

- Several subclasses of `Error` already exist in JavaScript including `EvalError`, `RangeError`, `ReferenceError`, and `SyntaxError`.

- We can extend `Error` to create our own custom error types.

- `Error` has two properties: `message` and `options`. Both are optional.

- We can throw _anything_ in JavaScript. But we _should_ throw only `Error` and `Error` subtypes.

## 4\. When Do Exceptions Get Thrown?

Exceptions get thrown under the following conditions:

- You throw an Exception from your own Userland code, using the `throw` statement.

- JavaScript throws an exception from an internal function or as a result of some condition your Userland code caused, such as a `TypeError`, `SyntaxError`, `RangeError`, etc.

All errors in JavaScript are thrown as exceptions. When you see an error reported in your browser console, that's an exception being thrown and eventually being handled by the browser. For example, any of the following simple JavaScript statements throw exceptions that would get reported in the browser console:

```js
// Throws a SyntaxError
JSON.parse('this is invalid json');

// Throws a TypeError because book.metadata is not defined.
const book = { title: 'The Catcher in the Rye' };
const id = book.metadata.id;
```

If you've seen an error reported in your console, you've already seen Exceptions in action. See? You're further along than you realized!

## 6\. Exceptions in Asynchronous Code (Promises)

The `try...catch...finalize` structure is synchronous by nature. This means that `try...catch` cannot catch and handle an Exception thrown by an asynchronous function calls such `fetch()`. How would you handle a failure in when calling an API endpoint?

JavaScript has you covered. Asynchronous functions return [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), and Promises support exceptions via the [Promise.prototype.catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) and [Promise.prototype.finally()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) methods.

```js
/**
 * In this hypothetical code block, we first display a spinner to show the application is
 * working.
 *
 * We load a user record from a REST API. If the request fails we throw an exception
 * which we'll catch later. If the request succeeds we convert the body to JSON. If conversion
 * fails it will throw an Exception that we'll catch later. If conversion to JSON succeeds, we 
 * send the user record to hypothetical controller component to handle it.
 *
 * If the request fails or returns invalid JSON, the thrown Exception is caught, logged, and an
 * error is displayed to the user.
 *
 * After the request completes either success or failure are handled, we hide the spinner via
 * finally.
 */

// Show the spinner
showSpinner();

// Make REST API request
fetch(`/user/${id}`)
    .then((response) => {
        // If we don't get an OK response, throw an Exception. fetch does not do this on it's own
        if (! response.ok) {
            throw new Error('API request failed.');
        }
 
        // Convert body to JSON. Will throw an Exception if not valid JSON
        return response.json();
    })
    .then(user => {
        // Set the user, which will update the view.
        this.getController().setUser(user);
    })
    .catch(error => {
        // Log the failure
        this.getLogger().error(error);

        // Show an error to the user.
        this.getController().showError({
            title: 'API Request Failed',
            message: 'Failed to load data from the backend'   
    })
    .finally(() => {
        // Turn off the spinner.
        hideSpinner()
    });
```

## Summary

Congratulations. Now you know how to catch, handle, and throw Exceptions in JavaScript code. You know how to handle Exceptions in asynchronous code via the catch and finally functions built into Promises. In a future article, I'll be teaching you how Exceptions work in PHP, were things get even more interesting.
