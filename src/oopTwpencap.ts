// Note: Product only defines 'id' and 'price'.
// Variable names like 'phone' only exist in code. To print a name, add 'name: string' here!
interface Product {
  id: string;
  price: number;
}

class Cart {
  readonly id: string;
  private readonly items: Map<string, { product: Product; qty: number }> =
    new Map();
  private discount: number = 0; // 0..1

  constructor(id: string) {
    this.id = id;
  }

  add(product: Product, qty: number = 1): void {
    if (qty <= 0) throw new Error("Quantity must be positive");
    const existing = this.items.get(product.id);
    if (existing) {
      // Product already in cart: increment its existing quantity
      existing.qty += qty;
    } else {
      // New product: store in Map.
      // { product: product, qty: qty } is the exact same as ES6 shorthand { product, qty }
      this.items.set(product.id, { product: product, qty: qty });
    }
  }

  remove(productId: string): void {
    this.items.delete(productId);
  }

  applyDiscount(percent: number): void {
    if (percent < 0 || percent > 100) throw new Error("Invalid discount");
    this.discount = percent / 100;
  }

  // Read-only views of internal state — callers see data but cannot mutate it
  get itemCount(): number {
    let sum = 0;
    for (const { qty } of this.items.values()) sum += qty;
    return sum;
  }

  get total(): number {
    let raw = 0;
    for (const { product, qty } of this.items.values())
      raw += product.price * qty;
    return raw * (1 - this.discount);
  }

  // Returns all items as an array for viewing
  getItems(): { product: Product; qty: number }[] {
    return Array.from(this.items.values());
  }
}

// ==============================================================================
// DEMO: Running the Cart and printing the whole output
// ==============================================================================
const cart = new Cart("CART-101");

// 1. Define some products
const phone: Product = { id: "prod-1", price: 500 };
const headphones: Product = { id: "prod-2", price: 100 };

// 2. Add products to cart
// NOTE ON HOW ITEM COUNT BECOMES 4:
// - Step 1: cart.add(phone, 1)      --> Phone qty = 1
// - Step 2: cart.add(headphones, 2) --> Headphones qty = 2
// - Step 3: cart.add(headphones, 1) --> Headphones already in cart, so existing.qty += 1 makes qty = 3!
// - Total itemCount = 1 (phone) + 3 (headphones) = 4 total physical items.
cart.add(phone, 1); // 1 Phone = $500
cart.add(headphones, 2); // 2 Headphones = $200
cart.add(headphones, 1); // Add 1 more headphone (qty becomes 2 + 1 = 3)

// 3. View the whole output
console.log(cart);
console.log("Cart ID:", cart.id);
console.log("All Items:", cart.getItems());
console.log("Total Items Count:", cart.itemCount); // 1 + 3 = 4 items
console.log("Total Price ($):", cart.total); // $500 + $300 = $800

// 4. Apply a 10% discount
cart.applyDiscount(10);
console.log("\nAfter 10% Discount Total ($):", cart.total); // 800 * 0.9 = $720

// 5. Remove an item
cart.remove("prod-1");
console.log("\nAfter removing Phone:");
console.log("Remaining Items:", cart.getItems());
console.log("Remaining Total ($):", cart.total); // $300 - 10% = $270
