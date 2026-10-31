// 11-dom-read — your work goes in this file.
//
// The lesson is example.js:   npm run open 11
// See your own page with:     npm run open 11 exercise
// Check your work with:       npm test 11
//
// exercise.html is written for you and must not be edited.
//
// These functions read the page. `document` is always there — in the browser
// because the browser provides it, and in the tests because they load
// exercise.html for you first. You write exactly the code you would write for
// a real page.
//
// The first four are started for you. The LAST one has no code — you write it.

/**
 * The text of the page's main heading.
 * pageHeading() -> "My Campus Store"
 *
 * @returns {string}
 */
export function pageHeading() {
  // TODO: querySelector the h1, then read its textContent.
  throw new Error("pageHeading is not written yet");
}

/**
 * How many product cards are on the page.
 * productCount() -> 5
 *
 * @returns {number}
 */
export function productCount() {
  // TODO: querySelectorAll gives you all of them. It has a length.
  throw new Error("productCount is not written yet");
}

/**
 * The name in every card, in the order they appear.
 * productNames() -> ["Notebook", "Backpack", "Pen", "Desk lamp", "Calculator"]
 *
 * Each card holds its name in an <h3>.
 *
 * @returns {string[]}
 */
export function productNames() {
  // TODO: querySelectorAll, Array.from, then map. A NodeList has no .map.
  throw new Error("productNames is not written yet");
}

/**
 * The price text shown on the card with that name.
 * priceOf("Pen") -> "15 EGP"
 * priceOf("Nothing") -> null, because there is no such card
 *
 * @param {string} name
 * @returns {string|null}
 */
export function priceOf(name) {
  // TODO: find the card whose h3 matches, then read its .price.
  // Remember to return null when nothing matches.
  throw new Error("priceOf is not written yet");
}

/**
 * Now you write the whole function.
 *
 * Write a function called `soldOutNames`.
 *
 *   Parameters: none.
 *   Returns:    an array of the names on the cards that have the class
 *               `sold-out`, in the order they appear on the page.
 *
 *   soldOutNames() -> ["Backpack", "Calculator"]
 *
 * You can do this with one selector, or by filtering on
 * `classList.contains("sold-out")`. Either is fine.
 *
 * Remember `export`.
 */

// TODO: write soldOutNames here.
