# 09 — HTML and linking

**What this teaches:** the elements a page is made of, how they nest, the
attributes that matter, and how a page pulls in a stylesheet and a script.

**Why it matters:** this is the thing React eventually produces. Before JSX
hides it behind components, you need to know what a page actually is — a tree
of elements, some of which have classes that CSS and JavaScript use to find
them.

---

## The lesson is `example.html`

Open it in your browser and read its source in VS Code at the same time. Every
comment explains the line under it.

```bash
npm run open 09
```

That command works on Windows, macOS and Linux. If nothing happens, it prints
the file's location so you can open it yourself.

While the page is open, press **F12** to open the browser's developer tools.
The **Console** tab shows what `app.js` printed. The **Elements** tab shows
the page's tree — that tree is what module 11 will teach you to search.

## What to do in `exercise.html`

Build a small page of your own. The skeleton is there; each `// TODO` comment
marks something missing. Delete each one as you do it.

You are not writing any CSS or JavaScript — `styles.css` and `app.js` are
written for you. Your job is to build the page and **link them correctly**.
You will know the script link worked when the last paragraph changes by
itself.

See your page as you go:

```bash
npm run open 09 exercise
```

Then check it:

```bash
npm test 09
```

The tests look at structure — which elements exist, how they nest, whether
the files you linked to are really there. They do not look at how it looks.
**Open the page and look at it yourself too**; passing tests and a broken page
are entirely possible.

## Commit your work

**Do this now, before you close the laptop.** A module is not finished until
it is pushed.

```bash
git add 09-html/exercise.html
git commit -m "Finish module 09"
git push
```

Then stop for today, and come back another day for the next module.

## Reference

- [MDN — HTML basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
- [MDN — HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [MDN — Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)
- [MDN — Adding CSS and JavaScript to HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
