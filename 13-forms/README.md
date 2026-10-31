# 13 — Forms

**What this teaches:** reading what someone typed, stopping the browser from reloading the page, and drawing a list from data you are holding.

**Why it matters:** this is the last module, and it is the shape of every React app you will write: **keep the data in a variable, and redraw the page from it.** Once that idea is yours, JSX is a detail.

---

## The lesson is `example.js`

Open the page, and read the script beside it. Press **F12** for the console.

```bash
npm run open 13
```

Type a product and press Add. Then press Add with the boxes empty.

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

`wireForm` is the biggest thing you have written so far, and it uses something
from nearly every module: an event listener from 12, `preventDefault`, an
`if` from 01, truthiness from 05, an array from 04, and a template literal in
the card.

Take it in the order the spec lists. Get `preventDefault` in first and check
the page stops reloading, then add one step at a time.

```bash
npm run open 13 exercise
npm test 13
```

## Commit your work

**Do this now, before you close the laptop.** A module is not finished until
it is pushed.

```bash
git add 13-forms/exercise.js
git commit -m "Finish module 13"
git push
```

Then stop for today, and come back another day for the next module.

## Reference

- [MDN — Your first form](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [MDN — input.value](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/value)
- [MDN — preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [MDN — The submit event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)
