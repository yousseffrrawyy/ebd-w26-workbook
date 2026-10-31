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
  // TODO: read .value off each input. Trim the name, and convert the price
  // with Number().
  throw new Error("readForm is not written yet");
}

/**
 * Empties both boxes.
 *
 * @returns {void}
 */
export function clearForm() {
  // TODO: set each input's .value to an empty string.
  throw new Error("clearForm is not written yet");
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
  // TODO: empty #list first, then build one card per item — the same card
  // shape as module 12.
  throw new Error("renderList is not written yet");
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

// TODO: write wireForm here.
