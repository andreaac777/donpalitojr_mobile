export type Product = {
  id: number;
  image: string | null;
  name: string;
  price: number;
};

export type CartItem = {
  id: string;
  product: Product;
  product_id: number;
  quantity: number;
};

export const OrderStatusList: OrderStatus[] = [
  'Procesando',
  'En Camino',
  'Entregado',
];

export type OrderStatus = 'Procesando' | 'En Camino' | 'Entregado';

export type Order = {
  id: number;
  created_at: string;
  total: number;
  user_id: string;
  status: OrderStatus;

  order_items?: OrderItem[];
};

export type OrderItem = {
  id: number;
  product_id: number;
  products: Product;
  order_id: number;
  quantity: number;
};

export type Profile = {
  id: string;
  group: string;
};
