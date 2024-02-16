import { axiosInstance } from '@/lib/axios';

export async function getReviews(productId: string) {
  try {
    const response = await axiosInstance.get(`/review/${productId}`);
    const product = response.data;
    return product;
  } catch (error) {
    console.error(error);
  }
}
