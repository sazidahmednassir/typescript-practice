let names: string[] = ["nassir", "sazid", "aHMED"];
console.log(names[2]);

for (const name of names) {
  console.log(name.toUpperCase());
}

let values: (string | number | boolean)[] = [
  "nassir",
  123,
  true,
  "sazid",
  false,
  334324,
];

for (const val of values) {
  console.log("Value is : ", val);
}
