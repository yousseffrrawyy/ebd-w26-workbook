// 13-forms — your work goes in this file.
//
// The lesson is example.js:   npm run open 13
// See your own page with:     npm run open 13 exercise
// Check your work with:       npm test 13
//
// exercise.html is written for you and must not be edited. It gives you:
//   #product-form   the form
//   #name, #price   the two inputs
//   #error          a line to show a problem in
//   #list           an empty <ul> for the cards
//
// The first three are started for you. The LAST one has no code — you write
// it, and it is the one that ties the whole of Part 2 together.

/**
 * Reads what is currently typed into the two boxes.
 *
 * readForm() -> { name: "Pen", price: 15 }
 *
 * The name comes back trimmed. The price comes back as a NUMBER, not the
 * string the input gives you. An empty price box gives 0.
 *
 * @returns {{ name: string, price: number }}
 */
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);
  return { name, price };
}

/**
 * Empties both boxes.
 *
 * @returns {void}
 */
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

/**
 * Draws the list from an array of items, replacing whatever was there before.
 *
 * renderList([{ name: "Pen", price: 15 }]) puts this inside #list:
 *   <li class="card"><h3>Pen</h3><p class="price">15 EGP</p></li>
 *
 * Calling it again with a different array must REPLACE the old cards, not
 * add to them. An empty array leaves the list empty.
 *
 * @param {Array<{name: string, price: number}>} items
 * @returns {void}
 */
export function renderList(items) {
  const list = document.querySelector("#list");

  for (const card of list.querySelectorAll(".card")) {
    card.remove();
  }

  for (const item of items) {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceText = document.createElement("p");
    priceText.classList.add("price");
    priceText.textContent = `${item.price} EGP`;

    card.append(heading, priceText);
    list.append(card);
  }
}

/**
 * Now you write the whole function. This is the one that makes the page work.
 *
 * Write a function called `wireForm`.
 *
 *   Parameters: none.
 *   Returns:    nothing.
 *
 * It listens for the form's "submit" event, and when that happens:
 *
 *   1. Stops the browser reloading the page. Without this, everything else
 *      you do is thrown away a moment later.
 *   2. Reads the form.
 *   3. If the name is empty, puts the text
 *          Give the product a name.
 *      into #error, and stops there — nothing is added.
 *   4. If the price box is empty or is not a number greater than 0, puts
 *          Give the product a price.
 *      into #error, and stops there.
 *   5. Otherwise: clears #error, adds the item to a list of items that you
 *      keep in this file, redraws the list with `renderList`, and empties
 *      the form.
 *
 * Keep the items in an ordinary array, the way example.js does. The page is
 * a picture of that array, not the place the data lives.
 *
 * Remember `export`.
 */

// The data lives here. The page is only a picture of this array.
const items = [];

export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");

  form.addEventListener("submit", (event) => {
    // 1. Stop the browser reloading the page.
    event.preventDefault();

    // 2. Read the form.
    const { name, price } = readForm();

    // 3. No name: say so and stop.
    if (!name) {
      error.textContent = "Give the product a name.";
      return;
    }

    // 4. Empty, not a number, or not above 0: say so and stop.
    if (!(price > 0)) {
      error.textContent = "Give the product a price.";
      return;
    }

    // 5. All good: clear the error, store it, redraw, empty the boxes.
    error.textContent = "";
    items.push({ name, price });
    renderList(items);
    clearForm();
  });
}

// In the browser, wire the form as soon as the page loads. The tests have no
// browser around them (Node has `process`, a browser does not), and they call
// wireForm() themselves — wiring twice would add every product twice.
if (typeof process === "undefined") {
  wireForm();
}
