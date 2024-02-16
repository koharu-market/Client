import ProductList from '../../_component/ui/ProductList';
import { getProducts } from './_lib/getProducts';

interface Props {
  params: {
    categoryId: string;
  };
}

export default async function CategoriesPage({ params }: Props) {
  const { categoryId } = params;
  const products = await getProducts(categoryId);

  return <ProductList products={products} />;
}
