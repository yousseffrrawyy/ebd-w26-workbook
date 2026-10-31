// Run this file with:   node 06-modules/example.js
//
// Read catalog.js first — this file is the other half of the story.

// --- importing -------------------------------------------------------------
// Named imports go in braces, and the names must match what catalog.js
// exported. Take only the ones you need.
import { products, formatEGP } from "./catalog.js";

// The default export has no braces, and you choose the name yourself.
import shopName from "./catalog.js";

// You could have written both in one line:
//   import shopName, { products, formatEGP } from "./catalog.js";

// A named import can be renamed on the way in, if it would clash with
// something you already have.
import { formatEGP as toEGP } from "./catalog.js";

console.log("--- 06-modules / example.js ---");
console.log("");

// --- using what you imported -----------------------------------------------
// These names now work here exactly as if you had written them in this file.
console.log("Shop name (a default import):", shopName);
console.log("Products (a named import):   ", products.length, "of them");
console.log("First product:               ", products[0].name);
console.log("");

console.log("formatEGP(45):", formatEGP(45));
console.log("toEGP(45):    ", toEGP(45), "<- the same function, renamed");
console.log("");

// Everything from module 04 still works — an imported array is just an array.
const names = products.map((product) => product.name);
console.log("All the names:", names);

const labels = products.map((product) => `${product.name}: ${formatEGP(product.price)}`);
console.log("With prices:");
for (let i = 0; i < labels.length; i++) {
  console.log("  " + labels[i]);
}
console.log("");

// --- the two path rules ----------------------------------------------------
// Both of these are errors. Uncomment one at a time to see what they say —
// you will hit both of them for real at some point.
//
//   import { products } from "catalog.js";      // no ./ - Node looks in node_modules
//   import { products } from "./catalog";       // no .js - Node needs the full filename
//
// The rule: "./" means "next to this file", and the ".js" is not optional.
console.log("Imports in this file came from ./catalog.js — with the ./ and the .js");
console.log("");

// --- one more thing you will see -------------------------------------------
// Older code, and a lot of answers online, use a different system entirely:
//
//   const catalog = require("./catalog.js");   // old
//   module.exports = { products };             // old
//
// That is CommonJS. It does the same job. This course uses import/export
// throughout — that is what "type": "module" in package.json turns on. If you
// paste `require` into this repo it will not work, and now you know why.
console.log("If you find `require(...)` online: that is the old system, and");
console.log("it will not work in this repo. Translate it to import/export.");
console.log("");

console.log("Next: fill in 06-modules/exercise.js, and create discounts.js.");
console.log("Then run: npm test 06");
