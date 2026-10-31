# 08 — Asynchronous code

**What this teaches:** how to work with a value that is not ready yet — callbacks, promises, `async`/`await`, and catching failures with `try`/`catch`.

**Why it matters:** this is the most important module in Part 1. Every database call you write next semester is asynchronous, and every one can fail. `await` and `try`/`catch` are how you write them. Nothing about Mongoose will make sense without this.

---

## The lesson is `example.js`

It runs, it prints, and its comments explain each idea in order. Read it while
you run it — that file *is* this module's teaching, not a demo of it.

```bash
node 08-async/example.js
```

## What to do in `exercise.js`

Read `fake-db.js` too — it is the pretend database the example and the
exercise both talk to. You do not edit it.

Every function here is already marked `async`, because every one has to wait
for the database. If a result comes out `undefined`, check for a missing
`await` first.

Each of the first functions has a `// TODO` comment and a line that throws an
error. Both are placeholders — delete them and write your answer in their
place. Leaving the `throw` in fails the tests even if your answer is correct.

The **last one** has no code at all. You get a spec in a comment and write the
whole function yourself, `export` included.

```bash
npm test 08
```

Repeat until it is green.

## Commit your work

**Do this now, before you close the laptop.** A module is not finished until
it is pushed.

```bash
git add 08-async/exercise.js
git commit -m "Finish module 08"
git push
```

That is the last teaching module of Part 1. Next is `checkpoint-a`.

## Reference

- [MDN — Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS)
- [MDN — Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [MDN — async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN — try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
