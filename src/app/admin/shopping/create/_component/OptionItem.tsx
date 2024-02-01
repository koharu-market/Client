'use client';

import { useCallback } from 'react';
import { Option } from '../types/Option';

interface Props {
  option: Option;
  setOptions: React.Dispatch<React.SetStateAction<Option[] | undefined>>;
}

export default function OptionItem({ option, setOptions }: Props) {
  const handleToggle = useCallback(
    (id: string) => {
      setOptions(prev => {
        return prev?.map(option => (id === option.id ? { ...option, checked: !option.checked } : option));
      });
    },
    [setOptions],
  );

  const handleChangePrice = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
      setOptions(prev => {
        return prev?.map(option => (id === option.id ? { ...option, price: parseInt(e.target.value) } : option));
      });
    },
    [setOptions],
  );

  const handleChangeCount = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
      setOptions(prev => {
        return prev?.map(option => (id === option.id ? { ...option, count: parseInt(e.target.value) } : option));
      });
    },
    [setOptions],
  );

  return (
    <tr key={option.id}>
      <td>
        <input type="checkbox" checked={option.checked} onChange={() => handleToggle(option.id)} />
      </td>
      <td>{option.name.replaceAll(String.fromCharCode(30), ' > ')}</td>
      <td>
        <input className="w-full" type="text" value={option.price} onChange={e => handleChangePrice(e, option.id)} />
      </td>
      <td>
        <input className="w-full" type="text" value={option.count} onChange={e => handleChangeCount(e, option.id)} />
      </td>
      <td>
        <select defaultValue={option.displayOption}>
          <option value="Y">진열함</option>
          <option value="N">진열안함</option>
        </select>
      </td>
    </tr>
  );
}
