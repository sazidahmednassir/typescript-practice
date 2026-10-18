const name: string[] = [];
name.push("Sazid");
name.push("Fahim");
name.push("Nassir");
console.log(name);

type User = {
  id: string;
  name: string;
};

const person1: User = {
  id: "123rtc",
  name: "Sazid Ahmed Nassir",
};

const person2: User = {
  id: "123rtcaaaaaa",
  name: "Sazid Ahmed Nassir",
};

console.log(person1.id);
console.log(person2.id);

interface Product {
  id: number;
  name: string;
}

const product1: Product = {
  id: 1,
  name: "Laptop",
};

console.log(product1.id);
console.log(product1.name);
