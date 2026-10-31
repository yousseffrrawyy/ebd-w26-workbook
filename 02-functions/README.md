# 02 — Functions

**What this teaches:** writing a function from scratch, in both the forms you will meet, and passing a function to another function.

**Why it matters:** a function that takes input and returns a result is the shape of almost everything you write from here on. Later, a route handler is a function that receives a request and returns a response. The last idea in this module — handing a function to another function — is what makes module 04 possible at all.

---

## The lesson is `example.js`

It runs, it prints, and its comments explain each idea in order. Read it while
you run it — that file *is* this module's teaching, not a demo of it.

```bash
node 02-functions/example.js
```

## What to do in `exercise.js`

Five functions, in two halves.

The **first three** are started for you: delete the `// TODO` comment and the
`throw` line, and write your answer in their place.

The **last two** have no code at all. You get a spec in a comment — the name,
the parameters, what it returns, some examples — and you write the whole
function, from the word `export` to the closing brace. One has to be an arrow
function and the other a declaration, so you write both forms by hand.

If a function is missing, its tests say so by name.

```bash
npm test 02
```

Repeat until it is green.

## Commit your work

**Do this now, before you close the laptop.** A module is not finished until
it is pushed.

```bash
git add 02-functions/exercise.js
git commit -m "Finish module 02"
git push
```

Then stop for today, and come back another day for the next module.

## Reference

- [MDN — Functions](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions)
- [MDN — Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN — Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
