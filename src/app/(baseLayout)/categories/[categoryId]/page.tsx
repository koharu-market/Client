import ProductList from '../../_component/ui/ProductList';
import { getCategory } from './_lib/getCategory';

interface Props {
  params: {
    categoryId: string;
  };
}

export default async function CategoriesPage({ params }: Props) {
  const { categoryId } = params;
  const products = await getCategory(categoryId);

  return <ProductList products={products} />;
}
