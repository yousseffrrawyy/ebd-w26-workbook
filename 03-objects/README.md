# 03 — Objects

**What this teaches:** grouping related values into an object, reading them back out, pulling several out at once, and copying an object with one value changed.

**Why it matters:** every record you touch for the rest of this course is an object — a product, a student, a request. Pulling values out of one is something you will write dozens of times, and it usually looks exactly like the destructuring here: `const { id } = req.params`.

---

## The lesson is `example.js`

It runs, it prints, and its comments explain each idea in order. Read it while
you run it — that file *is* this module's teaching, not a demo of it.

```bash
node 03-objects/example.js
```

## What to do in `exercise.js`

Fill in the five functions. Delete the `// TODO` comment and the `throw`
line in each, and write your answer in their place.

```bash
npm test 03
```

Repeat until it is green.

## Commit your work

**Do this now, before you close the laptop.** A module is not finished until
it is pushed.

```bash
git add 03-objects/exercise.js
git commit -m "Finish module 03"
git push
```

Then stop for today, and come back another day for the next module.

## Reference

- [MDN — Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
- [MDN — Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
- [MDN — Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
