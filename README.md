# EBD Workbook — Winter 2026

Electronic Business Development (BINF 503), German International University.

A JavaScript and web refresher, in small pieces. It runs alongside the start of
the course and gets you ready for Express, MongoDB and React.

**New here? Read [START-HERE.md](START-HERE.md) first.** It is ten lines.

The slides covering all of this: [instructions.pdf](instructions.pdf).

## What this is

Fourteen small modules. Each one teaches a single thing and takes about 30–45
minutes — except `00-setup`, which is a short one, and the last two, which run
a little longer because they are where everything else comes together. Budget
1–3 hours a week, about 9–12 hours in total across the month.

Every module folder looks the same:

```
04-arrays/
├── README.md            short — what it teaches, and what to do
├── example.js           THE LESSON — run it, read its comments
├── exercise.js          your work — usually the only file you edit
└── exercise.test.js     the tests — do not edit
```

**The lesson is `example.js`.** It runs, it prints, and its comments explain
each idea in order. The README is a page of orientation, not the teaching — if
you read only the README you will be stuck. A couple of modules add another
file to read (`catalog.js`, `fake-db.js`), and `00-setup` and `07-npm` are the
exceptions, where the lesson stays in the README because it is about commands
and a website rather than code.

Everything is in the repo. There are no videos to watch and nothing to log into.

## Running the tests

```bash
npm install      # once, after cloning
npm test 04      # run one module
npm test         # run everything
npm run open 09  # open a Part 2 page in your browser
```

`npm test` on its own will fail loudly for every module you have not reached
yet. That is expected. Work one module at a time.

Run `npm run modules` to list what is here.

## The modules

### Part 1 — JavaScript (Assignment 2)

| # | Folder | Covers |
|---|---|---|
| 00 | `00-setup` | `npm install`, `npm test`, a tour of the repo |
| 01 | `01-basics` | `const`/`let`, types, template literals, comparisons, `if`/`else` |
| 02 | `02-functions` | declarations, arrow functions, parameters, return, functions as values |
| 03 | `03-objects` | dot and bracket access, nesting, destructuring, spread |
| 04 | `04-arrays` | loops vs `map` / `filter` / `find` / `reduce` |
| 05 | `05-strings-json` | string methods, `JSON.parse` / `stringify`, truthiness |
| 06 | `06-modules` | `import` / `export` across files |
| 07 | `07-npm` | `package.json`, versions, installing a package, scripts |
| 08 | `08-async` | callbacks, promises, `async` / `await`, `try` / `catch` |
| — | `checkpoint-a` | build a small data module from your own generated spec |

### Part 2 — The web (Assignment 3)

| # | Folder | Covers |
|---|---|---|
| 09 | `09-html` | elements, attributes, nesting, semantic tags, linking CSS and JS |
| 10 | `10-css` | selectors, classes, the box model, flexbox |
| 11 | `11-dom-read` | `querySelector`, `textContent`, `classList` |
| 12 | `12-dom-write` | creating, appending and removing elements, event listeners |
| 13 | `13-forms` | reading input values, `preventDefault`, rendering a list |
| — | `checkpoint-b` | build a page, its styling and its behaviour, from your own generated spec |

Modules 09 onwards have pages you look at as well as tests you run:

```bash
npm run open 11            # that module's example page
npm run open 11 exercise   # your own page
npm run open b             # your checkpoint B page
```

## How this is graded

Two submissions, one repo. Modules 00–08 and checkpoint A are **Assignment 2**.
Modules 09–13 and checkpoint B are **Assignment 3**.

- The modules are graded on completion — green tests.
- The **checkpoints** carry most of the mark. Each one generates a task from
  your own GitHub username, so nobody else's answer fits yours.
- **Commits on at least six different calendar days.** Not six commits — six
  days. This is checked from your git history, and it is the point: an hour a
  few times a week teaches you more than one long night.

Submit your repo's link to the form once, at the start:
<https://forms.gle/xWbT6eoxfiFLC2eY9>

After that there is nothing to hand in. Push before each deadline — we grade
what is on GitHub.

## Requirements

Node 20 or newer, git, and VS Code — the same setup as Assignment 1.
Run `node -v` if you are unsure.

## Getting help

Ask in the lab, or email a TA. Bring the error message.
