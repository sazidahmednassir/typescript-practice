// ==========================================
// Tuples in TypeScript
// ==========================================
// A tuple is a typed array with a fixed number of elements whose types are known at specific positions.

// 1. Two-element Tuple: Exactly [string, number]
let person: [string, number] = ["Naveen", 100];

// 2. Three-element Tuple: Exactly [string, number, boolean]
let users: [string, number, boolean] = ["Naveen", 100, true];

// Iterating over tuple elements
for (const user of users) {
  console.log(`user ... ${user}`);
}

// Note: In TypeScript, array methods like .push() can mutate tuples at runtime,
// but pushed elements must match the union of the tuple's element types (string | number | boolean).
users.push("Ahmed", 200, false);

// 3. Array of Tuples: '[string, number][]' means a list of [string, number] pairs
let data: [string, number][] = [
  ["Naveen", 100],
  ["Sazid", 300],
];

// Destructuring tuple elements in a loop
for (const [name, id] of data) {
  console.log(`name:${name}, id :${id}`);
}

// Iterating over the modified tuple
for (const user of users) {
  console.log(`user ... ${user}`);
}
