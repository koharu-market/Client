'use client';

import { useCallback, useState, useEffect } from 'react';
import CreateReview from './CreateReview';
import Score from '@/components/ui/Score';
import { axiosInstance } from '@/lib/axios';
import { Review as IReview } from '@/types/Review';
import ReviewFeed from './ReviewFeed';

interface Props {
  productId: number;
  score: number;
  reviewCount: number;
}

export default function Review({ productId, score, reviewCount }: Props) {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getReview = async () => {
      const response = await axiosInstance.get(`/review/${productId}`);
      const data = response.data;
      setReviews(data);
    };
    getReview();
  }, [productId]);

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
      <div className="mt-5">
        <div className="bg-primary-100 rounded-md md:py-12 py-8 flex text-slate-500 text-sm">
          <div className="flex md:flex-row flex-col items-center md:gap-5 gap-0 md:w-1/2 w-[136px] justify-center">
            <div className="md:order-1 order-2 md:scale-100 scale-75">
              <Score score={score} size="base" />
            </div>
            <span className="md:order-2 order-1 font-bold md:text-[34px] text-2xl text-[#424242] mt-2">
              {score.toFixed(1)}
            </span>
          </div>
          <div className="border-l-[1px] border-l-slate-300 flex justify-center flex-1">
            <div>
              {[5, 4, 3, 2, 1].map(index => (
                <ReviewFeed key={index} targetScore={index} reviews={reviews} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
