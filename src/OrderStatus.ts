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
