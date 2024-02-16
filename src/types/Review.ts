export interface Review {
  id: number;
  productId: number;
  memberId: string;
  score: number;
  content: string;
  img1?: string;
  img2?: string;
  img3?: string;
  createAt: Date;
  updateAt: Date;
}
