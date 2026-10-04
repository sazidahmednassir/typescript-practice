let person: [string, number] = ["Naveen", 100];
let users: [string, number, boolean] = ["Naveen", 100, true];

for (const user of users) {
  console.log(`user ... ${user}`);
}

users.push("Ahmed", 200, false);

let data: [string, number][] = [
  ["Naveen", 100],
  ["Sazid", 300],
];

for (const [name, id] of data) {
  console.log(`name:${name}, id :${id}`);
}

for (const user of users) {
  console.log(`user ... ${user}`);
}
