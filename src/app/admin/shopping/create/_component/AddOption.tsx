'use client';

import { useInput } from '@/hooks/useInput';
import { Button } from '../../../_component/common/Button';
import { Option } from '../types/option';

interface Props {
  setOptions: React.Dispatch<React.SetStateAction<Option[] | undefined>>;
}

const splitAndTrim = (value: string) => value.split(',').map(item => item.trim());

export default function AddOption({ setOptions }: Props) {
  const [optValue1, onChangeOptValue1] = useInput('');
  const [optItemValue1, onChangeOptItemValue1] = useInput('');
  const [optValue2, onChangeOptValue2] = useInput('');
  const [optItemValue2, onChangeOptItemValue2] = useInput('');
  const [optValue3, onChangeOptValue3] = useInput('');
  const [optItemValue3, onChangeOptItemValue3] = useInput('');

  const onClick = () => {
    const data: Option[] = [];
    const opt1 = splitAndTrim(optItemValue1);
    const opt2 = splitAndTrim(optItemValue2);
    const opt3 = splitAndTrim(optItemValue3);

    const opt1_count = opt1.length;
    const opt2_count = opt2.length;
    const opt3_count = opt3.length;

    for (let i = 0; i < opt1_count; i++) {
      for (let j = 0; j < opt2_count; j++) {
        for (let k = 0; k < opt3_count; k++) {
          const id = `key_${i}_${j}_${k}`;
          const checked = false;
          const opt_id = opt1[i] + (opt2[j] ? ' > ' + opt2[j] : '') + (opt3[k] ? ' > ' + opt3[k] : '');
          const price = 0;
          const count = 0;
          const displayOption = 'Y';
          data.push({ id, checked, opt_id, price, count, displayOption });
        }
      }
    }
    setOptions(data);
  };

  return (
    <div>
      <div className="mt-4 border-t">
        <div className="flex gap-10 mt-4">
          <div className="flex items-center gap-3">
            <label htmlFor="option1">옵션1</label>
            <input type="text" id="option1" value={optValue1} onChange={onChangeOptValue1} />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="option_item1">옵션1 항목</label>
            <input
              type="text"
              className="w-80"
              id="option_item1"
              value={optItemValue1}
              onChange={onChangeOptItemValue1}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 border-t">
        <div className="flex gap-10 mt-4">
          <div className="flex items-center gap-3">
            <label htmlFor="option2">옵션2</label>
            <input type="text" id="option2" value={optValue2} onChange={onChangeOptValue2} />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="option_item2">옵션2 항목</label>
            <input
              type="text"
              className="w-80"
              id="option_item2"
              value={optItemValue2}
              onChange={onChangeOptItemValue2}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 pb-4 border-y">
        <div className="flex gap-10 mt-4">
          <div className="flex items-center gap-3">
            <label htmlFor="option3">옵션3</label>
            <input type="text" id="option3" value={optValue3} onChange={onChangeOptValue3} />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="option_item3">옵션3 항목</label>
            <input
              type="text"
              className="w-80"
              id="option_item3"
              value={optItemValue3}
              onChange={onChangeOptItemValue3}
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-4 mb-2">
        <Button color="blue" onClick={onClick}>
          옵션 목록 생성
        </Button>
      </div>
    </div>
  );
}
