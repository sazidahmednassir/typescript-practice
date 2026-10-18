type User = {
  id: number;
  name: string;
  email: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  userId: number;
  total: number;
  date: string;
  status: "pending" | "shipped" | "delivered";
};

// /api/users, /api/products, /api/orders

async function getUsers(): Promise<User[]> {
  const data = await fetch("/api/users");
  return data.json();
}

async function getProducts(): Promise<Product[]> {
  const data = await fetch("/api/products");
  return data.json();
}

async function getOrders(): Promise<Order[]> {
  const data = await fetch("/api/orders");
  return data.json();
}

async function get<U>(endpoint: string): Promise<U> {
  const data = await fetch(endpoint);
  return data.json();
}

// const users = await get<User[]>("/api/users");
// const products = await get<Product[]>("/api/products");
// const orders = await get<Order[]>("/api/orders");

// console.log(users, products, orders);

// Example usage shown in tutorial:
// const users = await getUsers();
// const products = await getProducts();
// const orders = await getOrders();
