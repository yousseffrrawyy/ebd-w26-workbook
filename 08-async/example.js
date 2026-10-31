// Run this file with:   node 08-async/example.js
//
// Read fake-db.js first. It pretends to be a database: it answers after a
// short delay, and it can fail.
//
// Watch the ORDER the lines come out in. It is not the order they are written,
// and that is the entire point of this module.

import { findProductCallback, findProduct, findAllProducts } from "./fake-db.js";

console.log("--- 08-async / example.js ---");
console.log("");

// --- the problem -----------------------------------------------------------
// findProduct takes a moment. Here is what you get if you forget that.
const notAProduct = findProduct(1);
console.log("1. findProduct(1) gave back:", notAProduct);
console.log("   its name is:", notAProduct.name, "<- undefined, it is a promise");
console.log("");

// A promise is not the product. It is a receipt for a product that is coming.

// --- callbacks: the old way ------------------------------------------------
// You hand in a function. It gets called later, with the answer.
console.log("2. asking for product 3 the old way...");
findProductCallback(3, (error, product) => {
  if (error) {
    console.log("   it failed:", error.message);
  } else {
    console.log("   the callback ran, much later, with:", product.name);
  }
});

// --- promises: .then -------------------------------------------------------
console.log("3. asking for product 2 with .then...");
findProduct(2)
  .then((product) => console.log("   .then ran, later, with:", product.name))
  .catch((error) => console.log("   it failed:", error.message));

// --- this line proves the point --------------------------------------------
// It is written after both requests, and it runs BEFORE either answer.
// JavaScript did not wait. It started them and carried on.
console.log("4. this line runs before either answer arrives");
console.log("");

// --- async / await: the readable way ---------------------------------------
// await only works inside a function marked async.
async function showProduct(id) {
  // await waits for the promise and hands you the value itself.
  const product = await findProduct(id);
  console.log(`   ${product.name} costs ${product.price} EGP`);
  return product.name;
}

// --- handling failure ------------------------------------------------------
// There is no product 99. The promise rejects, and the rejection throws
// where you await it — so try/catch catches it like any other error.
async function showProductSafely(id) {
  try {
    const product = await findProduct(id);
    console.log(`   found: ${product.name}`);
    return product.name;
  } catch (error) {
    console.log(`   could not find ${id}:`, error.message);
    return "Not found";
  }
}

// An async function ALWAYS returns a promise, so the caller awaits it too.
async function main() {
  // A short pause, so the two answers above land before this section starts
  // and the output below stays tidy. (Same trick as fake-db.js: a promise
  // that resolves after a delay. You do not need to write these yourself.)
  await new Promise((resolve) => setTimeout(resolve, 100));

  console.log("5. now, in order, with await:");
  await showProduct(1);
  await showProduct(4);

  console.log("");
  console.log("6. asking for one that does not exist:");
  const result = await showProductSafely(99);
  console.log("   the function still returned something:", result);

  console.log("");
  console.log("7. awaiting the whole list, then using module 04 on it:");
  const products = await findAllProducts();
  const names = products.map((product) => product.name);
  console.log("   ", names);

  console.log("");
  console.log("   Once awaited, it is an ordinary array. Nothing is special");
  console.log("   about data that arrived late — only about getting hold of it.");
  console.log("");
  console.log("Next: fill in 08-async/exercise.js, then run: npm test 08");
}

main();
