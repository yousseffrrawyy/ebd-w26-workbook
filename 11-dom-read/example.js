// This file is the lesson. Open the page and read this beside it:
//     npm run open 11
// Then press F12 and look at the Console tab — every line below prints there.

// Everything is written into the page as well, so you can see it without the
// console. This is the only part of this file you can ignore for now.
const lines = [];
function show(label, value) {
  console.log(label, value);
  lines.push(`${label} ${JSON.stringify(value)}`);
}

// --- the DOM ---------------------------------------------------------------
// When the browser loads your HTML it builds a tree of objects out of it, one
// per element. That tree is the DOM, and `document` is the whole of it.
// Your HTML is text on disk; the DOM is the living version the browser draws.

// --- finding one element ---------------------------------------------------
// querySelector takes a CSS SELECTOR — exactly the ones from module 10 — and
// returns the FIRST element that matches, or null if nothing does.
const heading = document.querySelector("h1");
show("the h1 element:", heading.tagName);

// textContent is the text inside an element, with no tags.
show("its text:", heading.textContent);

// A class selector. The dot means the same here as in CSS.
const firstCard = document.querySelector(".card");
show("first card's h3:", firstCard.querySelector("h3").textContent);

// You can search inside an element, not just the whole document. That is what
// the line above does: find an h3, but only within firstCard.

// An id selector, with the hash.
const output = document.querySelector("#output");
show("found the output box:", output !== null);

// Nothing matches -> null. Not an error. Reading .textContent off null IS an
// error, which is why code like this usually checks first.
show("querySelector('.nope') is:", document.querySelector(".nope"));

// --- finding many elements -------------------------------------------------
// querySelectorAll returns ALL the matches, as a NodeList.
const cards = document.querySelectorAll(".card");
show("how many cards:", cards.length);

// A NodeList is not an array. It has length and you can loop over it, but
// .map and .filter are missing. Array.from turns it into a real array, and
// then module 04 works on it again.
const names = Array.from(cards).map((card) => card.querySelector("h3").textContent);
show("all the names:", names);

const prices = Array.from(document.querySelectorAll(".price")).map(
  (element) => element.textContent
);
show("all the prices:", prices);

// --- finding the one element you want, by what is INSIDE it ----------------
// querySelector finds by tag, class or id. It cannot find "the card whose
// heading says Pen" — no CSS selector can ask that. So you fetch them all and
// then use module 04's `find` on the result.
const penCard = Array.from(document.querySelectorAll(".card")).find(
  (card) => card.querySelector("h3").textContent === "Pen"
);
show("found the Pen card:", penCard !== undefined);

// Read whatever you like off it once you have it — including by searching
// inside it again.
show("what the Pen card's price says:", penCard.querySelector(".price").textContent);

// `find` gives back undefined when nothing matches, exactly as it did with
// plain objects in module 04. Reading a property off undefined crashes, so
// anything that might not be there needs checking first.
const missingCard = Array.from(document.querySelectorAll(".card")).find(
  (card) => card.querySelector("h3").textContent === "Telescope"
);
show("looking for a Telescope gives:", missingCard);

// The usual shape: bail out if it is not there, carry on if it is.
if (missingCard) {
  show("the Telescope costs:", missingCard.querySelector(".price").textContent);
} else {
  show("there is no Telescope card, so there is nothing to read", null);
}

// --- classList -------------------------------------------------------------
// classList is the element's classes, as something you can ask questions of.
const soldOutCard = document.querySelector(".sold-out");
show("the sold-out card is:", soldOutCard.querySelector("h3").textContent);

// .contains asks whether an element has a class. This is how you check state
// that the page is already showing.
show("first card is sold out?", firstCard.classList.contains("sold-out"));
show("that card is sold out?", soldOutCard.classList.contains("sold-out"));

// You can also read every class it has.
show("its classes:", Array.from(soldOutCard.classList));

// --- attributes ------------------------------------------------------------
// getAttribute reads any attribute by name — href, src, alt, id, anything.
const link = document.createElement("a");
link.setAttribute("href", "https://www.giu-uni.de");
show("an attribute we just set:", link.getAttribute("href"));

// --- putting it together ---------------------------------------------------
// Reading is all this module does. Module 12 changes things.
const cheapNames = Array.from(document.querySelectorAll(".card"))
  .filter((card) => !card.classList.contains("sold-out"))
  .map((card) => card.querySelector("h3").textContent);
show("names of cards still for sale:", cheapNames);

output.textContent = lines.join("\n");
