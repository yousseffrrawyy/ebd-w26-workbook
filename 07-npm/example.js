// Run this file with:   node 07-npm/example.js
//
// This one will NOT run until you have installed dayjs:
//     npm install dayjs
// If you see "Cannot find package 'dayjs'", that is the step you skipped.

// Importing by NAME, with no ./ in front. That is what tells Node to look in
// node_modules instead of next to this file. Module 06's path rules, from the
// other side.
//
// dayjs is a DEFAULT export, so there are no braces around it.
import dayjs from "dayjs";

console.log("--- 07-npm / example.js ---");
console.log("");

// --- what dayjs gives you --------------------------------------------------
// Call dayjs with a date string and you get an object that knows how to
// handle dates. Plain JavaScript dates are unpleasant; this is why the
// package exists.
const enrolled = dayjs("2026-03-15");

console.log("The date we started with:", "2026-03-15");
console.log("");

// format() lays a date out however you want. The letters are a pattern:
//   DD day, MM month, YYYY year, MMMM the month's full name
console.log('format("DD/MM/YYYY"):   ', enrolled.format("DD/MM/YYYY"));
console.log('format("YYYY-MM-DD"):   ', enrolled.format("YYYY-MM-DD"));
console.log('format("D MMMM YYYY"):  ', enrolled.format("D MMMM YYYY"));
console.log("");

// Single pieces of the date, as numbers.
console.log("year(): ", enrolled.year());
console.log("month():", enrolled.month(), "<- careful: January is 0");
console.log("date(): ", enrolled.date());
console.log("");

// Arithmetic. add() and subtract() take a number and a unit.
console.log("14 days later: ", enrolled.add(14, "day").format("YYYY-MM-DD"));
console.log("1 month later: ", enrolled.add(1, "month").format("YYYY-MM-DD"));
console.log("1 week earlier:", enrolled.subtract(1, "week").format("YYYY-MM-DD"));
console.log("");

// Each of those gave back a NEW date. The original is untouched — the same
// rule as strings in module 05 and arrays in module 04.
console.log("enrolled is still:", enrolled.format("YYYY-MM-DD"));
console.log("");

// --- today -----------------------------------------------------------------
// With no argument, you get right now. This line prints something different
// every day you run it, which is a reasonable way to prove it is really
// running.
console.log("Today is:", dayjs().format("D MMMM YYYY"));
console.log("");

// --- where this came from --------------------------------------------------
// Nothing about dayjs is built into Node. It arrived because `npm install
// dayjs` downloaded it and wrote it into package.json. Delete node_modules and
// this file stops working until you run `npm install` again.
console.log("Next: fill in 07-npm/exercise.js, then run: npm test 07");
