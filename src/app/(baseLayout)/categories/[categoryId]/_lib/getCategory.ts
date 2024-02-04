import { axiosInstance } from '@/lib/axios';

export async function getCategory(categoryId: string) {
  try {
    const response = await axiosInstance.get(`/category/${categoryId}`);
    const products = response.data;

    return products;
  } catch (error) {
    console.error(error);
  }
}
