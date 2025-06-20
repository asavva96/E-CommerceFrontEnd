export interface Item {
  id?: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  availableQty?: number;
  rating?: number;
  brand: string;
  image?: string;
}
