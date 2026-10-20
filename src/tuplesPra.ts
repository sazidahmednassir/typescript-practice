//fixed array length
type Item = [string, number, boolean];

const item1: Item = ["Sazid", 25, true];

console.log(item1);

type Division = [number, number];

function divide(a: number, b: number): Division {
  return [Math.floor(a / b), a % b];
}

const result = divide(10, 3);
console.log(`Quotient: ${result[0]}, Remainder: ${result[1]}`);

//Mixed Data type

// Option 1: Array of Tuples (Best for a list of users)
type User = [number, string, boolean];

let users: User[] = [];

// Push complete tuples instead of individual values:
users.push([100, "Sazid", true]);
users.push([101, "Rahim", false]);

console.log("All users:", users);
console.log("User 1:", users[0]); // [ 100, 'Sazid', true ]

for (const [id, name, active] of users) {
  console.log(`User: ${id}, ${name}, ${active}`);
}

type P2 = [string, number];
const p1: P2 = ["nasir", 123];
console.log(p1);

const p3: [string, number, boolean] = ["sazid", 123, false];
