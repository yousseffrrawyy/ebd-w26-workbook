# Study notes

My own summary of the workbook, one module at a time. Each section is the one
idea worth remembering, plus a line from my solution that shows it.

## Part 1 — JavaScript

### 00 — Setup

`npm install` reads `package.json` and downloads what it lists into
`node_modules` (never committed). `npm test 04` runs one module's tests.
Red output is the instruction for what to fix next.

```js
return { name: "...", studentId: "13006981", githubUsername: "yousseffrrawyy" };
```

### 01 — Basics and conditions

`const` for values that do not change, `let` for ones that do. Template
literals build strings from data. A comparison already *is* a boolean, so it
can be returned directly. `return` hands a value back; `console.log` only prints.

```js
return amount > 100;                       // no if needed
return `${product} costs ${amount} EGP`;   // template literal
```

### 02 — Functions

Two forms: declarations (`function greet() {}`) and arrow functions
(`const double = (n) => n * 2`). An arrow without braces returns its expression
automatically. Parameters can have defaults. Functions are values, so they can
be passed to other functions.

```js
export const formatPrice = (amount, currency = "EGP") => `${amount} ${currency}`;
export function applyTwice(fn, value) {
  return fn(fn(value));
}
```

### 03 — Objects

Dot access when the key is fixed, brackets when the key is in a variable.
Destructuring pulls several fields out at once. Spread copies an object so the
original is not changed.

```js
return product[field];                  // key in a variable
const { name, price } = product;        // destructuring
return { ...product, price: newPrice }; // copy with one change
```

### 04 — Arrays

`map` transforms every item, `filter` keeps some, `find` returns one item (or
`undefined`), `reduce` folds the list into a single value — always give it a
starting value. They chain.

```js
return products.reduce((sum, product) => sum + product.price, 0);
return products.filter((p) => p.inStock).map((p) => p.name);
```

### 05 — Strings and JSON

String methods chain (`trim().toUpperCase()`). `JSON.stringify` turns an object
into text; `JSON.parse` turns text back into an object. Empty strings, `null`
and `undefined` are falsy, so `||` gives a fallback.

```js
return student.name || "Unknown student";
const { name, price } = JSON.parse(jsonText);
```

### 06 — Modules

A file that exports things is a module. Named exports are imported by their
exact name in braces; a file has at most one default export, which the importer
can name freely.

```js
export function halfPrice(amount) { return amount / 2; } // named
export default saleName;                                 // default
import shopName, { products, formatEGP } from "./catalog.js";
```

### 07 — npm

`npm install <name>` adds a package to `dependencies` in `package.json` and
pins it in `package-lock.json` (both get committed). The `scripts` block holds
shortcuts run with `npm run <name>`. Libraries like dayjs save hand-written
date code.

```js
return dayjs(dateString).add(days, "day").format("YYYY-MM-DD");
```

### 08 — Async

A database answers later, so its functions return promises. `await` waits for
the value inside an `async` function. A rejected promise becomes an exception —
catch it with `try` / `catch`. A mysterious `undefined` usually means a missing
`await`.

```js
try {
  const product = await findProduct(id);
  return product.name;
} catch (error) {
  return "Not found";
}
```

### Checkpoint A

Everything above combined, from a spec instead of given signatures: load the
orders (08), filter by city and status (04), total `price * quantity` with
`reduce` (04), build a label from a looked-up order and never throw (01, 03,
08), and output only some fields as JSON (03, 05).

```js
const slim = orders.map(({ student, item }) => ({ student, item }));
return JSON.stringify(slim);
```

## Part 2 — The web

### 09 — HTML

A page is nested elements. Semantic tags (`header`, `main`, `footer`) say what
each part is for. The stylesheet is linked in the `head`; the script goes at
the end of the `body`, so the content exists before the script runs. Every
`img` needs an `alt` that describes it.

```html
<link rel="stylesheet" href="styles.css" />
...
<script src="app.js"></script>
```

### 10 — CSS

A rule is a selector plus declarations. A descendant selector (`nav a`) targets
only elements inside another one. The box model is content, padding, border,
margin. Flexbox lays children out in a row: `justify-content` spaces them along
the row and `align-items` lines them up across it. Text needs enough contrast
with its background to be readable.

```css
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### 11 — Reading the DOM

`querySelector` returns the first match (or `null`), `querySelectorAll` returns
a NodeList of every match. A NodeList has no `.map`, so turn it into an array
first. `textContent` reads the text; `classList.contains` checks a class.

```js
return Array.from(document.querySelectorAll(".card h3")).map(
  (heading) => heading.textContent
);
```

### 12 — Changing the DOM

`createElement` makes an element that is not on the page yet; it only appears
once it is `append`ed to something that is. `.remove()` takes it away and
`classList.add` changes how it looks. `addEventListener` hands the browser a
function to call later, when the event happens.

```js
document.querySelector("#add").addEventListener("click", () => {
  addProduct("Notebook", 45);
});
```

### 13 — Forms

Submitting a form reloads the page unless `event.preventDefault()` is called
first. Input values are always strings, so prices need `Number()`. Validate,
show an error and `return` early if something is wrong. The data lives in an
array; the page is only a picture of it, redrawn from that array each time.

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { name, price } = readForm();
  if (!name) {
    error.textContent = "Give the product a name.";
    return;
  }
  ...
  items.push({ name, price });
  renderList(items);
});
```

### Checkpoint B

Three files built from a spec: the structure (09), the styling with readable
colours (10), and the behaviour (11–13). Because `page.js` uses `import`, the
script tag needs `type="module"`. The list is drawn from the data, and the
button redraws it with only the out-of-stock items (04's `filter`).

```js
export function start() {
  renderItems(items);
  document.querySelector("#filter-button").addEventListener("click", () => {
    renderItems(matching());
  });
}
```
