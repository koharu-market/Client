import { FiMinus, FiPlus } from 'react-icons/fi';

interface Props {
  name: string;
  sale: number;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function SellingOption({ name, sale, count, setCount }: Props) {
  const increaseCount = () => {
    setCount(prev => {
      if (count <= 1) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  };
  const decreaseCount = () => {
    setCount(prev => prev + 1);
  };
  return (
    <div>
      <div className="rounded bg-gray-100 p-3">
        <div>
          <span className="text-sm text-slate-600">{name}</span>
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-end">
            <div className="w-20 px-2 py-2 flex justify-between border rounded-md items-center bg-white">
              <button className="text-sm" onClick={increaseCount}>
                <FiMinus />
              </button>
              <span className="text-sm">{count}</span>
              <button className="text-sm" onClick={decreaseCount}>
                <FiPlus />
              </button>
            </div>
            <div>
              <span className="font-semibold">{(sale * count).toLocaleString('ko-KR')}원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
