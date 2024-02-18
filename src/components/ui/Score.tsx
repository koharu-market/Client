import { Product } from '@/types/Product';

type Size = keyof typeof scoreTheme.size;
interface Props {
  score: number;
  reviewCount?: number;
  size?: Size;
}

export default function Score({ score, reviewCount, size = 'sm' }: Props) {
  return (
    <div className="mt-1 inline-flex items-center gap-2">
      <span
        style={{
          backgroundImage: `url('/score.png')`,
          backgroundSize: scoreTheme.size[size].bgSize,
        }}
        className={`bg-no-repeat inline-block relative ${scoreTheme.size[size].className}`}
      >
        <span
          style={{
            backgroundImage: `url('/score.png')`,
            backgroundSize: scoreTheme.size[size].bgSize,
            backgroundPositionY: scoreTheme.size[size].bgPosY,
            width: `${score * 20}%`,
          }}
          className={`bg-no-repeat inline-block absolute ${scoreTheme.size[size].className}`}
        ></span>
      </span>
      {reviewCount && <span className="text-xs text-slate-400">({reviewCount ? reviewCount : 0})</span>}
    </div>
  );
}

const scoreTheme = {
  size: {
    sm: {
      bgSize: '70px',
      className: 'w-[70px] h-4',
      bgPosY: '-17px',
    },
    base: {
      bgSize: '140px',
      className: 'w-[140px] h-7',
      bgPosY: '-35px',
    },
  },
};
