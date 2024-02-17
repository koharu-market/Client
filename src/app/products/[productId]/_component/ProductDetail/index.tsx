'use client';

import { Element } from 'react-scroll';
import Info from './Info';
import Review from './Review';
import Question from './Question';
import Delivery from './Delivery';
import { ProductDetail as IProductDetail } from '@/types/Product';

interface Props {
  product: IProductDetail;
}

export default function ProductDetail({ product }: Props) {
  return (
    <div>
      <Element name="tab1">
        <Info content={product.content} />
      </Element>
      <Element name="tab2">
        <Review productId={product.id} score={product.score} reviewCount={product.reviewCount} />
      </Element>
      <Element name="tab3">
        <Question />
      </Element>
      <Element name="tab4">
        <Delivery />
      </Element>
    </div>
  );
}
