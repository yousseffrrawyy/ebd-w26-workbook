// Run this file with:   node 00-setup/example.js
//
// Every line below runs top to bottom, the moment you run the file.
// Read the comments as you go — they explain what each line does.

// console.log prints a value to the terminal. It is how you look inside your
// own program. You will use it more than anything else in this course.
console.log("--- 00-setup / example.js ---");

// Node tells you which version of itself is running.
console.log("Node version:", process.version);

// An OBJECT groups related values together under names.
// The names (name, studentId) are called KEYS. The values sit after the colon.
const exampleStudent = {
  name: "Sara Mansour",
  studentId: "11111111",
  githubUsername: "saramansour",
};

// Read one value out of an object with a dot.
console.log("Name:", exampleStudent.name);
console.log("GitHub:", exampleStudent.githubUsername);

// Printing the whole object shows every key at once.
console.log("The whole object:", exampleStudent);

// A FUNCTION is a named block of code that runs when you call it.
// This one takes no input and RETURNS an object.
function getExampleStudent() {
  return exampleStudent;
}

// Calling it: the name, then parentheses.
console.log("From the function:", getExampleStudent());

// EXPORT makes something in this file available to other files.
// The tests import your exercise.js the same way. Without an export, a test
// cannot see your function at all.
export { getExampleStudent };

// Your turn: open exercise.js in this folder.
console.log("");
console.log("Next: fill in 00-setup/exercise.js, then run: npm test 00");
