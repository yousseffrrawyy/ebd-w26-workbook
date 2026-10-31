// Run this file with:   node 04-arrays/example.js
//
// Read the comments top to bottom. Everything exercise.js needs is here.

// An ARRAY is a list, written with square brackets. This one holds objects.
// Prices are in EGP.
const products = [
  { id: 1, name: "Notebook", price: 45, inStock: true },
  { id: 2, name: "Backpack", price: 320, inStock: false },
  { id: 3, name: "Pen", price: 15, inStock: true },
  { id: 4, name: "Desk lamp", price: 180, inStock: true },
];

console.log("--- 04-arrays / example.js ---");
console.log("How many products:", products.length);
console.log("The first one:", products[0]); // counting starts at 0
console.log("");

// --- for loop: the long way ------------------------------------------------
// You declare a counter, an empty array, and push into it yourself.
const namesTheLongWay = [];
for (let i = 0; i < products.length; i++) {
  namesTheLongWay.push(products[i].name);
}
console.log("Names, with a for loop: ", namesTheLongWay);

// --- map: same number of items, each one transformed -----------------------
// map calls the function once per product and collects what it returns.
// `product` is just a parameter name — it holds one item per call.
const names = products.map((product) => product.name);
console.log("Names, with map:       ", names);

// The arrow function above is the short form of this:
//   function (product) { return product.name; }
// An arrow with no braces returns its single expression automatically.

// map can build new objects too, not just pull out one field.
const labels = products.map((product) => `${product.name}: ${product.price} EGP`);
console.log("Labels, with map:      ", labels);
console.log("");

// --- filter: fewer items, same shape ---------------------------------------
// Keeps every product whose function call returned true.
const cheap = products.filter((product) => product.price < 100);
console.log("Under 100 EGP:", cheap);

// The condition can be a boolean field on its own — no comparison needed.
const available = products.filter((product) => product.inStock);
console.log("In stock:", available.length, "of", products.length);
console.log("");

// --- find: one item, or undefined ------------------------------------------
// Stops at the first match and returns THE ITEM, not an array.
const lamp = products.find((product) => product.id === 4);
console.log("Product with id 4:", lamp);

// When nothing matches you get undefined. This is normal, not an error —
// later, it is how you know a record was not in the database.
const missing = products.find((product) => product.id === 999);
console.log("Product with id 999:", missing);
console.log("");

// --- reduce: the whole list down to one value ------------------------------
// The function receives the running total so far, then the current item.
// The 0 at the end is where the total starts.
const total = products.reduce((runningTotal, product) => runningTotal + product.price, 0);
console.log("Total price:", total, "EGP");

// Starting from 0 is also what makes an empty list answer 0 instead of crashing.
const emptyTotal = [].reduce((runningTotal, product) => runningTotal + product.price, 0);
console.log("Total of an empty list:", emptyTotal);
console.log("");

// --- chaining --------------------------------------------------------------
// filter returns an array, so you can call map straight on the result.
// Read left to right: keep the ones in stock, then take each name.
const availableNames = products
  .filter((product) => product.inStock)
  .map((product) => product.name);
console.log("Names of in-stock products:", availableNames);
console.log("");

// --- none of this changed the original -------------------------------------
// All four methods return something new. `products` is untouched.
console.log("products is still", products.length, "items long");

console.log("");
console.log("Next: fill in 04-arrays/exercise.js, then run: npm test 04");
