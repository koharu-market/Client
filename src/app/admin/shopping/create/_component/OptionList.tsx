import TableWrap from '@/app/admin/_component/ui/TableWrap';
import { Option } from '../types/option';

interface Props {
  options: Option[] | undefined;
}

export default function OptionList({ options }: Props) {
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
                <input type="checkbox" />
              </th>
              <th className="!w-auto !text-center">옵션</th>
              <th className="!w-auto !text-center">추가 금액</th>
              <th className="!w-auto !text-center">재고 수량</th>
              <th className="!w-auto !text-center">진열 상태</th>
            </tr>
          </thead>
          <tbody>
            {options &&
              options.map(option => (
                <tr key={option.id}>
                  <td>
                    <input type="checkbox" defaultChecked={option.checked} />
                  </td>
                  <td>{option.opt_id}</td>
                  <td>
                    <input className="w-full" type="text" defaultValue={option.price} />
                  </td>
                  <td>
                    <input className="w-full" type="text" defaultValue={option.count} />
                  </td>
                  <td>진열상태</td>
                </tr>
              ))}
          </tbody>
        </table>
      </TableWrap>
    </div>
  );
}
