// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. Every order from the database. The database answers late, so await it.
export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

// 2. Only the orders from Mansoura with status "paid".
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Mansoura" && order.status === "paid"
  );
}

// 3. Total revenue: price * quantity, added up over every order.
export function summarize(orders) {
  return orders.reduce((total, order) => total + order.price * order.quantity, 0);
}

// 4. A label for one order. A missing id rejects, so catch it and answer
//    with the not-found wording instead of throwing.
export async function describeOrder(id) {
  try {
    const { item, quantity, student } = await findOrderById(id);
    return `${item} x${quantity} ordered by ${student}`;
  } catch (error) {
    return `No order with id ${id}`;
  }
}

// 5. JSON text keeping only student and item from each order, in that order.
export function toJsonLines(orders) {
  const slim = orders.map(({ student, item }) => ({ student, item }));
  return JSON.stringify(slim);
}
