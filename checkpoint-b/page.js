// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

/**
 * Draws an array of items into #list, replacing whatever was there.
 * Each item becomes an <li class="product"> holding just its name.
 *
 * renderItems([{ id: 1, name: "Notebook", price: 45, ... }]) puts this in #list:
 *   <li class="product">Notebook</li>
 *
 * Calling it again replaces the old items; an empty array empties the list.
 *
 * @param {Array<{name: string}>} list
 * @returns {void}
 */
export function renderItems(list) {
  const target = document.querySelector("#list");

  for (const li of target.querySelectorAll("li")) {
    li.remove();
  }

  for (const item of list) {
    const li = document.createElement("li");
    li.classList.add("product");
    li.textContent = item.name;
    target.append(li);
  }
}

/**
 * Only the items that are out of stock — the ones whose inStock is false.
 *
 * matching().map((item) => item.name) -> ["Backpack", "Calculator", "Lunch box"]
 *
 * @returns {Array<object>} whole item objects from items.js
 */
export function matching() {
  return items.filter((item) => item.inStock === false);
}

/**
 * Sets the page up: draws every item now, and redraws with only the matching
 * items when #filter-button is clicked.
 *
 * start() -> all 12 items on screen; click "Show matching" -> 3 items
 *
 * @returns {void}
 */
export function start() {
  renderItems(items);

  document.querySelector("#filter-button").addEventListener("click", () => {
    renderItems(matching());
  });
}

// In the browser, set the page up as soon as it loads. The tests run in Node
// (which has `process`; a browser does not) and call start() themselves.
if (typeof process === "undefined") {
  start();
}
