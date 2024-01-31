'use client';

import TableWrap from '@/app/admin/_component/ui/TableWrap';
import { Option } from '../types/Option';
import { useCallback, useEffect, useState } from 'react';
import OptionItem from './OptionItem';

interface Props {
  options: Option[] | undefined;
  setOptions: React.Dispatch<React.SetStateAction<Option[] | undefined>>;
}

export default function OptionList({ options, setOptions }: Props) {
  const [allChecked, setAllChecked] = useState(false);

  const handleToggleAll = useCallback(() => {
    setAllChecked(prev => !prev);
  }, []);

  useEffect(() => {
    setOptions(prev => {
      return prev?.map(option => {
        return { ...option, checked: allChecked };
      });
    });
  }, [allChecked, setOptions]);

  return (
    <div>
      <TableWrap>
        <table>
          <colgroup>
            <col width="30px" />
            <col />
            <col width="100px" />
            <col width="80px" />
            <col width="100px" />
          </colgroup>
          <thead>
            <tr>
              <th className="!w-auto !text-center">
                <input type="checkbox" checked={allChecked} onChange={handleToggleAll} />
              </th>
              <th className="!w-auto !text-center">옵션</th>
              <th className="!w-auto !text-center">추가 금액</th>
              <th className="!w-auto !text-center">재고 수량</th>
              <th className="!w-auto !text-center">진열 상태</th>
            </tr>
          </thead>
          <tbody>
            {options && options.map(option => <OptionItem key={option.id} option={option} setOptions={setOptions} />)}
          </tbody>
        </table>
      </TableWrap>
    </div>
  );
}
