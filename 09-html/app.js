// A script, written for you. It proves the page really loaded it.
//
// If your <script> tag is linked correctly, the paragraph with
// id="script-check" changes when the page opens. If it still says the
// original text, the browser never ran this file.

const target = document.querySelector("#script-check");

if (target) {
  target.textContent = "The script is linked: this line was written by app.js.";
  target.style.color = "#0b6e4f";
}

console.log("app.js ran. Open the browser console (F12) and you will see this.");
