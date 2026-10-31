# 06 — Modules

**What this teaches:** splitting code across files — how a file hands something
out with `export`, and how another file picks it up with `import`.

**Why it matters:** real projects are not one file. Later, your routes live in
one file, your database models in another, and the server that pulls them
together in a third. It is also how you use code you did not write: in module
07 you install a package, and the line that uses it is an `import` exactly like
these.

---

## The lesson is `example.js`

Read `catalog.js` first — it is a real module that exports three things. Then
run the example, which imports them. Between those two files is the whole
lesson.

```bash
node 06-modules/example.js
```

## What to do

**In `exercise.js`**, fill in three functions. Each needs something out of
`catalog.js`, and the import line at the top is already written — notice it is
the only reason those names exist in that file.

**Then create a new file yourself**: `06-modules/discounts.js`. The spec is at
the bottom of `exercise.js`. Nothing in this repo imports it except the tests,
which is the point — you are writing a module for someone else to use, the way
`catalog.js` was written for you.

To create it: right-click the `06-modules` folder in VS Code's Explorer
sidebar, choose **New File**, and type `discounts.js`.

```bash
npm test 06
```

Repeat until it is green.

## Commit your work

**Do this now, before you close the laptop.**

```bash
git add 06-modules/exercise.js 06-modules/discounts.js
git commit -m "Finish module 06"
git push
```

Note there are **two** files this time. A new file is not tracked by git until
you `git add` it once — check `git status` if you are unsure.

## Reference

- [MDN — JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [MDN — export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [MDN — import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
