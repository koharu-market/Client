interface Props {
  sale: number;
  count: number;
}

export default function TotalPrice({ sale, count }: Props) {
  return (
    <div className="flex justify-between items-end">
      <span className="md:text-lg text-sm">총 상품 금액</span>
      <div className="text-red-600">
        <span className="font-bold md:text-3xl text-lg">
          {(sale * count >= 50000 ? sale * count : sale * count + 3500).toLocaleString('ko-KR')}
        </span>
        <span className="md:text-xl text-sm">원</span>
      </div>
    </div>
  );
}
