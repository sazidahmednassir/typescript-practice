// ==============================================================================
// PART 1: ASYNC FUNCTION & PROMISE
// ==============================================================================
// 1. 'async' keyword: Automatically wraps the return value inside a Promise.
// 2. 'Promise<number>': Indicates that this function will eventually resolve to a number.
// 3. Even though 'return a + b' returns a number, because of 'async' it returns Promise<number>.
async function add(a: number, b: number): Promise<number> {
  return a + b;
}

// ------------------------------------------------------------------------------
// Consuming Async Functions with 'await'
// ------------------------------------------------------------------------------
// 'await' pauses execution until the Promise resolves and extracts the value (3).
// Note: 'await' must be used inside an 'async' function.
async function main() {
  const x = await add(1, 2);
  console.log(x); // Output: 3 (unwrapped value)
}
main();

// ------------------------------------------------------------------------------
// Calling Async Function Directly (Without 'await')
// ------------------------------------------------------------------------------
// Calling an async function without 'await' returns the unresolved Promise object.
console.log(add(1, 2)); // Output: Promise { 3 } (Promise container holding value 3)

// ==============================================================================
// PART 2: REGULAR FUNCTION WITH CONDITIONAL LOGIC (BOOLEAN RETURN)
// ==============================================================================
// 1. Parameter: 'name: string'
// 2. Return type: ': boolean' (function must return true or false)
// 3. Logic: Checks user status using if / else-if / else conditions
function isUserActive(name: string): boolean {
  if (name === "Nassir") {
    return true; // Returns true if name is "Nassir"
  } else if (name === "Ahmed") {
    return false; // Returns false if name is "Ahmed"
  } else {
    return false; // Default fallback for any other name
  }
}

console.log(isUserActive("Nassir")); // Output: true

// ==============================================================================
// PART 3: ARROW FUNCTION WITH 'void' RETURN TYPE
// ==============================================================================
// 1. Arrow function syntax: '(params) => { body }'
// 2. ': void' return type: The function does not return any value, only performs an action (side effect)
// 3. Template Literals: `${name}` allows embedding variables inside backtick strings (``)
const info = (name: string, email: string): void => {
  console.log(`Name: ${name}, Email: ${email}`);
};

// Calling the arrow function
info("Nassir", "sazid34@yopmail.com"); // Output: Name: Nassir, Email: sazid34@yopmail.com

