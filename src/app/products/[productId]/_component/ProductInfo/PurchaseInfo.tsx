'use client';

import { ProductDetail } from '@/types/Product';
import Buttons from './Buttons';
import Select from '../common/Select';
import SellingOption from '../common/SellingOption';
import TotalPrice from '../common/TotalPrice';
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/lib/axios';
import { Option } from '../../_types/Option';

interface Props {
  product: ProductDetail;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function PurchaseInfo({ product, count, setCount }: Props) {
  const [optionsSubject, setOptionsSubject] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState<null | Option['name']>(null);

  const handleSelectChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);
  };

  useEffect(() => {
    async function getOptions() {
      const response = await axiosInstance.get(`/product/${product.id}/options`);
      const data = response.data;
      console.log(data);
    }
    getOptions();
  }, [product.id]);
  return (
    <div>
      <div>
        <span className="font-semibold">옵션 선택</span>
      </div>
      <div className="mt-4">
        <Select options={options} onChange={handleSelectChange} value={selectedOption} />
      </div>
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
