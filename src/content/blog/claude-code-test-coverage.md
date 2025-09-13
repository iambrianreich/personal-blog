---
title: 'Teaching Claude Code About Test Coverage'
description: 'How to teach Claude Code about test coverage practices and improve AI-generated code quality through proper context.'
pubDate: 'Jul 18 2025'
categories: ['Testing']
tags: ['ai', 'claude-code', 'testing', 'coverage']
---

If you want AI tools to give you the results you want, you have an obligation to raise them right. Tools like Claude code aren't so different from human developers: you need to teach them about your project before setting them loose.
Before you do much else, you run `/init`, which tells Claude Code to go learn about your codebase, and start building a context file, `CLAUDE.md`.
In my experience, the more detail I add to `CLAUDE.md`, the better Claude becomes at everything.
# Using Claude to Improve Unit Test Coverage
Today I was working on a task that involved refactoring code from Perl to PHP. Our nasty old Perl code has no tests, so as we port it to PHP, we ensure the new code has the test coverage the old code lacked.
Claude Code is pretty great at writing tests in PHPUnit, but sometimes it needs some help understanding how to assess coverage. So today I rompted Claude to:
> `Think about how you can assess unit test code coverage in this project and write instructions on how to do it`.
This was probably a waste of tokens since I could have given Claude this information directly, but sometimes it's useful to see if Claude arrives at a competing solution.
As expected, Claude found that you can run XDebug in coverage mode to generate a coverage report:
`XDEBUG_MODE=coverage ./vendor/bin/phpunit --coverage-text`
# Adding To Claude.md
Now that Claude learned how to check coverage in my project, I wanted it to remember and use the answer.  I told Claude
> Use the information you just learned about how to check code coverage and add it to Claude.md. When you write unit tests, I want you to assess the coverage of your tests and improve tests until you achieve at least 90% coverage.
Claude updated `CLAUDE.md` with some additional context. In it's section on validation commands it added:
`Generate coverage report to verify quality
XDEBUG_MODE=coverage vendor/bin/phpunit --coverage-text`
It also added new instructions to it's instructions on testing workflow:
`### Checklist for Complete Testing Workflow
- &#91; ] **Analyze existing patterns** in similar test files
- &#91; ] **Create comprehensive test coverage** for all methods and scenarios
- &#91; ] **Extract magic strings** to constants in both source and test files
- &#91; ] **Organize constants alphabetically** with descriptive names
- &#91; ] **Create default test fixtures** for consistent setup
- &#91; ] **Mock all dependencies** properly with verified method calls
- &#91; ] **Test all error cases** and edge conditions
- &#91; ] **Generate coverage reports** to verify 100% method/line coverage
- &#91; ] **Fix code style** with phpcbf before committing
- &#91; ] **Create atomic commits** with descriptive messages
- &#91; ] **Validate final implementation** with full test run
This workflow ensures high-quality, maintainable code with comprehensive test coverage and excellent development practices.`
Now, when I ask Claude to generate code, it not only knows it should also generate tests, it knows to use PHPUnit's coverage mode to check coverage, and coverage that it previously missed.