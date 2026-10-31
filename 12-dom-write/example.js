// This file is the lesson. Open the page and read this beside it:
//     npm run open 12
// Click the buttons. Everything that happens is written below.

const list = document.querySelector("#list");
const output = document.querySelector("#output");

// --- making an element -----------------------------------------------------
// createElement makes an element that exists but is NOWHERE yet. Nothing
// appears on the page until you attach it to something already on the page.
const firstCard = document.createElement("li");

// Give it a class, the same one the stylesheet already knows about.
firstCard.classList.add("card");

// Build what goes inside it, the same way: create, fill, attach.
const heading = document.createElement("h3");
heading.textContent = "Notebook";

const price = document.createElement("p");
price.classList.add("price");
price.textContent = "45 EGP";

// append puts an element inside another one, at the end.
firstCard.append(heading);
firstCard.append(price);

// Still invisible — firstCard is not attached to the page yet.
// THIS is the line that makes it appear:
list.append(firstCard);

// --- a function, because you will do that over and over --------------------
// Everything above, wrapped up so it can be reused. Almost all DOM code you
// write later looks like this: build a small tree, then append it.
function makeCard(name, priceInEgp) {
  const card = document.createElement("li");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = name;

  const tag = document.createElement("p");
  tag.classList.add("price");
  tag.textContent = `${priceInEgp} EGP`;

  card.append(title, tag); // append takes several at once
  return card;
}

list.append(makeCard("Backpack", 320));
list.append(makeCard("Pen", 15));

// --- changing what is already there ----------------------------------------
// classList.add and .remove change how an element looks, by switching which
// CSS rules apply to it. The stylesheet does the rest.
const backpack = list.querySelectorAll(".card")[1];
backpack.classList.add("sold-out");

// .toggle adds the class if it is missing and removes it if it is there.
// Useful for anything that switches on and off.

// --- removing ---------------------------------------------------------------
// .remove() takes an element off the page. There is no "undo" — it is gone
// until you build it again.
const throwaway = makeCard("Mistake", 1);
list.append(throwaway);
throwaway.remove();

// --- events -----------------------------------------------------------------
// addEventListener says: when this happens to this element, run this function.
// The function is not called now — it is handed over, to be called later.
// This is module 02's "functions are values", finally paying off.
let clicks = 0;

document.querySelector("#add").addEventListener("click", () => {
  clicks = clicks + 1;
  list.append(makeCard(`Extra item ${clicks}`, 10 * clicks));
  output.textContent = `Clicks so far: ${clicks}`;
});

// A second listener, on a different button. Each one minds its own business.
document.querySelector("#clear").addEventListener("click", () => {
  // A common way to empty a container: keep removing the first child until
  // there is not one.
  for (const card of list.querySelectorAll(".card")) {
    card.remove();
  }
  output.textContent = "Cleared. Clicks so far: " + clicks;
});

console.log("example.js ran. Click the buttons and watch the page change.");
