export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  tag?: string;
  price: number;
  originalPrice?: number;
  gsm?: number;
  sku: string;
  images: {
    hero: string;
    front: string;
    back: string;
    weave: string;
    flat: string;
  };
  alt: string;
  colors: {
    name: string;
    hex: string;
  }[];
  sizes: string[];
  inStock: boolean;
  rating: number;
  reviewsCount: number;
  badge?: string;
  kokoInstallment?: number;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
  sku: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
  sizePurchased: string;
}
