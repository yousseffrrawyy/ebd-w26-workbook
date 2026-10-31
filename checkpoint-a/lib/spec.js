// Turns a seed into YOUR version of the checkpoint task.
//
// You may read this file. It contains no answers — only the rules that decide
// which city, which status, which summary and which wording your spec asks
// for. Your seed comes from your GitHub username, so your task differs from
// everyone else's.
//
// Both generate.js (which writes spec.md) and the tests use this one file, so
// the spec you are given and the spec you are marked against cannot disagree.

export const CITIES = ["Cairo", "Alexandria", "Giza", "Mansoura"];
export const STATUSES = ["paid", "pending", "cancelled"];

export const SUMMARIES = [
  {
    kind: "revenue",
    title: "total revenue",
    rule: "Add up `price * quantity` for every order in the list.",
    compute: (orders) =>
      orders.reduce((total, order) => total + order.price * order.quantity, 0),
  },
  {
    kind: "items",
    title: "number of items",
    rule: "Add up `quantity` for every order in the list.",
    compute: (orders) => orders.reduce((total, order) => total + order.quantity, 0),
  },
  {
    kind: "highest",
    title: "highest single price",
    rule:
      "The largest `price` of any one order in the list. " +
      "Ignore quantity. For an empty list, the answer is 0.",
    compute: (orders) =>
      orders.reduce((best, order) => (order.price > best ? order.price : best), 0),
  },
];

export const LABELS = [
  {
    shape: "{student} ordered {quantity} x {item}",
    build: (o) => `${o.student} ordered ${o.quantity} x ${o.item}`,
  },
  {
    shape: "{quantity} x {item} for {student}",
    build: (o) => `${o.quantity} x ${o.item} for ${o.student}`,
  },
  {
    shape: "{student}: {item} x{quantity}",
    build: (o) => `${o.student}: ${o.item} x${o.quantity}`,
  },
  {
    shape: "{item} x{quantity} ordered by {student}",
    build: (o) => `${o.item} x${o.quantity} ordered by ${o.student}`,
  },
];

export const MISSING = [
  { shape: "No order with id {id}", build: (id) => `No order with id ${id}` },
  { shape: "Order {id} not found", build: (id) => `Order ${id} not found` },
  { shape: "Could not find order {id}", build: (id) => `Could not find order ${id}` },
  { shape: "Missing order: {id}", build: (id) => `Missing order: ${id}` },
];

export const FIELD_SETS = [
  ["student", "item"],
  ["item", "quantity"],
  ["student", "city"],
  ["item", "price"],
];

// Different slices of the same number, so two usernames that happen to share
// one choice almost never share the next.
export function deriveSpec(seed) {
  return {
    seed,
    city: CITIES[seed % CITIES.length],
    status: STATUSES[Math.floor(seed / 4) % STATUSES.length],
    summary: SUMMARIES[Math.floor(seed / 16) % SUMMARIES.length],
    label: LABELS[Math.floor(seed / 64) % LABELS.length],
    missing: MISSING[Math.floor(seed / 256) % MISSING.length],
    fields: FIELD_SETS[Math.floor(seed / 1024) % FIELD_SETS.length],
  };
}

// What `myOrders` is supposed to return, given the whole list.
export function expectedMyOrders(orders, spec) {
  return orders.filter(
    (order) => order.city === spec.city && order.status === spec.status
  );
}

// What `toJsonLines` is supposed to return.
export function expectedJson(orders, spec) {
  return JSON.stringify(
    orders.map((order) => {
      const picked = {};
      for (const field of spec.fields) {
        picked[field] = order[field];
      }
      return picked;
    })
  );
}
