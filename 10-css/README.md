# 10 — CSS

**What this teaches:** selecting the elements you want, the box model, and
laying things out in a row with flexbox.

**Why it matters:** CSS is how anything you build stops looking like a 1995
research paper. More practically: the class names you write here are the same
ones module 11 uses to find elements from JavaScript, and the same ones you
will put in React's `className`.

---

## The lesson is `example.css`

Open the page and read the stylesheet beside it — the comments explain each
rule.

```bash
npm run open 10
```

**Change a number, save, refresh the browser.** That loop teaches CSS faster
than reading does, and this is the module to form the habit.

While the page is open, press **F12** and click an element in the **Elements**
tab. The panel shows every rule that applies to it, and a coloured diagram of
its box model — content, padding, border, margin. That diagram is the fastest
way to understand why something is not where you expected.

## What to do in `exercise.css`

`exercise.html` is written for you. **Do not edit it** — every class it uses
already exists. Your job is the stylesheet.

Each `TODO` names a selector and the properties its rule has to set. Colours,
sizes and fonts are your choice unless the TODO says otherwise. Make it look
like something you would not be embarrassed by.

```bash
npm run open 10 exercise
npm test 10
```

The tests read your stylesheet and check which selectors you wrote and which
properties they set. Two of them go further and check that your text has
enough **contrast** against what is behind it — gold on beige passes every
other test and cannot be read by anyone.

Even so, **the tests cannot see the page.** A stylesheet can pass all of them
and still look terrible. Keep the browser open and judge it yourself; that is
the only part of this module a machine cannot do for you.

## Commit your work

**Do this now, before you close the laptop.** A module is not finished until
it is pushed.

```bash
git add 10-css/exercise.css
git commit -m "Finish module 10"
git push
```

Then stop for today, and come back another day for the next module.

## Reference

- [MDN — CSS first steps](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)
- [MDN — CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)
- [MDN — The box model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [MDN — Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox)
