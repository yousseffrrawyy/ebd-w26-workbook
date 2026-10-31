# 11 — Reading the page

**What this teaches:** finding elements on a page from JavaScript, and reading what is in them.

**Why it matters:** this is where the two halves of the course meet. The selectors are module 10's; the arrays are module 04's. Every React component you write later starts as this — find the data, read it, show it.

---

## The lesson is `example.js`

Open the page, and read the script beside it. Press **F12** for the console.

```bash
npm run open 11
```

Click the buttons on the example page and watch what changes.

## What to do in `exercise.js`

`exercise.html` is written for you. **Do not edit it** — every id and class
the exercise mentions already exists in it.

The first ones are started for you: delete the `// TODO` comment and the
`throw` line, and write your answer in their place. The **last one** has no
code at all — you get a spec in a comment and write the whole function,
`export` included.

Your functions use `document` directly, exactly as they would in a real
browser. The tests load `exercise.html` for you first, so `document` is there
when your code runs.

```bash
npm run open 11 exercise
npm test 11
```

## Commit your work

**Do this now, before you close the laptop.** A module is not finished until
it is pushed.

```bash
git add 11-dom-read/exercise.js
git commit -m "Finish module 11"
git push
```

Then stop for today, and come back another day for the next module.

## Reference

- [MDN — The DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN — querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN — textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
- [MDN — classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
