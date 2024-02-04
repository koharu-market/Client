import ProductInfo from './_component/ProductInfo';
import Tabs from './_component/ui/Tabs';
import ProductDetail from './_component/ProductDetail';
import { getProduct } from './_lib/getProduct';

interface Props {
  params: {
    productId: string;
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { productId } = params;
  const product = await getProduct(productId);

  if (!product) return <div>해당 상품이 없습니다.</div>;
  return (
    <main className="container pb-20">
      <ProductInfo product={product} />
      <Tabs />
      <ProductDetail content={product.content} />
    </main>
  );
}
