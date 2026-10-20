// 1. Variable typed as 'any', disabling compile-time type checking
let totalBill: any = 123;

// Type assertion using 'as number':
// Tells TypeScript to treat 'totalBill' as a number during compilation.
// (Note: Type assertions only affect compile-time checks, not runtime values).
let finalBill = (totalBill as number) + 200;
console.log("Final Bill", finalBill);

// 2. Another variable typed as 'any'
let someValue: any = "hello sazid from the nassir";

// Standalone type assertion (note: this does not change the type of 'someValue' itself)
someValue as string;

// Accessing the '.length' property; using '(someValue as string).length' is the standard way to get string autocompletion/type checks
let someLength = (someValue as string).length;

console.log(someValue);
console.log(someLength);
