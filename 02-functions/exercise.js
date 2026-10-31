// 02-functions — your work goes in this file.
//
// The lesson is in example.js:  node 02-functions/example.js
// Check your work with:         npm test 02
//
// The first three are started for you: delete the `// TODO` and the `throw`
// line, and answer in their place. The LAST TWO have no code at all — you
// write the whole thing, from `export` to the closing brace.

/**
 * Greets someone by name.
 * greet("Ahmed") -> "Hello, Ahmed!"
 *
 * Written as a declaration — the `function greet(...)` form.
 *
 * @param {string} name
 * @returns {string}
 */
export function greet(name) {
  // TODO: return a template literal.
  throw new Error("greet is not written yet");
}

/**
 * Doubles a number.
 * double(21) -> 42
 *
 * Written as an ARROW function. Try it without braces, so the expression is
 * returned automatically.
 *
 * @param {number} n
 * @returns {number}
 */
export const double = (n) => {
  // TODO: replace this whole body. Keep `export const double =`.
  throw new Error("double is not written yet");
};

/**
 * Takes a percentage off a price.
 * applyDiscount(320, 25) -> 240
 * applyDiscount(200, 10) -> 180
 *
 * Written as an ARROW function, with two parameters.
 *
 * @param {number} amount in EGP
 * @param {number} percent for example 25 for 25% off
 * @returns {number} the price after the discount
 */
export const applyDiscount = (amount, percent) => {
  // TODO: subtract the percentage from the amount.
  throw new Error("applyDiscount is not written yet");
};

/**
 * Now you write the whole function. Nothing is started for you below this
 * line — the spec is here, the code is yours.
 *
 * Write an ARROW function, stored in a const, called `formatPrice`.
 *
 *   Parameters: amount (a number), and currency (a string) which must
 *               DEFAULT to "EGP" when the caller leaves it out.
 *   Returns:    the amount and the currency, with a space between them.
 *
 *   formatPrice(45)          -> "45 EGP"
 *   formatPrice(45, "USD")   -> "45 USD"
 *
 * It has to start with `export`, or the tests cannot see it.
 * Look at `double` above if you need the shape of an arrow function.
 */

// TODO: write formatPrice here.

/**
 * And one more, the other way round.
 *
 * Write a function DECLARATION — the `function name(...)` form — called
 * `applyTwice`.
 *
 *   Parameters: fn (a function), and value (anything).
 *   Returns:    the result of calling fn on value, and then calling fn again
 *               on whatever that gave back.
 *
 *   applyTwice(double, 5)          -> 20
 *   applyTwice((n) => n + 10, 5)   -> 25
 *   applyTwice((text) => `${text}!`, "Hi")   -> "Hi!!"
 *
 * Remember `export`.
 */

// TODO: write applyTwice here.
