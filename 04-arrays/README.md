# 04 — Arrays

**What this teaches:** working through a list with `map`, `filter`, `find` and `reduce` instead of a `for` loop.

**Why it matters:** the database will hand you an array of records. Almost every route you write later does one of four things to it — reshape each item, keep some items, locate one item, or add them up — before sending a response. These four methods are those four things.

---

## The lesson is `example.js`

It runs, it prints, and its comments explain each idea in order. Read it while
you run it — that file *is* this module's teaching, not a demo of it.

```bash
node 04-arrays/example.js
```

## What to do in `exercise.js`

Five functions. Each is a single `return` statement — if you are writing more
than three lines, re-read the example.

Each of the first functions has a `// TODO` comment and a line that throws an
error. Both are placeholders — delete them and write your answer in their
place. Leaving the `throw` in fails the tests even if your answer is correct.

The **last one** has no code at all. You get a spec in a comment and write the
whole function yourself, `export` included.

```bash
npm test 04
```

Repeat until it is green.

## Commit your work

**Do this now, before you close the laptop.** A module is not finished until
it is pushed.

```bash
git add 04-arrays/exercise.js
git commit -m "Finish module 04"
git push
```

Then stop for today, and come back another day for the next module.

## Reference

- [MDN — Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN — Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN — Array.prototype.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [MDN — Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
