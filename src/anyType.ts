// ==========================================
// Any, Void, and Never Types in TypeScript
// ==========================================

// 1. 'any' Type: Opts out of type checking entirely.
// Can hold values of any type and re-assigned to any other type.
let num: any = 123;
num = "sazid"; // Allowed because 'num' is 'any'

// 2. 'any[]' Array: An array that can contain elements of any data type
let lang: any[] = ["sazid", "ahmed", "NASSIR"];
lang.push("bs23");

// 3. Function accepting 'any' parameters and returning a Union type (number | string)
function info(a: any, b: any): number | string {
  // Runtime type check (type narrowing)
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return "Please provide a valid number";
}

console.log(info(12, 34));               // Output: 46
console.log(info("sazid", "ahmed"));     // Output: Please provide a valid number

// 4. 'void' Return Type: Indicates the function does not return any value
function getInfo(msg: string): void {
  console.log(`Hello from void function ${msg}`);
}

getInfo("BS23");

// 5. 'never' Return Type: Represents a function that never returns normally
// (e.g., it always throws an exception or enters an infinite loop)
function getNeverType(): never {
  throw new Error("There is no value in this function");
}
