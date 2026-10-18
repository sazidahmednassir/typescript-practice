const fruits: string[] = ["Apple", "Banana", "Orange", "Mango"];
const quantity: number[] = [1, 2, 3, 4];

function getValue<T>(items: T[]): void {
  console.log(items.map((item) => item));
}

getValue(fruits);

function getTwovalue<K, L>(fname: K[], qq: L[]): (K | L)[] {
  return [...fname, ...qq];
}

console.log(getTwovalue(fruits, quantity));
