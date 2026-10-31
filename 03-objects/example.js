// Run this file with:   node 03-objects/example.js
//
// Read the comments top to bottom. Everything exercise.js needs is here.

console.log("--- 03-objects / example.js ---");
console.log("");

// --- an object -------------------------------------------------------------
// Keys on the left, values on the right. Prices in EGP.
const product = {
  id: 1,
  name: "Notebook",
  price: 45,
  inStock: true,
};

console.log("The whole object:", product);
console.log("");

// --- reading with a dot ----------------------------------------------------
console.log("product.name: ", product.name);
console.log("product.price:", product.price);

// A key that does not exist is not an error. You get undefined.
console.log("product.colour:", product.colour);
console.log("");

// --- reading with brackets -------------------------------------------------
// Use these when the key is in a variable, decided while the program runs.
const field = "price";
console.log("field holds:      ", field);
console.log("product[field]:   ", product[field]); // looks up "price"
console.log('product["price"]: ', product["price"]); // the same thing

// The trap: a dot uses the word you typed, not what the variable holds.
console.log("product.field:    ", product.field); // undefined - no key called "field"
console.log("");

// --- nesting ---------------------------------------------------------------
// A value can be another object. Follow the path with more dots.
const student = {
  name: "Salma",
  studentId: "19000123",
  address: {
    city: "Cairo",
    street: "El Tahrir",
  },
};

console.log("student.address:      ", student.address);
console.log("student.address.city: ", student.address.city);
console.log("");

// --- destructuring ---------------------------------------------------------
// The long way: one line per value.
const nameLongWay = product.name;
const priceLongWay = product.price;
console.log("The long way:", nameLongWay, priceLongWay);

// Destructuring: the same thing in one line. The names in the braces have to
// match the keys in the object.
const { name, price } = product;
console.log("Destructured:", name, price);

// Take as many or as few as you need. This ignores price and inStock.
const { id } = product;
console.log("Just the id:", id);

// It works on nested objects too.
const { city } = student.address;
console.log("City:", city);

// And on a parameter, which unpacks the object on the way in.
function label({ name, price }) {
  return `${name} costs ${price} EGP`;
}
console.log("From a destructured parameter:", label(product));
console.log("");

// --- spread: copying -------------------------------------------------------
// ... copies every key out of an object into a new one.
const copy = { ...product };
console.log("A copy:", copy);

// List a key AFTER the spread to override it: copy everything, change one.
const cheaper = { ...product, price: 30 };
console.log("Cheaper version:", cheaper);

// The original is untouched. This is the whole point.
console.log("The original is still:", product);
console.log("");

// --- why spread instead of just assigning ----------------------------------
// Two names can point at the SAME object. Changing one changes "both",
// because there is only one object.
const sameObject = product;
sameObject.price = 999;
console.log("After changing sameObject.price, product.price is:", product.price);

// Put it back, and do it properly this time.
product.price = 45;
const updated = { ...product, price: 999 };
console.log("updated.price:", updated.price);
console.log("product.price:", product.price, "- untouched");
console.log("");

console.log("Next: fill in 03-objects/exercise.js, then run: npm test 03");
