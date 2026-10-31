# 00 — Setup

**What this teaches:** how to install this workbook's tools with `npm install`
and how to run a module's tests with `npm test`.

**Why it matters:** every project in this course — Express, Mongoose, React —
starts with `npm install` and is checked by running a command in a terminal.
This is the loop you will repeat for the rest of the semester.

---

## Where the lesson lives

**This module is the odd one out.** Its lesson is below, in this file, because
it is about commands you type rather than code you run.

**From module 01 onwards, the lesson is in each module's `example.js`** — a
file you run, whose comments explain each idea in order and whose output shows
it happening. The README there is short: what the module teaches, why it
matters, and what to do. Do not skip the example expecting the README to carry
it. It will not.

## The lesson

You already know how to clone a repo, run a file with `node`, and commit. This
module adds one tool: **npm**.

npm came with Node. You did not install it separately. Check:

```bash
node -v
npm -v
```

Both should print a version number. Node must be **20 or higher**.

If `node -v` shows 18 or lower, install the current **LTS** version from
<https://nodejs.org/>, then close and reopen your terminal. If `npm -v` says
"not found" but `node -v` works, reopening the terminal usually fixes that
too — npm comes with Node, you do not install it separately.

A project can use code other people wrote. This workbook uses one such package,
a test runner called **Vitest**. The file `package.json` at the root of this
repo lists it. `package.json` is the project's description: its name, and what
it depends on.

Run this once, from the repo's root folder:

```bash
npm install
```

npm reads `package.json`, downloads what it lists, and puts it in a new folder
called `node_modules`. That folder is large and is never committed — look at
`.gitignore` and you will see it listed there. If you ever delete
`node_modules`, `npm install` brings it back.

`package.json` also holds **scripts** — short names for longer commands. This
repo has one you will use constantly:

```bash
npm test       # runs every module
npm test 00    # runs only this module
npm test 04    # runs only 04-arrays
```

Run one module at a time. `npm test` on its own will show failures for every
module you have not done yet, which is normal but noisy.

A test that passes prints green. A test that fails prints red, and tells you
what it expected and what it got instead. Red is not a problem — it is the
instruction for what to fix next.

## Tour of a module

Every folder in this repo looks the same:

| File | What it is |
|---|---|
| `README.md` | short: what it teaches, and what to do |
| `example.js` | **the lesson.** Run it, read its comments |
| `exercise.js` | **your work** — usually the only file you edit |
| `exercise.test.js` | the tests — do not edit |

Some modules have an extra file or two. Module 06 has `catalog.js` and module
08 has `fake-db.js` — both are part of the lesson, and neither is edited.

Inside `exercise.js`, `// TODO` comments mark what you have to write. From
module 01 onwards, each unfinished function also has a line that **throws an
error**. That line is a placeholder — it is there so an unfinished function
fails loudly instead of quietly handing back nothing.

**Delete the `// TODO` comment and the `throw` line, and write your answer
where they were.** Leaving the `throw` in place will fail the tests even if
your answer above it is correct.

## Run the example

```bash
node 00-setup/example.js
```

This one is a gentle first run rather than a lesson — it prints a few things
so you can see the loop working end to end.

## What to do in `exercise.js`

Open `00-setup/exercise.js` and fill in `getStudent()` with your real name,
student ID, and GitHub username. Then:

```bash
npm test 00
```

Repeat until it is green.

You will see the word `export` above the function. Leave it exactly as it is.
It is what lets the tests see your code. Every exercise file in this repo has
it, you never need to change it, and module 06 explains what it does.

## Commit your work

**Do this now, before you close the laptop.** A module is not finished until
it is pushed.

```bash
git add 00-setup/exercise.js
git commit -m "Finish module 00"
git push
```

Then stop for today. Come back on another day for the next module — you need
commits on at least **six different days**, and the only way to get them is to
actually spread this out.

## Submit your repo link — once, today

Do this now, at the very start. Not at the deadline.

Fill in the form: <https://forms.gle/xWbT6eoxfiFLC2eY9>

It asks for four things:

- your name
- your student ID
- your **tutorial number**
- your **repo's URL** — the page on GitHub, for example
  `https://github.com/your-username/your-repo`

You submit this **once, for the whole month**. Everything after it is graded
from what you push to that repo, so there is nothing else to hand in — no
zip files, no email attachments. Push your work and it is submitted.

If you send the wrong link, or you make a different repo later, fill the form
in again and tell a TA.

## If something goes wrong

**`npm` is not recognised / not found.** Close your terminal and open a new
one (**Terminal → New Terminal**). If that fails, reinstall Node from
<https://nodejs.org/> and reopen VS Code entirely.

**`npm install` fails with a network or timeout error.** Usually the wifi.
Try again, and if you are on campus wifi try a phone hotspot — this step needs
to download a few files, once.

**`npm error code ENOENT` mentioning `package.json`.** You are in the wrong
folder. npm commands only work from the repo's root — the folder that has
`package.json` in it. In VS Code, **Terminal → New Terminal** always opens
there.

**`Could not find vitest. Have you run npm install yet?`** Exactly what it
says. Run `npm install` from the repo root.

**Windows: `npm.ps1 cannot be loaded because running scripts is disabled`.**
PowerShell is blocking npm. Easiest fix: use Git Bash instead — click the
**+** dropdown at the top right of the VS Code terminal panel and choose
**Git Bash**, then try again.

**A warning about `esbuild` and install scripts.** Harmless. Ignore it and
carry on.

**The tests say `No test files found`.** Check your spelling — `npm test 00`,
not `npm test 0-setup`. Run `npm run modules` to see the list.

Still stuck after twenty minutes? Ask a TA. Bring the exact error message.

## Reference

- [npm — about packages](https://docs.npmjs.com/about-packages-and-modules)
- [MDN — package management basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Package_management)
