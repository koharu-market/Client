'use client';

import { Product, ProductDetail } from '@/types/Product';
import Buttons from './Buttons';
import Select from '../common/Select';
import SellingOption from '../common/SellingOption';
import TotalPrice from '../common/TotalPrice';

// interface Option {
//   value: string;
//   label: string;
// }

// const options: Option[] = [
//   { value: 'option1', label: 'Option 1' },
//   { value: 'option2', label: 'Option 2' },
//   { value: 'option3', label: 'Option 3' },
// ];

interface Props {
  product: ProductDetail;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function PurchaseInfo({ product, count, setCount }: Props) {
  // const [selectedOption, setSelectedOption] = useState<null | Option['value']>(null);

  // const handleSelectChange = (selectedValue: string) => {
  //   setSelectedOption(selectedValue);
  // };
  return (
    <div>
      {/* <div>
        <span className="font-semibold">옵션 선택</span>
      </div>
      <div className="mt-4">
        <Select options={options} onChange={handleSelectChange} value={selectedOption} />
      </div> */}
      <div>
        <SellingOption name={product.name} sale={product.sale} count={count} setCount={setCount} />
      </div>
      <div className="mt-6">
        <TotalPrice sale={product.sale} count={count} />
      </div>
      <div className="mt-6">
        <Buttons />
      </div>
    </div>
  );
}
