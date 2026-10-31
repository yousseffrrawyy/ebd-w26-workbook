// This file is part of the lesson. You do not edit it — you IMPORT from it.
//
// A file that exports things is a "module". This one exports three: a list of
// products, a function, and the shop's name. Open it, read it, then look at
// how example.js and exercise.js pull these out.

// A NAMED export: the name travels with it. Whoever imports this has to ask
// for `products` by that exact name.
export const products = [
  { id: 1, name: "Notebook", price: 45, inStock: true },
  { id: 2, name: "Backpack", price: 320, inStock: false },
  { id: 3, name: "Pen", price: 15, inStock: true },
  { id: 4, name: "Desk lamp", price: 180, inStock: true },
];

// Another named export. Functions export exactly the same way values do.
export function formatEGP(amount) {
  return `${amount} EGP`;
}

// A DEFAULT export. A file gets at most one, and whoever imports it can call
// it whatever they like — the name is not part of the deal.
const shopName = "GIU Campus Store";
export default shopName;
