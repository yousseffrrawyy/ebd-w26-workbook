// Run this file with:   node 05-strings-json/example.js
//
// Read the comments top to bottom. Everything exercise.js needs is here.

console.log("--- 05-strings-json / example.js ---");
console.log("");

// --- string methods --------------------------------------------------------
const messy = "  Notebook  ";

// length is a PROPERTY, not a method — no brackets after it.
console.log("length:       ", messy.length);

// These are methods, so they need brackets.
console.log("trim():       ", `"${messy.trim()}"`);
console.log("toUpperCase():", `"${messy.toUpperCase()}"`);
console.log("toLowerCase():", `"${messy.toLowerCase()}"`);

// Methods can be chained: trim first, then upper-case the result.
console.log("trim + upper: ", `"${messy.trim().toUpperCase()}"`);

// includes and startsWith answer yes/no questions. They are case sensitive.
const name = "Notebook";
console.log('includes("book"):', name.includes("book")); // false - capital B
console.log('includes("Note"):', name.includes("Note"));
console.log('startsWith("N"): ', name.startsWith("N"));
console.log("");

// STRINGS NEVER CHANGE. Every method gives back a NEW string.
const clean = messy.trim();
console.log("clean is:", `"${clean}"`);
console.log("messy is still:", `"${messy}"`, "<- untouched");
console.log("");

// --- split: string to array ------------------------------------------------
// Cuts a string wherever it finds the separator you give it.
const fullName = "Nour Gaser";
const parts = fullName.split(" ");
console.log("split(' '):", parts);
console.log("first part:", parts[0]);

console.log('"a,b,c".split(","):', "a,b,c".split(","));

// The result is an ordinary array, so module 04 applies.
const initials = fullName.split(" ").map((part) => part[0]);
console.log("first letter of each part:", initials);

// join glues an array back into a string. The opposite of split.
console.log("joined back up:", initials.join(""));
console.log("");

// --- JSON: object to text --------------------------------------------------
const product = { id: 1, name: "Notebook", price: 45, inStock: true };

// stringify turns an object into TEXT. Look at the quotes in the output —
// this is a string, not an object.
const text = JSON.stringify(product);
console.log("stringify:", text);
console.log("its type: ", typeof text, "<- a string, not an object");

// With null and a number, it comes out readable, indented by that many spaces.
console.log("stringify, readable:");
console.log(JSON.stringify(product, null, 2));
console.log("");

// --- JSON: text back to object ---------------------------------------------
// parse does the reverse. Note the keys in the text are in DOUBLE QUOTES —
// that is a rule of JSON, not a style choice.
const incoming = '{ "id": 2, "name": "Backpack", "price": 320 }';
const parsed = JSON.parse(incoming);
console.log("parse:   ", parsed);
console.log("its type:", typeof parsed, "<- an object again");

// It is an ordinary object, so everything from module 03 works on it.
console.log("parsed.name: ", parsed.name);
const { price } = parsed;
console.log("destructured:", price);
console.log("");

// parse THROWS if the text is not valid JSON. Module 08 covers handling that.
// Uncomment this line to see the error you will eventually hit:
//   JSON.parse("not json at all");
console.log("");

// --- truthiness ------------------------------------------------------------
// Only six values are falsy. Everything else is truthy.
console.log("  false      is falsy");
console.log("  0          is falsy");
console.log('  ""         is falsy   <- an empty string');
console.log("  null       is falsy");
console.log("  undefined  is falsy");
console.log("  NaN        is falsy");

// These surprise people — all three are TRUTHY.
console.log('  "0" is truthy:', Boolean("0"));
console.log("  [] is truthy: ", Boolean([]));
console.log("  {} is truthy: ", Boolean({}));
console.log("");

// Which is how you check whether you actually have a value.
const student = { name: "Salma" };
const anonymous = { name: "" };

if (student.name) {
  console.log("student has a name:", student.name);
}
if (!anonymous.name) {
  console.log("anonymous has no name");
}

// || gives the right-hand value when the left one is falsy. The usual fallback.
console.log("with a name: ", student.name || "Unknown student");
console.log("without one: ", anonymous.name || "Unknown student");

// Careful with numbers: 0 is falsy, so || throws away a real zero.
const count = 0;
console.log("count || 10:", count || 10, "<- lost the real 0");
console.log("count ?? 10:", count ?? 10, "<- ?? only catches null/undefined");
console.log("");

console.log("Next: fill in 05-strings-json/exercise.js, then run: npm test 05");
