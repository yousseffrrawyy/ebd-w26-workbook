// 03-objects — your work goes in this file.
//
// The lesson is in example.js:  node 03-objects/example.js
// Check your work with:         npm test 03
//
// Delete the `// TODO` and the `throw` line in each, and answer in their place.
//
// A product looks like this:
//   { id: 1, name: "Notebook", price: 45, inStock: true }

/**
 * The name of a product.
 * productName({ name: "Notebook", ... }) -> "Notebook"
 *
 * @param {object} product
 * @returns {string}
 */
export function productName(product) {
  return product.name;
}

/**
 * Reads whichever field it is asked for.
 * getField(product, "price") -> 45
 * getField(product, "name") -> "Notebook"
 * getField(product, "colour") -> undefined, because there is no such key
 *
 * @param {object} product
 * @param {string} field the name of the key to read
 * @returns {*} whatever is stored under that key
 */
export function getField(product, field) {
  return product[field];
}

/**
 * The city a student lives in.
 * A student looks like:
 *   { name: "Salma", address: { city: "Cairo", street: "El Tahrir" } }
 *
 * @param {object} student
 * @returns {string}
 */
export function studentCity(student) {
  return student.address.city;
}

/**
 * A one-line summary of a product.
 * summarize({ name: "Notebook", price: 45, ... }) -> "Notebook costs 45 EGP"
 *
 * Use destructuring to get name and price out first, then build the string.
 *
 * @param {object} product
 * @returns {string}
 */
export function summarize(product) {
  const { name, price } = product;
  return `${name} costs ${price} EGP`;
}

/**
 * A copy of a product with a different price.
 * The product that was passed in must NOT change — return a new object.
 *
 * withPrice({ id: 1, name: "Notebook", price: 45, inStock: true }, 30)
 *   -> { id: 1, name: "Notebook", price: 30, inStock: true }
 *
 * @param {object} product
 * @param {number} newPrice in EGP
 * @returns {object} a new product, with every other key the same
 */
export function withPrice(product, newPrice) {
  return { ...product, price: newPrice };
}
