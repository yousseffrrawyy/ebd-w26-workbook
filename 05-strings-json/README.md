# 05 — Strings and JSON

**What this teaches:** the string methods you will actually use, turning objects into text and back again, and what counts as "empty" in JavaScript.

**Why it matters:** this is the module that explains what a request body *is*. Data does not travel between a browser and a server as an object — it travels as **text**, in the JSON format. `JSON.stringify` turns an object into that text on the way out, and `JSON.parse` turns it back on the way in.

---

## The lesson is `example.js`

It runs, it prints, and its comments explain each idea in order. Read it while
you run it — that file *is* this module's teaching, not a demo of it.

```bash
node 05-strings-json/example.js
```

## What to do in `exercise.js`

Each of the first functions has a `// TODO` comment and a line that throws an
error. Both are placeholders — delete them and write your answer in their
place. Leaving the `throw` in fails the tests even if your answer is correct.

The **last one** has no code at all. You get a spec in a comment and write the
whole function yourself, `export` included.

```bash
npm test 05
```

Repeat until it is green.

## Commit your work

**Do this now, before you close the laptop.** A module is not finished until
it is pushed.

```bash
git add 05-strings-json/exercise.js
git commit -m "Finish module 05"
git push
```

Then stop for today, and come back another day for the next module.

## Reference

- [MDN — String methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods)
- [MDN — JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [MDN — JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [MDN — Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
