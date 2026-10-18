// Matching the tutorial: User, Product, Order types
export type User = {
  id: number;
  name: string;
  email: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
};

export type Order = {
  id: number;
  userId: number;
  total: number;
  date: string;
  status: "pending" | "shipped" | "delivered";
};
