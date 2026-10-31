// Run this file with:   node 01-basics/example.js
//
// Read the comments top to bottom. Everything exercise.js needs is here.

console.log("--- 01-basics / example.js ---");
console.log("");

// --- variables -------------------------------------------------------------
// const: this name will keep pointing at this value.
const productName = "Notebook";
const price = 45;

// let: this one will change later.
let quantity = 2;
quantity = 3; // allowed, because it was declared with let

// Trying the same thing on a const would stop the program:
//   productName = "Pen";   // TypeError: Assignment to constant variable.
// Leave that commented out — but try uncommenting it once, to see the error
// you will eventually hit by accident.

console.log("Product:", productName);
console.log("Price:", price);
console.log("Quantity:", quantity);
console.log("");

// --- types -----------------------------------------------------------------
// The three you will use constantly.
const shopName = "GIU Campus Store"; // string  — text, in quotes
const itemCount = 12;                // number  — no quotes
const isOpen = true;                 // boolean — only true or false

// typeof tells you which type a value is. It gives back a string.
console.log("typeof shopName: ", typeof shopName);
console.log("typeof itemCount:", typeof itemCount);
console.log("typeof isOpen:  ", typeof isOpen);

// The quotes decide the type, not the characters inside them.
console.log("typeof 45:  ", typeof 45);
console.log('typeof "45":', typeof "45");
console.log("");

// --- template literals -----------------------------------------------------
// Backticks, not quotes. ${ } drops a value into the middle of the text.
const label = `${productName} costs ${price} EGP`;
console.log("Label:", label);

// Anything can go inside ${ } — including arithmetic.
console.log(`Total for ${quantity}: ${price * quantity} EGP`);

// The old way, with + between the pieces. It works, but it is harder to read.
console.log("The old way: " + productName + " costs " + price + " EGP");
console.log("");

// --- expressions -----------------------------------------------------------
// An expression is any piece of code that produces a value. Each of these
// produces one, and each has a type, because its value has a type.
console.log("45 * 2 is          ", 45 * 2);
console.log("`Hi ${shopName}` is", `Hi ${shopName}`);
console.log("price > 100 is     ", price > 100);

// A comparison is an expression like any other. You can store its result.
const expensive = price > 100;
console.log("expensive:", expensive, "- typeof:", typeof expensive);

// The comparisons: >  <  >=  <=  === (equal)  !== (not equal)
console.log("45 === 45: ", 45 === 45);
console.log("45 !== 50: ", 45 !== 50);

// ALWAYS use ===, never ==. The two-character version converts types first.
console.log('45 ==  "45":', 45 == "45"); // true  - almost never what you meant
console.log('45 === "45":', 45 === "45"); // false - a number is not a string

// Combine booleans with && (and), || (or) and ! (not).
console.log("isOpen && expensive:", isOpen && expensive);
console.log("isOpen || expensive:", isOpen || expensive);
console.log("!isOpen:            ", !isOpen);
console.log("");

// --- if / else -------------------------------------------------------------
// Runs one block or the other, depending on the condition.
if (price > 100) {
  console.log("This product is expensive");
} else {
  console.log("This product is affordable");
}

// More than two outcomes: chain with else if. The FIRST match wins and the
// rest are skipped, so the order of the branches matters.
const stockCount = 4;
if (stockCount === 0) {
  console.log("Out of stock");
} else if (stockCount < 10) {
  console.log("Low stock");
} else {
  console.log("In stock");
}

// An if statement does not produce a value. When you want the value itself,
// use the ? : form, which is an expression.
const verdict = price > 100 ? "Expensive" : "Affordable";
console.log("verdict:", verdict);

// Because it is an expression, it fits inside a template literal. An if
// statement cannot go there.
console.log(`The ${productName} is ${price > 100 ? "expensive" : "affordable"}`);
console.log("");

// --- return, just enough ---------------------------------------------------
// Your exercise gives you five functions with empty bodies. You only need to
// know one thing about them for now: `return` hands a value back out. Module
// 02 covers functions properly.
//
// Note that `return` also STOPS the function. Once it runs, nothing after it
// in that function runs — which is why this one needs no else.
function shipping(total) {
  if (total > 500) {
    return 0; // free shipping, and we are done
  }
  return 50;
}
console.log("Shipping on 600 EGP:", shipping(600));
console.log("Shipping on 200 EGP:", shipping(200));

// Printing is not returning. A function that only prints hands back undefined.
function onlyPrints() {
  console.log("  (this line was printed from inside onlyPrints)");
}
console.log("What onlyPrints gave back:", onlyPrints());
console.log("");

console.log("Next: fill in 01-basics/exercise.js, then run: npm test 01");
