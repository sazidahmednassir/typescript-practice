// ==========================================
// Conditional Statements (if / else) in TypeScript
// ==========================================

// 1. Basic if...else with string equality check
let nameValue: string = "Nassir";

if (nameValue === "Sazid") {
  console.log("Name is Sazid");
} else {
  console.log("Name is not Sazid");
}

// 2. Declaring multiple numeric variables in a single 'let' statement
let x: number = 10,
  y = 20; // 'y' is inferred as type 'number'

// Comparing two numbers
if (x > y) {
  console.log("x is bigger");
} else {
  console.log("y is bigger");
}

// 3. Multi-condition if...else if...else with Logical AND (&&) operator
// Finds the greatest of three numbers: a, b, and c
let a: number = 10,
  b = 30,
  c = 50;

if (a > b && a > c) {
  console.log("a is bigger: " + a);
} else if (b > a && b > c) {
  console.log("b is bigger: " + b);
} else {
  console.log("c is bigger: " + c);
}

// 4. Ternary Operator (condition ? expressionIfTrue : expressionIfFalse):
// A compact one-line shorthand for a simple if...else statement
x > y ? console.log("x is bigger: " + x) : console.log("y is bigger: " + y);

// 5. Multi-branch if...else if...else ladder (testing multiple string values)
let browser: string = "edge";
if (browser === "edge") {
  console.log("edge is running");
} else if (browser === "chrome") {
  console.log("chrome is running");
} else if (browser === "firefox") {
  console.log("firefox is running");
} else {
  console.log("browser is not running");
}

// 6. Simple binary ternary operator: (condition ? ifTrue : ifFalse)
browser === "chrome" ? console.log("chrome") : console.log("not chrome");

// 7. Chained (Nested) Ternary Operator:
// Shorthand equivalent to the if...else if...else ladder above
browser === "chrome"
  ? console.log("chrome")
  : browser === "edge"
    ? console.log("edge")
    : browser === "firefox"
      ? console.log("firefox")
      : console.log("browser is not running");

