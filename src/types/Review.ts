export interface Review {
  id: number;
  productId: number;
  memberId: string;
  subject: string;
  content?: string;
  img1?: string;
  img2?: string;
  img3?: string;
  createAt: Date;
  updateAt: Date;
}
