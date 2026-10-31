// 06-modules — your work goes in this file, and in one you create yourself.
//
// Read 06-modules/README.md first, then read catalog.js, then run:
//   node 06-modules/example.js
// Check your work with: npm test 06

// This import line is written for you. It is the only reason `products`,
// `formatEGP` and `shopName` exist in this file at all — delete it and none of
// them are defined any more.
import shopName, { products, formatEGP } from "./catalog.js";

/**
 * How many products the catalog has.
 * productCount() -> 4
 *
 * Takes no parameters — it uses the imported `products` directly.
 *
 * @returns {number}
 */
export function productCount() {
  // TODO: the imported array is just an array.
  throw new Error("productCount is not written yet");
}

/**
 * A price tag for one product.
 * priceTag({ name: "Notebook", price: 45 }) -> "45 EGP"
 *
 * Use the imported `formatEGP` rather than building the string yourself.
 *
 * @param {object} product
 * @returns {string}
 */
export function priceTag(product) {
  // TODO: pass the product's price to the imported function.
  throw new Error("priceTag is not written yet");
}

/**
 * A heading for the catalog page.
 * shopHeading() -> "GIU Campus Store catalog"
 *
 * Use the imported `shopName` — the default export from catalog.js.
 *
 * @returns {string}
 */
export function shopHeading() {
  // TODO: a template literal, with the imported name in it.
  throw new Error("shopHeading is not written yet");
}

/**
 * Now the other half of the module: you write a file, not just a function.
 *
 * Create a NEW file next to this one, called exactly:
 *
 *     06-modules/discounts.js
 *
 * In VS Code: right-click the `06-modules` folder in the Explorer sidebar,
 * choose New File, and type the name.
 *
 * That file must export TWO things:
 *
 *   1. A NAMED export, a function called `halfPrice`:
 *        halfPrice(320) -> 160
 *        halfPrice(45)  -> 22.5
 *
 *   2. A DEFAULT export, the string "Winter sale".
 *
 * Nothing in this file imports it. The tests do — which is the point. You are
 * writing a module for someone else to use, the same way catalog.js was
 * written for you.
 *
 * Do not write it below this comment. Write it in the new file.
 */
