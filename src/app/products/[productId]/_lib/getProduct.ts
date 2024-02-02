import { axiosInstance } from '@/lib/axios';

export async function getProduct(productId: string) {
  try {
    const response = await axiosInstance.get(`/product/${productId}`);
    const product = response.data;
    return product;
  } catch (error) {
    console.error(error);
  }
}
