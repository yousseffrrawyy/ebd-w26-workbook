// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a
//
// An order looks like this:
//   { id: 7, student: "Laila Hosny", city: "Aswan", item: "Stapler",
//     quantity: 3, price: 70, status: "paid" }
// `price` is the price of ONE item, in EGP.

import { findAllOrders, findOrderById } from "./orders-db.js";

/**
 * Every order from the database. The database answers late, so await it.
 *
 * await loadOrders() -> [{ id: 1, student: "Mariam Khalid", ... }, ...]
 *
 * @returns {Promise<Array<object>>} every order, as an array
 */
export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

/**
 * Only the orders from Mansoura with status "paid".
 *
 * myOrders([
 *   { id: 28, city: "Mansoura", status: "paid", ... },
 *   { id: 31, city: "Mansoura", status: "pending", ... },
 *   { id: 1, city: "Cairo", status: "paid", ... },
 * ])
 *   -> [{ id: 28, city: "Mansoura", status: "paid", ... }]
 *
 * @param {Array<object>} orders
 * @returns {Array<object>} the whole matching orders, in the same order
 */
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Mansoura" && order.status === "paid"
  );
}

/**
 * Total revenue: price * quantity, added up over every order.
 *
 * summarize([{ price: 45, quantity: 2 }, { price: 320, quantity: 1 }]) -> 410
 * summarize([]) -> 0
 *
 * @param {Array<object>} orders
 * @returns {number} the total in EGP
 */
export function summarize(orders) {
  return orders.reduce((total, order) => total + order.price * order.quantity, 0);
}

/**
 * A label for one order, looked up by id. A missing id rejects, so it is
 * caught and answered with the not-found wording instead — this never throws.
 *
 * await describeOrder(1)    -> "Notebook x2 ordered by Mariam Khalid"
 * await describeOrder(9999) -> "No order with id 9999"
 *
 * @param {number} id
 * @returns {Promise<string>}
 */
export async function describeOrder(id) {
  try {
    const { item, quantity, student } = await findOrderById(id);
    return `${item} x${quantity} ordered by ${student}`;
  } catch (error) {
    return `No order with id ${id}`;
  }
}

/**
 * JSON text keeping only student and item from each order, in that order.
 *
 * toJsonLines([{ id: 7, student: "Laila Hosny", item: "Stapler", ... }])
 *   -> '[{"student":"Laila Hosny","item":"Stapler"}]'
 *
 * @param {Array<object>} orders
 * @returns {string} plain JSON.stringify output, no indenting
 */
export function toJsonLines(orders) {
  const slim = orders.map(({ student, item }) => ({ student, item }));
  return JSON.stringify(slim);
}
