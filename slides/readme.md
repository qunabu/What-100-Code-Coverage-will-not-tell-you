# 100% Code Coverage

## TypeScript. Theory and examples

> What 100% CC metric will never tell you ...

Mateusz Wojczal 2022

---

### Good presentation starts with quote

> EN. When a measure becomes a target, it ceases to be a good measure

> PL. Każda obserwowana statystycznie zależność ma skłonność do zawodzenia, w momencie w którym zaczyna być wykorzystywana do celów regulacyjnych

— Goodhart’s Law

---

# Happy Path

In the context of software or information modeling, a **happy path** (sometimes called happy flow) is a default scenario featuring no exceptional or error conditions.

Solution - Write tests for Unhappy path

---

# Coverage reports are easy to trick

Possible solution **Defensive programming** - a form of defensive design intended to develop programs that are capable of detecting potential security abnormalities and make predetermined responses. It ensures the continuing function of a piece of software under unforeseen circumstances.

---

# Edge cases

An edge case is a problem or situation that occurs only at an extreme (maximum or minimum) operating parameter.

Write tests for Edge Cases. Run run application in extreme condition, eg stress testing.

---

## 100% coverage doesn't mean everything is working as it should

Solution. Acceptance testing, a testing technique performed to determine whether or not the software system has met the requirement specifications.

Example. BDD (Behavior-driven development), Gherkin language, e2e (end-to-end) tests

---

# Tests can be misleading

This is especially true if you write tests after you've already written the code (Reversed TDD). You might find a method that hasn't been tested properly, so you write a test for it.

Solution - TDD (Test-driven development)

---

# Code smells

— What? How can code "smell"??

— Well it doesn't have a nose... but it definitely can stink!

Solution - Linters like eslint, sonarqube, codeclimate, etc...

---

# Security Issues

Solution - `SAST` (Static application security testing), and `DAST` (Dynamic application security testing) tools like OWASP ZAP Fuzz might help

# Questions ?

- https://www.linkedin.com/in/mateusz-wojczal/
- https://mateusz.wojczal.com/
- https://github.com/qunabu/What-100-Code-Coverage-will-not-tell-you
