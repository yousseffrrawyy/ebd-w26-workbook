// Turns a seed into YOUR version of the checkpoint task.
//
// You may read this file. It contains no answers — only the rules that decide
// which heading, which class name, which filter and which wording your spec
// asks for. Your seed comes from your GitHub username.
//
// generate.js and the tests both use this one file, so the spec you are given
// and the spec you are marked against cannot disagree.
import { items } from "../items.js";

export const HEADINGS = [
  "Campus Store",
  "Student Supplies",
  "The Stationery Shop",
  "GIU Market",
  "Faculty Shop",
  "The Supply Room",
  "Campus Essentials",
  "The Corner Shop",
];

export const ITEM_CLASSES = [
  "product",
  "entry",
  "tile",
  "listing",
  "goods-item",
  "row",
  "stock-line",
  "article-card",
];

export const FILTERS = [
  {
    kind: "cheap",
    title: "only the items under 100 EGP",
    rule: "Keep an item when its `price` is less than 100.",
    keep: (item) => item.price < 100,
  },
  {
    kind: "pricey",
    title: "only the items over 100 EGP",
    rule: "Keep an item when its `price` is more than 100.",
    keep: (item) => item.price > 100,
  },
  {
    kind: "in-stock",
    title: "only the items that are in stock",
    rule: "Keep an item when its `inStock` is `true`.",
    keep: (item) => item.inStock === true,
  },
  {
    kind: "sold-out",
    title: "only the items that are out of stock",
    rule: "Keep an item when its `inStock` is `false`.",
    keep: (item) => item.inStock === false,
  },
  {
    kind: "stationery",
    title: "only the stationery",
    rule: 'Keep an item when its `category` is exactly `"stationery"`.',
    keep: (item) => item.category === "stationery",
  },
  {
    kind: "electronics",
    title: "only the electronics",
    rule: 'Keep an item when its `category` is exactly `"electronics"`.',
    keep: (item) => item.category === "electronics",
  },
  {
    kind: "kitchen",
    title: "only the kitchen items",
    rule: 'Keep an item when its `category` is exactly `"kitchen"`.',
    keep: (item) => item.category === "kitchen",
  },
  {
    kind: "bags",
    title: "only the bags",
    rule: 'Keep an item when its `category` is exactly `"bags"`.',
    keep: (item) => item.category === "bags",
  },
];

export const BUTTONS = [
  { id: "filter-button", label: "Show matching" },
  { id: "apply", label: "Apply filter" },
  { id: "narrow", label: "Narrow the list" },
  { id: "pick", label: "Pick these" },
  { id: "show-some", label: "Show some" },
  { id: "run-filter", label: "Filter the list" },
  { id: "select", label: "Select these" },
  { id: "shortlist", label: "Shortlist" },
];

export const ITEM_TEXTS = [
  {
    shape: "{name}",
    example: "Notebook",
    build: (item) => `${item.name}`,
  },
  {
    shape: "{name} - {price} EGP",
    example: "Notebook - 45 EGP",
    build: (item) => `${item.name} - ${item.price} EGP`,
  },
  {
    shape: "{name} ({category})",
    example: "Notebook (stationery)",
    build: (item) => `${item.name} (${item.category})`,
  },
];

// Different slices of the same number, so two usernames that happen to share
// one choice almost never share the next.
export function deriveSpec(seed) {
  return {
    seed,
    heading: HEADINGS[seed % HEADINGS.length],
    itemClass: ITEM_CLASSES[Math.floor(seed / 8) % ITEM_CLASSES.length],
    filter: FILTERS[Math.floor(seed / 64) % FILTERS.length],
    button: BUTTONS[Math.floor(seed / 512) % BUTTONS.length],
    itemText: ITEM_TEXTS[Math.floor(seed / 4096) % ITEM_TEXTS.length],
  };
}

export function expectedAll(spec) {
  return items.map((item) => spec.itemText.build(item));
}

export function expectedFiltered(spec) {
  return items.filter(spec.filter.keep).map((item) => spec.itemText.build(item));
}

// The NAMES of the items matching() should return. Not the same thing as
// expectedFiltered, which is the text they are drawn as.
export function expectedMatchingNames(spec) {
  return items.filter(spec.filter.keep).map((item) => item.name);
}
