import { Review } from '@/types/Review';

interface Props {
  targetScore: number;
  reviews: Review[];
}

export default function ReviewFeed({ targetScore, reviews }: Props) {
  const numberOfReviews = reviews.filter(review => targetScore === review.score).length;

  return (
    <div className="flex items-center gap-3">
      <span>{targetScore}점</span>
      <span className="relative md:w-[180px] w-[90px] rounded-full bg-slate-300 h-1 overflow-hidden">
        <span
          style={{ width: `${(numberOfReviews / reviews.length) * 100}%` }}
          className={`absolute left-0 top-0 h-full bg-primary-400`}
        ></span>
      </span>
      <span>{numberOfReviews}</span>
    </div>
  );
}
