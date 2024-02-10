export interface Product {
  id: number;
  img1: string;
  name: string;
  price: number;
  sale: number;
  type4: YNType; // 할인상품
  score: number;
  reviewCount: number;
}

export interface ProductDetail {
  id: number;
  categoryId: number;
  name: string;
  content: string;
  price: number;
  sale: number;
  createdAt: Date;
  updatedAt: Date;
  count: number;
  deleted: YNType;
  images: string[];
  seoTitle: string;
  buyMinCount: number;
  buyMaxCount: number;
  displayOption: YNType;
  type1: YNType; // 추천상품
  type2: YNType; // 신상품
  type3: YNType; // 인기상품
  type4: YNType; // 할인상품
  optionSubject?: string;
  supplySubject?: string;
  score: number;
  reviewCount: number;
}

export interface ProductOption {
  id: number;
  productId: number;
  count: number;
  price: number;
  type: number;
  displayOption: YNType;
  name: string;
}
