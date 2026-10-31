# 07 — npm and the registry

**What this teaches:** what `package.json` actually says, how to find a package
worth using on the npm registry, how to install it, and how to run it through a
script.

**Why it matters:** you will not write most of the code in your final project.
Express, Mongoose and React are packages, installed exactly the way you are
about to install one here. Knowing how to look one up and judge it is a real
skill, and it is the difference between using a library and copying snippets
from a forum.

---

## Where the lesson lives

Like module 00, most of this one is in the README — `package.json`, versions
and the registry are files and a website, not code you can run. The part that
*is* code — using the package once it is installed — is in `example.js`, as
usual.

## The lesson

### `package.json`

Open the `package.json` at the root of this repo. You have been using it since
module 00 without reading it. It describes the project:

```json
{
  "name": "ebd-w26-workbook",
  "type": "module",
  "scripts": { "test": "node scripts/test.js" },
  "devDependencies": { "vitest": "^3.2.4" }
}
```

- **`type: "module"`** is what makes `import` work instead of `require` —
  module 06 mentioned this.
- **`scripts`** are shortcuts. `npm test` runs whatever `test` points at. That
  is all `npm test` has ever been.
- **`dependencies`** are packages your code needs to run.
  **`devDependencies`** are packages only needed while building or testing —
  `vitest` is one, because your finished project does not need a test runner.

### Versions

`"vitest": "^3.2.4"` is a version rule. The three numbers are
**major.minor.patch**:

- **patch** (`3.2.4` → `3.2.5`) — a bug fix, nothing else changes.
- **minor** (`3.2.4` → `3.3.0`) — something added, old code still works.
- **major** (`3.2.4` → `4.0.0`) — something broke on purpose. Read before
  upgrading.

The **`^`** means "this version or any newer one that should not break me" —
any `3.x.x`, but never `4.0.0`. That is why `package-lock.json` exists too: it
records the exact versions actually installed, so everyone on the project gets
the same ones.

### Finding a package

Go to **<https://www.npmjs.com>** and search. Anything you can think of is
probably there — dates, colours, random names, validation, PDF generation.

The search results and the package page tell you whether something is worth
using. Look at:

- **Weekly downloads.** Thousands or more means many people rely on it, and
  problems get found by someone other than you.
- **Last publish.** "3 years ago" is not automatically bad, but on a package
  that should be maintained, it is a warning.
- **A linked repository.** No repo means you cannot see the code or the open
  issues.
- **Dependencies.** A package that pulls in forty others brings all forty
  into your project.
- **The license.** MIT is the common, permissive one.

None of these are rules. They are what you look at before trusting a stranger's
code with your project.

### Installing

```bash
npm install dayjs
```

That downloads it into `node_modules`, adds it to `dependencies` in
`package.json`, and records the exact version in `package-lock.json`. Look at
`package.json` afterwards — it changed.

`node_modules` is not committed. It is in `.gitignore`, because anyone can
rebuild it from `package.json` by running `npm install`. Your repo stays small
and everyone gets the same thing.

Then import it by **name**, with no `./` — that is how Node knows to look in
`node_modules` rather than next to your file:

```js
import dayjs from "dayjs";
```

Module 06's two path rules, from the other side.

## What to do

Work through these in order. **Only step 3 happens in `exercise.js`** — the
other four are in the terminal or in `package.json`, which is new. Do not stop
when the file looks finished.

**1. Install dayjs.** From the repo root:

```bash
npm install dayjs
```

`dayjs` is a small library for working with dates. Every record you store
later has a date on it that you will want to display, and dates in plain
JavaScript are genuinely unpleasant.

**2. Run the example.** This is where you learn what dayjs actually does — it
needs the package, so it will not work before step 1.

```bash
node 07-npm/example.js
```

**3. Fill in `exercise.js`** — three functions using dayjs. The last is
written from scratch, as usual.

**4. Add a script.** This step is not in `exercise.js` — it is in the
`package.json` at the **root of the repo**, the one you read at the top of this
lesson. Open it and find the `"scripts"` block:

```json
  "scripts": {
    "test": "node scripts/test.js",
    "test:watch": "node scripts/test.js --watch",
    "modules": "node scripts/modules.js"
  },
```

Add one more line to it, so it becomes:

```json
  "scripts": {
    "test": "node scripts/test.js",
    "test:watch": "node scripts/test.js --watch",
    "modules": "node scripts/modules.js",
    "example": "node 07-npm/example.js"
  },
```

Mind the commas: every entry needs one **except the last**. A missing or extra
comma makes the file invalid and `npm` will refuse to run at all.

Now you have made your own shortcut. Try it:

```bash
npm run example
```

**5. Find a package of your own.** Search <https://www.npmjs.com> for anything
that sounds useful or interesting. Judge it with the list above. Install it,
then put its name in `myPackage` at the bottom of `exercise.js`.

It can be anything, as long as it is not `dayjs`. Prefer something small and
popular — if `npm install` takes a very long time or prints errors, pick
another one. The tests check that the package is really installed, not just
named.

```bash
npm test 07
```

## Commit your work

**Do this now, before you close the laptop.**

```bash
git add 07-npm/exercise.js package.json package-lock.json
git commit -m "Finish module 07"
git push
```

Note that `package.json` and `package-lock.json` changed too — they record
what you installed, so they have to go in. `node_modules` does not, and git
will ignore it for you.

## Reference

- [npm — the registry](https://www.npmjs.com)
- [npm — package.json](https://docs.npmjs.com/cli/configuring-npm/package-json)
- [npm — about semantic versioning](https://docs.npmjs.com/about-semantic-versioning)
- [Day.js documentation](https://day.js.org/docs/en/display/format)
