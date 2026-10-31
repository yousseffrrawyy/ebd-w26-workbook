// 05-strings-json — your work goes in this file.
//
// The lesson is in example.js:  node 05-strings-json/example.js
// Check your work with:         npm test 05
//
// The first four are started for you. The LAST one has no code — you write it.

/**
 * Cleans up a label and shouts it.
 * shout("  notebook  ") -> "NOTEBOOK"
 * shout("Pen") -> "PEN"
 *
 * @param {string} text
 * @returns {string} trimmed and upper-cased
 */
export function shout(text) {
  return text.trim().toUpperCase();
}

/**
 * The initials of a full name.
 * initials("Nour Gaser") -> "NG"
 * initials("salma ahmed") -> "SA"
 *
 * Split the name on a space, take the first letter of each part, then join
 * them back together. Upper-case the result.
 *
 * @param {string} fullName two names with a space between them
 * @returns {string}
 */
export function initials(fullName) {
  return fullName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

/**
 * Turns a product into JSON text, ready to be sent somewhere.
 * toJson({ id: 1, name: "Notebook" }) -> '{"id":1,"name":"Notebook"}'
 *
 * @param {object} product
 * @returns {string} the product as JSON text
 */
export function toJson(product) {
  return JSON.stringify(product);
}

/**
 * A student's name, or a fallback when there isn't one.
 * displayName({ name: "Salma" }) -> "Salma"
 * displayName({ name: "" }) -> "Unknown student"
 * displayName({}) -> "Unknown student"
 *
 * @param {object} student
 * @returns {string}
 */
export function displayName(student) {
  return student.name || "Unknown student";
}

/**
 * Now you write the whole function.
 *
 * Write a function called `summaryFromJson`.
 *
 *   Parameter: jsonText (a string of JSON describing one product).
 *   Returns:   a label built from it, in the same shape as module 01's.
 *
 *   summaryFromJson('{ "name": "Notebook", "price": 45 }')
 *     -> "Notebook costs 45 EGP"
 *
 * Turn the text into an object first, then build the string. Assume the text
 * is valid JSON — handling broken input is module 08.
 *
 * Remember `export`.
 */

export function summaryFromJson(jsonText) {
  const { name, price } = JSON.parse(jsonText);
  return `${name} costs ${price} EGP`;
}
