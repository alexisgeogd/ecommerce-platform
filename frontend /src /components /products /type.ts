export type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
  category: string;
  stock: number;
  rating?: number;
  image: string;
};

export type ProductListProps = {
  products: Product[];
  onAddToCart?: (productId: number) => void;
};
