// ==========================================
// Example 1: Using 'if' condition (Original)
// ==========================================

enum Browser {
  Firefox,
  Edge,
  Brave,
  Chrome = getVersion("chrome"),
}

function getVersion(browserName: string): number {
  if (browserName === "chrome") {
    return 115;
  }
  return -1;
}

console.log("--- Example 1: if condition ---");
console.log("Chrome version:", Browser.Chrome);
console.log("Full Browser enum:", Browser);
console.log("Brave value:", Browser.Brave);

// ==========================================
// Example 2: Using 'switch' statement (New)
// ==========================================
// Why switch?
// 1. Better readability when checking multiple values.
// 2. Uses 'default' as a fallback when no case matches.
// 3. '.toLowerCase()' makes the lookup case-insensitive.

enum BrowserWithSwitch {
  Firefox = getVersionWithSwitch("firefox"),
  Edge = getVersionWithSwitch("edge"),
  Brave = getVersionWithSwitch("brave"),
  Chrome = getVersionWithSwitch("Chrome"), // Handles uppercase too
}

function getVersionWithSwitch(browserName: string): number {
  switch (browserName.toLowerCase()) {
    case "chrome":
      return 115;
    case "firefox":
      return 118;
    case "edge":
      return 116;
    case "brave":
      return 114;
    default:
      // Fallback if browser is unknown
      return -1;
  }
}

console.log("\n--- Example 2: switch statement ---");
console.log("Chrome version:", BrowserWithSwitch.Chrome);
console.log("Full BrowserWithSwitch enum:", BrowserWithSwitch);
console.log("Firefox version:", BrowserWithSwitch.Firefox);

// ==========================================
// Example 3: Function taking ENUM directly
// ==========================================
enum Car {
  Bmw, // 0
  Audi, // 1
  Mercedes, // 2
  Honda, // 3
}

// The function takes the ENUM directly:
function getCar(car: Car): number {
  switch (car) {
    case Car.Bmw:
      return 115;
    case Car.Audi:
      return 118;
    case Car.Mercedes:
      return 116;
    case Car.Honda:
      return 114;
    default:
      return -1;
  }
}

// Call it anytime you need the version:
console.log("BMW version:", getCar(Car.Bmw)); // 115
console.log("Audi version:", getCar(Car.Audi)); // 118

// ==========================================
// Example 4: Environments (String Enum)
// ==========================================
// Good for: Configuration, API endpoints, deployment targets
enum Environment {
  Dev = "dev",
  Stage = "stage",
  Preprod = "preprod",
  Production = "prod",
}

function getDatabaseUrl(env: Environment): string {
  switch (env) {
    case Environment.Dev:
      return "localhost:5432/dev_db";
    case Environment.Stage:
      return "stage-db.company.com:5432";
    case Environment.Preprod:
      return "preprod-db.company.com:5432";
    case Environment.Production:
      return "prod-db.company.com:5432";
  }
}

console.log("\n--- Example 4: Environments ---");
console.log("Current Environment:", Environment.Dev); // "dev"
console.log("DB URL:", getDatabaseUrl(Environment.Dev));

// ==========================================
// Example 5: Status / Lifecycle
// ==========================================
// Good for: Tracking order state, payment flow, or task progress
enum OrderStatus {
  Pending = "PENDING",
  Processing = "PROCESSING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED",
}

function checkOrder(status: OrderStatus): string {
  switch (status) {
    case OrderStatus.Pending:
      return "Your order has been placed and is waiting for payment.";
    case OrderStatus.Shipped:
      return "Your order is on the way!";
    case OrderStatus.Delivered:
      return "Your order has arrived safely.";
    case OrderStatus.Cancelled:
      return "This order was cancelled.";
    default:
      return "Order is being processed.";
  }
}

console.log("\n--- Example 5: Order Status ---");
console.log("Order status:", OrderStatus.Shipped); // "SHIPPED"
console.log("Notification:", checkOrder(OrderStatus.Shipped));

// ==========================================
// Example 6: User Roles & Permissions
// ==========================================
// Good for: Access control, authorization, and role checks
enum Role {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

function canEditContent(role: Role): boolean {
  // Only Admins and Editors can edit content
  return role === Role.Admin || role === Role.Editor;
}

console.log("\n--- Example 6: User Roles ---");
console.log("Can Admin edit?", canEditContent(Role.Admin)); // true
console.log("Can Viewer edit?", canEditContent(Role.Viewer)); // false

// ==========================================
// Example 7: Directions (Numeric Enum)
// ==========================================
// Good for: Game movement, robot navigation, UI orientation
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

function movePlayer(
  direction: Direction,
  x: number,
  y: number,
): { x: number; y: number } {
  switch (direction) {
    case Direction.Up:
      return { x, y: y + 1 };
    case Direction.Down:
      return { x, y: y - 1 };
    case Direction.Left:
      return { x: x - 1, y };
    case Direction.Right:
      return { x: x + 1, y };
  }
}

console.log("\n--- Example 7: Directions ---");
console.log("Direction Up value:", Direction.Up); // 0
console.log("Move Up from (0,0):", movePlayer(Direction.Up, 0, 0)); // { x: 0, y: 1 }

// ==========================================
// Example 8: HTTP Status Codes (Custom Numbers)
// ==========================================
// Good for: Network APIs, status handling, error management
enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalServerError = 500,
}

function handleApiResponse(statusCode: HttpStatus): string {
  if (statusCode === HttpStatus.OK || statusCode === HttpStatus.Created) {
    return "Request succeeded!";
  } else if (statusCode === HttpStatus.NotFound) {
    return "Resource was not found (404).";
  } else if (statusCode === HttpStatus.Unauthorized) {
    return "Please log in to continue (401).";
  }
  return "An unexpected error occurred.";
}

console.log("\n--- Example 8: HTTP Status Codes ---");
console.log("HTTP OK code:", HttpStatus.OK); // 200
console.log("HTTP NotFound code:", HttpStatus.NotFound); // 404
console.log("Response message:", handleApiResponse(HttpStatus.OK));

// ==========================================
// Example 9: Days of the Week
// ==========================================
// Good for: Calendars, schedules, business days
enum Day {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}

function isWeekend(day: Day): boolean {
  return day === Day.Saturday || day === Day.Sunday;
}

console.log("\n--- Example 9: Days of the Week ---");
console.log("Monday value:", Day.Monday); // 1
console.log("Is Monday weekend?", isWeekend(Day.Monday)); // false
console.log("Is Sunday weekend?", isWeekend(Day.Sunday)); // true


