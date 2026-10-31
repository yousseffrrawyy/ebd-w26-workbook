// Run this file with:   node 02-functions/example.js
//
// Read the comments top to bottom. Everything exercise.js needs is here.

console.log("--- 02-functions / example.js ---");
console.log("");

// --- declaring a function --------------------------------------------------
// The word function, a name, parameters in brackets, a body in braces.
// `name` is a PARAMETER: a placeholder that only exists inside the function.
function greet(name) {
  return `Hello, ${name}!`;
}

// Calling it. "Ahmed" is the ARGUMENT — the real value going in.
console.log(greet("Ahmed"));
console.log(greet("Salma"));

// More than one parameter: they are filled in order.
function priceLabel(product, amount) {
  return `${product} costs ${amount} EGP`;
}
console.log(priceLabel("Backpack", 320));

// Swap the arguments and you get nonsense, not an error. Order matters.
console.log(priceLabel(320, "Backpack"));
console.log("");

// --- return vs console.log -------------------------------------------------
// This is the mistake that costs people the most time.
function returnsAValue() {
  return "I was returned";
}
function onlyPrints() {
  console.log("I was printed");
  // no return, so this function gives back undefined
}
console.log("From the one that returns:  ", returnsAValue());
console.log("From the one that only logs:", onlyPrints());

// return also STOPS the function. Nothing after it runs.
function shipping(total) {
  if (total > 500) {
    return 0; // free shipping, and we are done — no else needed
  }
  return 50;
}
console.log("Shipping on 600 EGP:", shipping(600));
console.log("Shipping on 200 EGP:", shipping(200));
console.log("");

// --- arrow functions -------------------------------------------------------
// The same job, written shorter. No `function` keyword, and no name of its
// own — it is stored in a const, like any other value.
const greetAgain = (name) => `Hello again, ${name}!`;
console.log(greetAgain("Ahmed"));

// With NO braces, the single expression is returned automatically.
// With braces, you write return yourself. These two are identical:
const doubleShort = (n) => n * 2;
const doubleLong = (n) => {
  return n * 2;
};
console.log("doubleShort(21):", doubleShort(21));
console.log("doubleLong(21): ", doubleLong(21));

// The classic mistake: braces, but no return. This hands back undefined.
const doubleBroken = (n) => {
  n * 2;
};
console.log("doubleBroken(21):", doubleBroken(21), "<- braces but no return");

// Two parameters work the same way.
const discountedPrice = (amount, percent) => amount - (amount * percent) / 100;
console.log("320 EGP with 25% off:", discountedPrice(320, 25));
console.log("");

// --- default parameters ----------------------------------------------------
// A fallback for when the caller leaves that argument out.
function formatPrice(amount, currency = "EGP") {
  return `${amount} ${currency}`;
}
console.log("formatPrice(45):       ", formatPrice(45));
console.log('formatPrice(45, "USD"):', formatPrice(45, "USD"));
console.log("");

// --- functions are values --------------------------------------------------
// A function can be stored in a variable. So it can be passed to another
// function, exactly like a number or a string.
function applyTwice(fn, value) {
  return fn(fn(value)); // call it, then call it again on the result
}

console.log("applyTwice(doubleShort, 5):", applyTwice(doubleShort, 5));

const addTen = (n) => n + 10;
console.log("applyTwice(addTen, 5):     ", applyTwice(addTen, 5));

// Note what is being passed: `doubleShort`, with NO parentheses.
//   doubleShort     the function itself
//   doubleShort(5)  the number 10, which is what it gives back
console.log("doubleShort is   ", typeof doubleShort);
console.log("doubleShort(5) is", typeof doubleShort(5));

// This is all that happens in module 04, when you write products.map(...).
// map is a function that takes your function and calls it for you.
console.log("");

console.log("Next: fill in 02-functions/exercise.js, then run: npm test 02");
