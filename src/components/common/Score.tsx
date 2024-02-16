import { Product } from '@/types/Product';

interface Props {
  score: number;
  reviewCount: number;
}

export default function Score({ score, reviewCount }: Props) {
  return (
    <div className="mt-1 inline-flex items-center gap-2">
      <span
        style={{
          backgroundImage: `url('/score.png')`,
          backgroundSize: '70px',
        }}
        className="bg-no-repeat inline-block w-[70px] h-4 relative"
      >
        <span
          style={{
            backgroundImage: `url('/score.png')`,
            backgroundSize: '70px',
            backgroundPositionY: '-17px',
            width: `${score * 20}%`,
          }}
          className={`bg-no-repeat inline-block h-4 absolute`}
        ></span>
      </span>
      <span className="text-xs text-slate-400">({reviewCount ? reviewCount : 0})</span>
    </div>
  );
}
