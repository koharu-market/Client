'use client';

import { useInput } from '@/hooks/useInput';
import { Button } from '../../../_component/common/Button';

export default function AddOption() {
  const [optValue1, onChangeOptValue1] = useInput('');
  const [optItemValue1, onChangeOptItemValue1] = useInput('');
  const [optValue2, onChangeOptValue2] = useInput('');
  const [optItemValue2, onChangeOptItemValue2] = useInput('');
  const [optValue3, onChangeOptValue3] = useInput('');
  const [optItemValue3, onChangeOptItemValue3] = useInput('');

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
        <Button color="blue">옵션 목록 생성</Button>
      </div>
    </div>
  );
}
