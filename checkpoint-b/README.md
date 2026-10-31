# Checkpoint B

**This is the graded one for Assignment 3.** Modules 09–13 are marked on
completion; this is what carries the mark.

No lesson, nothing new. Everything you need is in modules 00 to 13. What is
different is that you build all three files yourself, from a written spec,
with nothing started for you.

---

## Your task is yours

Run this once, from the repo's root folder:

```bash
node checkpoint-b/generate.js
```

It reads your GitHub username, turns it into a number, and writes **your**
version of the task into `checkpoint-b/spec.md`. The heading, the class name,
the filter and the button all come from your username. Copying someone else's
answer will fail your tests, because their task is a different one.

Running it again gives you the same spec back. It will not overwrite files you
have already started.

## Then

1. **Read `spec.md`.** It is the only description that counts.
2. **Read `items.js`.** It is your data, and you import it rather than
   retyping it.
3. Build `page.html`, `page.css` and `page.js`.
4. Look at it, and check it:

```bash
npm run open b
npm test b
```

Do both. The tests check structure, behaviour and colour contrast — they
cannot tell you whether the page looks right.

## Submitting

Commit **all four** files. `spec.md` is proof you generated your own task.

```bash
git add checkpoint-b/spec.md checkpoint-b/page.html checkpoint-b/page.css checkpoint-b/page.js
git commit -m "Checkpoint B"
git push
```

## If you get stuck

| The spec asks for | It is in |
|---|---|
| the page's structure | 09 — elements, nesting, linking |
| `<script type="module">` | 06 — `import` needs it in a browser |
| styling a class | 10 — selectors and the box model |
| readable colours | 10 — the contrast tests |
| building the `<li>`s | 12 — `createElement`, `append` |
| emptying the list first | 13 — draw the list from the data |
| the button | 12 — `addEventListener` |
| keeping some items | 04 — `filter` |
| turning items into names | 04 — `map` |

If the page is blank, open the console with **F12** — a mistake in `page.js`
stops the whole file, and the console is where it says so.

Ask a TA if you are stuck for more than twenty minutes. Bring the error.
