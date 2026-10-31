// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

// Draws an array of items into #list, replacing whatever was there.
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

// Only the items that are out of stock.
export function matching() {
  return items.filter((item) => item.inStock === false);
}

// Draw everything now; redraw with only the matching items on click.
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
