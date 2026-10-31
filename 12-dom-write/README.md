# 12 — Changing the page

**What this teaches:** building elements from scratch, putting them on the page, taking them off, and running your code when someone clicks.

**Why it matters:** a page that only displays what was in the HTML is a poster. Adding, removing and reacting to clicks is what makes it an application — and the click handler is the first time module 02's "functions are values" does something you can see.

---

## The lesson is `example.js`

Open the page, and read the script beside it. Press **F12** for the console.

```bash
npm run open 12
```

## What to do in `exercise.js`

**A note on this one:** it may take you a little longer than the modules
before it, because it pulls in more at once. That is expected, not a sign you
are behind. If you get it working, you have understood what this part of the
course is for.

`exercise.html` is written for you. **Do not edit it** — every id and class
the exercise mentions already exists in it.

The first ones are started for you: delete the `// TODO` comment and the
`throw` line, and write your answer in their place. The **last one** has no
code at all — you get a spec in a comment and write the whole function,
`export` included.

The last one, `wireButtons`, is where the module lands: you hand a function to
`addEventListener` and the browser calls it later, when someone clicks.

```bash
npm run open 12 exercise
npm test 12
```

## Commit your work

**Do this now, before you close the laptop.** A module is not finished until
it is pushed.

```bash
git add 12-dom-write/exercise.js
git commit -m "Finish module 12"
git push
```

Then stop for today, and come back another day for the next module.

## Reference

- [MDN — createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN — append](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)
- [MDN — remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove)
- [MDN — addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
