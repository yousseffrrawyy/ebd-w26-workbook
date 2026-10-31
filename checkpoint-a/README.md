# Checkpoint A

**This is the graded one.** Modules 00–08 are marked on completion; this is
what carries the mark for Assignment 2.

There is no lesson here and nothing new to learn. Everything you need is in
modules 00 to 08. What is different is that nobody hands you the function
signatures — you get a written spec and build from it, which is what the rest
of the course will be like.

---

## Your task is yours

Run this once, from the repo's root folder:

```bash
node checkpoint-a/generate.js
```

It reads your GitHub username off this repo's git remote, turns it into a
number, and writes **your** version of the task into `checkpoint-a/spec.md`.
The city, the status, the summary, the wording of the labels — all of it comes
from your username. Copying someone else's answers will fail your tests, not
because we are checking for it, but because their task is a different one.

Running `generate.js` again gives you the same spec back. It will not
overwrite a `solution.js` you have already started.

## Then

1. **Read `spec.md`.** It is the only description of the task that counts.
2. **Read `orders-db.js`.** It is the same idea as module 08's `fake-db.js`:
   it answers after a delay, and an id that does not exist rejects.
3. **Write `checkpoint-a/solution.js`** — five exported functions, named
   exactly as the spec names them.
4. Check your work:

```bash
npm test a
```

## Submitting

Commit **both** files. `spec.md` is proof you generated your own task; without
it there is nothing to mark against.

```bash
git add checkpoint-a/spec.md checkpoint-a/solution.js
git commit -m "Checkpoint A"
git push
```

## If you get stuck

Every piece of this exists in a module you have already done:

| The spec asks for | It is in |
|---|---|
| waiting for the database | 08 — `async` / `await` |
| not crashing on a missing order | 08 — `try` / `catch` |
| keeping some orders | 04 — `filter` |
| adding things up | 04 — `reduce` |
| finding one order | 04 — `find`, or the database's own lookup |
| building the label | 01 — template literals |
| picking fields off an order | 03 — objects and destructuring |
| turning it into text | 05 — `JSON.stringify` |

If a result is mysteriously `undefined`, look for a missing `await` first.

Ask a TA if you are stuck for more than twenty minutes. Bring the error.
