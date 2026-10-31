// 07-npm — your work goes in this file, and in package.json.
//
// Read 07-npm/README.md first and work through its numbered steps.
// Nothing here runs until you have done step 1:  npm install dayjs
//
// Careful: this file is only step 3 of five. Steps 1, 2 and 5 happen in the
// terminal, and step 4 is an edit to the package.json at the root of the repo.
// Finishing this file is not finishing the module.
//
// Check your work with: npm test 07

import dayjs from "dayjs";

/**
 * Lays a date out the way people write it here.
 * formatDate("2026-03-15") -> "15/03/2026"
 *
 * @param {string} dateString a date like "2026-03-15"
 * @returns {string} the same date as DD/MM/YYYY
 */
export function formatDate(dateString) {
  // TODO: dayjs(dateString), then .format() with the right pattern.
  throw new Error("formatDate is not written yet");
}

/**
 * The year a date falls in, as a number.
 * yearOf("2026-03-15") -> 2026
 *
 * @param {string} dateString
 * @returns {number}
 */
export function yearOf(dateString) {
  // TODO: dayjs has a method for exactly this. It returns a number.
  throw new Error("yearOf is not written yet");
}

/**
 * Now you write the whole function.
 *
 * Write a function called `addDays`.
 *
 *   Parameters: dateString (a date like "2026-03-15"), and days (a number).
 *   Returns:    that many days later, as a string in "YYYY-MM-DD" form.
 *
 *   addDays("2026-03-15", 14)  -> "2026-03-29"
 *   addDays("2026-03-15", 0)   -> "2026-03-15"
 *   addDays("2026-12-30", 3)   -> "2027-01-02"
 *
 * The example file does this on one line. Remember `export`.
 */

// TODO: write addDays here.

/**
 * The package YOU chose from the registry.
 *
 * Step 5 in the README: search https://www.npmjs.com, judge a package, install
 * it, and put its name here — exactly as you typed it after `npm install`.
 *
 * Anything at all, as long as it is not dayjs. The tests check that it is
 * really installed, not just named.
 *
 * @type {string}
 */
export const myPackage = "REPLACE ME";
