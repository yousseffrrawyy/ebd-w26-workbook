// This file is part of the lesson. You do not edit it — you import from it.
//
// It pretends to be a database. Every function here takes a moment to answer,
// the way a real database does, and none of them answer straight away. That
// delay is the entire reason this module exists.
//
// You are not expected to understand how these are written yet. You are
// expected to use them.

const products = [
  { id: 1, name: "Notebook", price: 45, inStock: true },
  { id: 2, name: "Backpack", price: 320, inStock: false },
  { id: 3, name: "Pen", price: 15, inStock: true },
  { id: 4, name: "Desk lamp", price: 180, inStock: true },
];

// The OLD way: you hand it a function, and it calls that function when it has
// an answer. Nothing is returned to you.
export function findProductCallback(id, callback) {
  setTimeout(() => {
    const product = products.find((p) => p.id === id);
    if (product) {
      callback(null, product); // no error, here is the product
    } else {
      callback(new Error(`No product with id ${id}`), null);
    }
  }, 20);
}

// The MODERN way: it hands you back a promise straight away, and the promise
// produces the product a moment later. This is the one you will use.
export function findProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      if (product) {
        resolve(product); // it worked — here is the value
      } else {
        reject(new Error(`No product with id ${id}`)); // it failed
      }
    }, 20);
  });
}

// Same idea, for the whole list. This one never fails.
export function findAllProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 20);
  });
}
