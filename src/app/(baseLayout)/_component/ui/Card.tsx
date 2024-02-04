import { Product } from '@/types/Product';
import Image from 'next/image';
import Score from '../../../../components/common/Score';
import Link from 'next/link';
import calculateDiscountRate from '@/lib/calculateDiscountRate';

interface Props {
  product: Product;
}

export default function Card({ product }: Props) {
  return (
    <Link key={product.id} href={`/products/${product.id}`} className="group">
      <div className="relative w-full pt-[100%] overflow-hidden rounded bg-gray-200">
        <Image
          fill
          priority
          sizes="(max-width: 480px) 480px, 600px"
          src={product.img1}
          alt={product.name}
          style={{ objectFit: 'cover' }}
          className="group-hover:opacity-75"
        />
      </div>
      <div className="mt-2 truncate">
        <span className="text-sm text-gray-700 ">{product.name}</span>
      </div>
      <p className="mt-1">
        {product.type4 === 'Y' && (
          <span className="font-medium mr-1 text-red-600">{calculateDiscountRate(product.price, product.sale)}%</span>
        )}
        <span className="font-medium text-gray-900">{product.sale.toLocaleString('ko-KR')}</span>
        <span className="text-sm ml-[2px]">원</span>
      </p>
      <Score product={product} />
    </Link>
  );
}
