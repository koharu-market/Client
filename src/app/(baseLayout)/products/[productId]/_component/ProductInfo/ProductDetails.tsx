import Rating from '@/components/common/Rating';
import { Product } from '@/types/Product';

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  return (
    <div>
      <h2 className="md:text-2xl text-lg font-medium">{product.name}</h2>
      <div className="mt-1">
        <a href="#rating">
          <Rating product={product} />
        </a>
      </div>
      <div className="md:mt-2">
        <span className="md:text-3xl text-xl font-semibold">{product.price.toLocaleString('ko-KR')}</span>
        <span className="md:text-xl">원</span>
      </div>
      <div className="mt-4">
        <div className="flex border-b py-3">
          <span className="w-[84px] font-semibold">배송비</span>
          <div>
            <div>
              <span>3,500원</span>
            </div>
            <div>
              <span className="text-sm mt-1 text-slate-400">50,000원 이상 무료배송</span>
            </div>
          </div>
        </div>
        <div className="flex border-b py-3">
          <span className="w-[84px] font-semibold">배송시작</span>
          <span className="flex-1">
            평균 <span className="font-semibold">3일</span> / 최대 7일 이내
          </span>
        </div>
      </div>
    </div>
  );
}
