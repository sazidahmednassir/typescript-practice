import data from "./nassir.json";

// How a 'for' loop runs:
// 1. Start:      let i: number = 0  (runs ONCE at beginning)
// 2. Check:      i <= 10            (before every step: true = continue, false = stop)
// 3. Do work:    console.log(i)     (runs the code inside { })
// 4. Next:       i++                (adds 1 to i, then goes back to step 2)

for (let i: number = 0; i <= 10; i++) {
  console.log(i); // Prints numbers from 0 to 10
}

// ==============================================================================
// FOR...OF LOOP BREAKDOWN
// ==============================================================================
// Used to directly iterate over the VALUES of an array (no index counter needed)
// 1. Target array:   'values' containing [30, 50, 60, 60]
// 2. Loop variable:  'const value' holds the current item on each step
// 3. Execution:      Takes 30 -> runs body, takes 50 -> runs body, etc.

const values: number[] = [30, 50, 60, 60];

for (const value of values) {
  console.log("for of loop value: " + value);
}

// ==============================================================================
// FOR...IN LOOP BREAKDOWN
// ==============================================================================
// Used to iterate over the KEYS / INDICES of an array or properties of an object
// Note: In arrays, it returns index strings ("0", "1", "2", "3"), NOT the values!
// 1. Target array:   'ages' containing [20, 30, 80, 90]
// 2. Loop variable:  'const ag' receives the INDEX of each element ("0", "1", ...)
// 3. To get value:   Use ages[ag] if you need the element at that index

const ages: number[] = [20, 30, 80, 90];

for (const ag in ages) {
  console.log("for in loop value :" + ag); // Prints index: 0, 1, 2, 3
}

// ==============================================================================
// FOR...OF LOOP ON STRINGS BREAKDOWN
// ==============================================================================
// Used to iterate character-by-character over a string (including spaces)
// 1. Target string:  'info' = "Hello Nassir"
// 2. Loop variable:  'const ch' holds each character in sequence ('H', 'e', 'l', ...)
// 3. Execution:      Runs once for every single character

let info: string = "Hello Nassir";

for (const ch of info) {
  console.log("info character: " + ch); // Prints each character
}

// ==============================================================================
// WHILE LOOP BREAKDOWN
// ==============================================================================
// Runs continuously as long as the condition evaluates to true
// 1. Initialize:     let p = 1 (counter starts at 1)
// 2. Check:          p <= 10 (evaluated before every iteration)
// 3. Increment:      p++ (increments first, so p becomes 2 on first print)
// 4. Do work:        console.log prints from 2 up to 11

let p: number = 1;

while (p <= 10) {
  p++;
  console.log("while loop count : " + p); // Prints 2 to 11
}

// ==============================================================================
// FOR...OF ON NESTED JSON DATA BREAKDOWN
// ==============================================================================
// Used to access and extract properties from an array of objects inside imported JSON
// 1. Data source:    'data.organization.departments' (Array of department objects)
// 2. Loop variable:  'const dept' holds each department object per iteration
// 3. Property access:'dept.budget' (or dept.deptName, dept.manager, dept.teams)
// 4. Execution:      Iterates through each department and prints its budget

for (const dept of data.organization.departments) {
  console.log("Department Budget: $" + dept.budget); // Prints 2500000
}

// ==============================================================================
// DO...WHILE LOOP BREAKDOWN
// ==============================================================================
// Key Feature: Always runs the body AT LEAST ONCE before checking the condition
// 1. Initialize:     let d: number = 1 (counter starts at 1)
// 2. Do work first:  console.log prints 'd' (1 on first run)
// 3. Increment:      d++ (d becomes 2)
// 4. Check after:    d <= 10 (evaluated AFTER body runs; if true, repeats)

let d: number = 1;

do {
  console.log("the vaule is: " + d); // Prints from 1 to 10
  d++;
} while (d <= 10);

