// 06-modules — a module written for someone else to use.

// A NAMED export: whoever imports it asks for `halfPrice` by name.
export function halfPrice(amount) {
  return amount / 2;
}

// The DEFAULT export: the importer can call it whatever they like.
const saleName = "Winter sale";
export default saleName;
