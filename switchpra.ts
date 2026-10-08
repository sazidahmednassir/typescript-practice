// ==============================================================================
// PART 1: MATCHING TEXT (STRINGS)
// ==============================================================================

// 1. Create a variable to hold the day name as text
let myDay: string = "Nassir";

// 2. We convert the text to lowercase ("nassir") so capitalization doesn't matter
switch (myDay.toLowerCase()) {
  case "sunday":
    console.log("It is Sunday");
    break; // 'break' stops here and exits the switch so it doesn't run the lines below

  case "monday":
    console.log("It is Monday");
    break;

  case "tuesday":
    console.log("It is Tuesday");
    break;

  case "wednesday":
    console.log("It is Wednesday");
    break;

  case "thursday":
    console.log("It is Thursday");
    break;

  case "friday":
    console.log("It is Friday");
    break;

  case "saturday":
    console.log("It is Saturday");
    break;

  default:
    // 'default' runs if none of the cases matched (for example, "Nassir" is not a day)
    console.log("It is not a day");
    break;
}

// ==============================================================================
// PART 2: MATCHING EXACT NUMBERS
// ==============================================================================

// 1. Create a variable to hold an exact exam mark
let marks: number = 100;

// 2. The switch compares 'marks' directly to exact numbers (100, 90, 80...)
switch (marks) {
  case 100:
    console.log("You got A+");
    break;

  case 90:
    console.log("You got A");
    break;

  case 80:
    console.log("You got B");
    break;

  case 70:
    console.log("You got C");
    break;

  case 60:
    console.log("You got D");
    break;

  case 50:
    console.log("You got F");
    break;

  default:
    // Runs if marks is any other number (like 95, 42, or 105)
    console.log("Invalid marks");
    break;
}

// ==============================================================================
// PART 3: CHECKING RANGES WITH 'switch (true)'
// ==============================================================================

// 1. A student's score
let point: number = 90.0;

// 2. Why 'switch (true)'?
//    Conditions like (point >= 90) answer with TRUE or FALSE.
//    'switch (true)' tells JavaScript: "Look down the list and run the first case that is TRUE!"
switch (true) {
  // Is 90 between 90 and 100? Yes (true) -> MATCH!
  case point >= 90 && point <= 100:
    console.log("You got A+");
    break;

  // Is point between 80 and 89.9?
  case point >= 80 && point < 90:
    console.log("You got A");
    break;

  // Is point between 70 and 79.9?
  case point >= 70 && point < 80:
    console.log("You got B");
    break;

  // Is point between 60 and 69.9?
  case point >= 60 && point < 70:
    console.log("You got C");
    break;

  // Is point between 50 and 59.9?
  case point >= 50 && point < 60:
    console.log("You got D");
    break;

  default:
    // Runs if point is less than 50 or greater than 100
    console.log("Invalid marks");
    break;
}

// ==============================================================================
// PART 4: ORDER STATUS (USING TYPESCRIPT ENUM)
// ==============================================================================

// 1. Define an enum for order status options.
//    'enum' creates both runtime values (OrderStatus.Pending) and a type (OrderStatus) in one step.
//    Note: Run with `npx tsx switchpra.ts` because TypeScript enums generate runtime code.
enum OrderStatus {
  Pending = "PENDING",
  Processing = "PROCESSING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED",
}

// 2. A function that takes an order status and prints what to do
function handleOrderStatus(status: OrderStatus): void {
  // 'status' holds one OrderStatus enum value. We compare it to our choices above.
  switch (status) {
    case OrderStatus.Pending:
      console.log("Order received. Awaiting payment confirmation.");
      break;

    case OrderStatus.Processing:
      console.log("Payment confirmed. Packaging your items.");
      break;

    case OrderStatus.Shipped:
      console.log("Your package is on the way with the courier.");
      break;

    case OrderStatus.Delivered:
      console.log("Package delivered successfully! Thank you for shopping.");
      break;

    case OrderStatus.Cancelled:
      console.log("Order has been cancelled. Refund initiated.");
      break;

    default:
      console.log("Unknown order status.");
      break;
  }
}

// Test Part 4 with a shipped order
let myOrder: OrderStatus = OrderStatus.Shipped;
handleOrderStatus(myOrder);

// ==============================================================================
// PART 5: TRAFFIC LIGHT (RETURNING VALUES DIRECTLY FROM SWITCH USING ENUM)
// ==============================================================================

// 1. Define the TrafficLight enum
enum TrafficLight {
  Red = "RED",
  Yellow = "YELLOW",
  Green = "GREEN",
}

// 2. Function that returns an instruction message based on the signal
function getTrafficAction(signal: TrafficLight): string {
  switch (signal) {
    case TrafficLight.Red:
      return "STOP: Do not proceed.";

    case TrafficLight.Yellow:
      return "CAUTION: Prepare to stop.";

    case TrafficLight.Green:
      return "GO: Safe to proceed.";
  }
}

// Test Part 5 with a yellow light
let signal: TrafficLight = TrafficLight.Yellow;
console.log(getTrafficAction(signal));
