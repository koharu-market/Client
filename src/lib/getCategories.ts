import { axiosInstance } from './axios';

export async function getCategories() {
  try {
    const response = await axiosInstance.get('/category');
    const categories = response.data;
    return categories;
  } catch (error) {
    console.error(error);
  }
}
