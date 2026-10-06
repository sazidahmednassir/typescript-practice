// ==========================================
// Union Types in TypeScript
// ==========================================

// 1. Union Type Variable: Can hold either a string OR a number
let userId: string | number;
userId = 123;         // Valid: number
userId = "BS23SZNX";   // Valid: string

// 2. Type Narrowing with Union Types:
// Using 'typeof' allows TypeScript to know the exact type inside each branch
function getUserInformation(id: string | number) {
  if (typeof id === "string") {
    // Inside this block, TypeScript treats 'id' as a string
    console.log("Id String are working");
  } else {
    // Inside this block, TypeScript knows 'id' must be a number
    console.log("Id are working");
  }
}

// Function calls with different allowed types
getUserInformation(323);          // Works with number
getUserInformation("bs23.sazid"); // Works with string
