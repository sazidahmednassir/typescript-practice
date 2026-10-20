// ==========================================
// Basic Variable Types and Functions in TypeScript
// ==========================================

// 1. Primitive Types
let age: number = 20;               // Numeric type (integers and floating points)
let firstName: string = "Nassir";   // String type
let isActive: boolean = true;       // Boolean type (true / false)

// 2. Array Type
let hobbies: string[] = ["reading", "coding", "travelling"]; // Array of strings

for (const hobby of hobbies) {
  console.log(hobby);
}

console.log(age);
console.log(firstName);
console.log(isActive);

// 3. Null and Undefined Types
let city: null = null;              // Explicit null
let country: undefined = undefined; // Explicit undefined

// 4. Any Type (allows reassignment to any type, disabling type checks)
let value: any = 80;
value = "Sazid";
value = true;

// 5. Function returning 'void' (does not return a value)
function printHello(): void {
  console.log("hello from the void");
}

// 6. Function with explicit return type 'number'
function getNumber(): number {
  return 123;
}

// 7. Function returning 'any'
function getAnyValue(): any {
  return "testing number is " + 23;
}

console.log(getAnyValue());

// 8. Function with typed parameters and inferred return type (number)
function addition(a: number, b: number) {
  return a + b;
}

console.log(addition(58, 98));
