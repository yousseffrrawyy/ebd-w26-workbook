# 01 — Basics and conditions

**What this teaches:** storing values in variables, the three types you will use most, building strings out of data, and testing a value to decide what happens next.

**Why it matters:** this is the raw material. Every line you write for the rest of the course is made of these — a price is a number, a label is a string built from other values, and "does this product exist?" is a comparison that produces `true` or `false`.

---

## The lesson is `example.js`

It runs, it prints, and its comments explain each idea in order. Read it while
you run it — that file *is* this module's teaching, not a demo of it.

```bash
node 01-basics/example.js
```

## What to do in `exercise.js`

You are filling in the **bodies** of five functions. The line that declares
each one is written for you, so you do not need that syntax yet — module 02
covers it. All you need is `return`, which hands a value back out.

`console.log` prints. `return` hands a value back. They are not the same, and
printing instead of returning fails every test here.

Delete the `// TODO` comment and the `throw` line in each, and write your
answer in their place.

```bash
npm test 01
```

Repeat until it is green.

## Commit your work

**Do this now, before you close the laptop.** A module is not finished until
it is pushed.

```bash
git add 01-basics/exercise.js
git commit -m "Finish module 01"
git push
```

Then stop for today, and come back another day for the next module.

## Reference

- [MDN — Variables](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables)
- [MDN — Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [MDN — Making decisions in your code](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals)
- [MDN — Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators)
