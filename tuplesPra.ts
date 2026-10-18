type Item = [string, number, boolean];

const item1: Item = ["Sazid", 25, true];

console.log(item1);

type Division = [number, number];

function divide(a: number, b: number): Division {
  return [Math.floor(a / b), a % b];
}

const result = divide(10, 3);
console.log(`Quotient: ${result[0]}, Remainder: ${result[1]}`);
