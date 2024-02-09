import axios from 'axios';

export async function getCategories() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URI}/category`);
    const categories = response.data;
    return categories;
  } catch (error) {
    console.error(error);
  }
}
