let age: number = 20;
let firstName: string = "Nassir";
let isActive: boolean = true;
let hobbies: string[] = ["reading", "coding", "travelling"];

for (const hobby of hobbies) {
  console.log(hobby);
}

console.log(age);
console.log(firstName);
console.log(isActive);

let city: null = null;
let country: undefined = undefined;

let value: any = 80;
value = "Sazid";
value = true;

function printHello(): void {
  console.log("hello from the void");
}

function getNumber(): number {
  return 123;
}

function getAnyValue(): any {
  return "testing number is " + 23;
}

console.log(getAnyValue());

function addition(a: number, b: number) {
  return a + b;
}

console.log(addition(58, 98));
