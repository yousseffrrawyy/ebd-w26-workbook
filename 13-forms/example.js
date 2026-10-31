// This file is the lesson. Open the page and read this beside it:
//     npm run open 13
// Type something and press Add. Then try pressing Add with the boxes empty.

const form = document.querySelector("#product-form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const errorLine = document.querySelector("#error");
const list = document.querySelector("#list");

// The data lives HERE, in an ordinary array — not in the page. The page is
// only a picture of it. This is the single most important idea in the module,
// and it is exactly how React thinks: keep the data, redraw from it.
const products = [];

// --- reading what someone typed --------------------------------------------
// An input's .value is whatever is in the box right now, ALWAYS as a string.
// "45" from a number input is still the string "45", so it needs converting
// before you do arithmetic with it. Number("45") gives 45.

// --- the submit event -------------------------------------------------------
// A form fires "submit" when the button is pressed or Enter is hit inside it.
// By default the browser then RELOADS THE PAGE, which throws away everything
// your JavaScript was holding. preventDefault stops that.
//
// Forget this one line and the symptom is a page that flickers and empties
// itself. It is the classic first-form bug.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  // Checking before trusting. An empty box gives "", which is falsy —
  // module 05's truthiness, doing real work.
  if (!name) {
    errorLine.textContent = "Give the product a name.";
    return;
  }
  if (!priceInput.value || Number.isNaN(price)) {
    errorLine.textContent = "Give the product a price.";
    return;
  }

  errorLine.textContent = "";

  // Change the DATA...
  products.push({ name, price });

  // ...then redraw the page from it.
  render(products);

  // Empty the boxes, so the next one can be typed straight away.
  form.reset();
  nameInput.focus();
});

// --- drawing the list from the data ----------------------------------------
// Empty it, then build it again from scratch. Simple, and it can never drift
// out of step with the data — which is worth far more than being clever.
function render(items) {
  list.textContent = ""; // removes everything inside

  for (const item of items) {
    const card = document.createElement("li");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = item.name;

    const tag = document.createElement("p");
    tag.classList.add("price");
    tag.textContent = `${item.price} EGP`;

    card.append(title, tag);
    list.append(card);
  }
}

// Start with something on screen, so the page is not blank.
products.push({ name: "Notebook", price: 45 });
products.push({ name: "Pen", price: 15 });
render(products);

console.log("example.js ran. Add a product, and watch `products` grow:", products);
