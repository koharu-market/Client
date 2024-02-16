import { axiosInstance } from '@/lib/axios';

export async function getProducts(categoryId: string) {
  try {
    const response = await axiosInstance.get(`/product/all/${categoryId}`);
    const products = response.data;
    return products;
  } catch (error) {
    console.error(error);
  }
}
