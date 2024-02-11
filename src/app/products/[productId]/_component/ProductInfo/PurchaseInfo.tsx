'use client';

import { ProductDetail, ProductOption } from '@/types/Product';
import Buttons from './Buttons';
import Select from '../ui/Select';
import SellingOption from '../ui/SellingOption';
import TotalPrice from '../ui/TotalPrice';
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/lib/axios';
import { Option } from '../../../../../types/Option';

interface Props {
  product: ProductDetail;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function PurchaseInfo({ product, count, setCount }: Props) {
  const [optionsSubject, setOptionsSubject] = useState<string[]>();
  const [options, setOptions] = useState<ProductOption[]>();
  const [selectedOption, setSelectedOption] = useState<null | Option['name']>(null);
  const [optionsName, setOptionsName] = useState<string[][]>();

  const handleSelectChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);
  };

  useEffect(() => {
    if (!product.optionSubject) return;
    const subjects = product.optionSubject.split(',');
    setOptionsSubject(subjects);
  }, [product.optionSubject]);

  useEffect(() => {
    if (!product.optionSubject) return;
    async function getOptions() {
      const response = await axiosInstance.get(`/product/${product.id}/options`);
      const data = response.data;
      setOptions(data);
    }
    getOptions();
  }, [product.id, product.optionSubject]);
  return (
    <div>
      <div>
        <span className="font-semibold">옵션 선택</span>
      </div>
      <div className="mt-4">
        {/* {optionsSubject &&
          optionsSubject.map((option, index1) => (
            <select key={index1}>
              <option value="">{option}</option>
              {options?.map((item, index2) => {
                const array = item.name.split('\u001e');
                // console.log(array);
                return (
                  <option key={index2} value={'ㅗㅑ'}>
                    {array[index1]}
                  </option>
                );
              })}
            </select>
          ))} */}
        {/* <Select options={options} onChange={handleSelectChange} value={selectedOption} /> */}
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
