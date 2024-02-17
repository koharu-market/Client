'use client';

import { useCallback, useState } from 'react';
import CreateReview from './CreateReview';

interface Props {
  productId: number;
  score: number;
  reviewCount: number;
}

export default function Review({ productId, score, reviewCount }: Props) {
  const [reviews, setReviews] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="product-h2">
          리뷰
          <span>({reviewCount})</span>
        </h2>
        <div>
          <button onClick={openModal} className="text-sky-500">
            리뷰 작성
          </button>
        </div>
        <CreateReview isOpen={isOpen} closeModal={closeModal} productId={productId} />
      </div>
    </div>
  );
}
