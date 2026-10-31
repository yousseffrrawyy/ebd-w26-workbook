// 04-arrays — your work goes in this file.
//
// The lesson is in example.js:  node 04-arrays/example.js
// Check your work with:         npm test 04
//
// The first four are started for you. The LAST one has no code — you write it.
// Each function receives its products as a parameter; do not write your own
// list inside them.
//
// A product looks like this:
//   { id: 1, name: "Notebook", price: 45, inStock: true }

/**
 * Takes the name out of every product.
 *
 * @param {Array<{id: number, name: string, price: number, inStock: boolean}>} products
 * @returns {string[]} one name per product, in the same order
 */
export function productNames(products) {
  // TODO: use map.
  throw new Error("productNames is not written yet");
}

/**
 * Keeps only the products that cost less than maxPrice.
 * A product priced exactly at maxPrice is NOT cheaper than it.
 *
 * @param {Array<object>} products
 * @param {number} maxPrice in EGP
 * @returns {Array<object>} the whole product objects, not just their names
 */
export function cheaperThan(products, maxPrice) {
  // TODO: use filter.
  throw new Error("cheaperThan is not written yet");
}

/**
 * Looks up one product by its id.
 *
 * @param {Array<object>} products
 * @param {number} id
 * @returns {object|undefined} the matching product, or undefined if there is none
 */
export function findById(products, id) {
  // TODO: use find. Do not return an array.
  throw new Error("findById is not written yet");
}

/**
 * Adds up the price of every product.
 *
 * @param {Array<object>} products
 * @returns {number} the total in EGP, and 0 for an empty list
 */
export function totalPrice(products) {
  // TODO: use reduce. Remember the starting value.
  throw new Error("totalPrice is not written yet");
}

/**
 * Now you write the whole function, the way you did at the end of module 02.
 *
 * Write a function called `inStockNames`.
 *
 *   Parameter: products (an array of product objects).
 *   Returns:   an array of the NAMES of the products that are in stock,
 *              in the order they appear.
 *
 *   inStockNames([
 *     { id: 1, name: "Notebook", price: 45, inStock: true },
 *     { id: 2, name: "Backpack", price: 320, inStock: false },
 *     { id: 3, name: "Pen", price: 15, inStock: true },
 *   ])
 *     -> ["Notebook", "Pen"]
 *
 * Filter, then map — chained, on one line. Remember `export`.
 */

// TODO: write inStockNames here.
