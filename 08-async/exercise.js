// 08-async — your work goes in this file.
//
// The lesson is in example.js:  node 08-async/example.js
// Check your work with:         npm test 08
//
// The first three are started for you. The LAST one has no code — you write it.
//
// Every function here is already marked `async`, because every one has to wait
// for the database. If a result comes out `undefined`, check for a missing
// `await` first.

import { findProduct, findAllProducts } from "./fake-db.js";

/**
 * The name of one product, looked up by id.
 * await productName(1) -> "Notebook"
 *
 * @param {number} id
 * @returns {Promise<string>} the product's name
 */
export async function productName(id) {
  const product = await findProduct(id);
  return product.name;
}

/**
 * A price label for one product, looked up by id.
 * await priceLabel(1) -> "Notebook costs 45 EGP"
 *
 * @param {number} id
 * @returns {Promise<string>}
 */
export async function priceLabel(id) {
  const { name, price } = await findProduct(id);
  return `${name} costs ${price} EGP`;
}

/**
 * The name of a product, or "Not found" if there is no such product.
 *
 * await safeProductName(1)  -> "Notebook"
 * await safeProductName(99) -> "Not found"
 *
 * findProduct REJECTS for an id that does not exist. Without a try/catch that
 * rejection would escape this function and crash whatever called it.
 *
 * @param {number} id
 * @returns {Promise<string>}
 */
export async function safeProductName(id) {
  try {
    const product = await findProduct(id);
    return product.name;
  } catch (error) {
    return "Not found";
  }
}

/**
 * Now you write the whole function.
 *
 * Write an `async` function called `namesInStock`.
 *
 *   Parameters: none.
 *   Returns:    a promise for an array of the names of every product that is
 *               in stock, in the order they come back.
 *
 *   await namesInStock() -> ["Notebook", "Pen", "Desk lamp"]
 *
 * Get the whole list with `findAllProducts()` — remember to await it — and
 * then it is an ordinary array, so module 04 finishes the job. You wrote this
 * exact filter-and-map in module 04.
 *
 * Remember `export`, and remember `async`.
 */

export async function namesInStock() {
  const products = await findAllProducts();
  return products.filter((product) => product.inStock).map((product) => product.name);
}
