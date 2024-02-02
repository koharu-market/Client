import { axiosInstance } from '@/lib/axios';
import ProductList from '../../_component/ui/ProductList';

export default async function CategoriesPage({ params }: { params: { id: string } }) {
  const categoryId = params.id;

  const response = await axiosInstance.get(`/category/${categoryId}`);
  const products = response.data;

  return <ProductList products={products} />;
}
