// ==========================================
// Arrays in TypeScript
// ==========================================

// 1. Homogeneous Array: Array containing only strings (string[])
let names: string[] = ["nassir", "sazid", "aHMED"];

// Accessing an element by index
console.log(names[2]); // "aHMED"

// Iterating over the array; TypeScript knows 'name' is string, so string methods like '.toUpperCase()' are typed and safe
for (const name of names) {
  console.log(name.toUpperCase());
}

// 2. Heterogeneous Array using Union Types:
// '(string | number | boolean)[]' allows elements that are string, number, or boolean
let values: (string | number | boolean)[] = [
  "nassir",
  123,
  true,
  "sazid",
  false,
  334324,
];

// Iterating over mixed-type array
for (const val of values) {
  console.log("Value is : ", val);
}
