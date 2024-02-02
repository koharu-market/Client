'use client';

import { Element } from 'react-scroll';
import Info from './Info';
import Review from './Review';
import Question from './Question';
import Delivery from './Delivery';

interface Props {
  content: string;
}

export default function ProductDetail({ content }: Props) {
  return (
    <div>
      <Element name="tab1">
        <Info content={content} />
      </Element>
      <Element name="tab2">
        <Review />
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
