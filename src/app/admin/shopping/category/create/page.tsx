'use client';

import { Button } from '@/components/ui/Button';
import Header from '@/app/admin/_component/ui/Header';
import TableWrap from '@/app/admin/_component/ui/TableWrap';
import { axiosInstance } from '@/lib/axios';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  name: string;
  order: string;
  displayOption: string;
}

export default function CreateCategoryPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      order: '0',
      displayOption: 'Y',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async data => {
    const res = await axiosInstance.post('/admin/category', data);
  };

  return (
    <div>
      <Header>
        <h2 className="admin-h2">분류 추가</h2>
      </Header>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TableWrap>
            <h2>분류 설정</h2>
            <table>
              <tbody>
                <tr>
                  <th>분류명</th>
                  <td>
                    <input type="text" required {...register('name', { required: true })} />
                    {errors.name && <p className="error">분류명은 필수값입니다.</p>}
                  </td>
                </tr>
                <tr>
                  <th>출력 순서</th>
                  <td>
                    <input
                      type="text"
                      required
                      {...register('order', {
                        required: 'This field is required',
                        pattern: {
                          value: /^[0-9]+$/,
                          message: '숫자만 입력해주세요.',
                        },
                      })}
                    />
                    {errors.order && <p className="error">{errors.order.message}</p>}
                  </td>
                </tr>
                <tr>
                  <th>표시상태</th>
                  <td>
                    <div className="input_wrap">
                      <div className="radio">
                        <input
                          type="radio"
                          value="Y"
                          {...register('displayOption')}
                          checked={watch('displayOption') === 'Y'}
                          id="displayOption1"
                        />
                        <label htmlFor="displayOption1">표시함</label>
                      </div>
                      <div className="radio">
                        <input
                          type="radio"
                          value="N"
                          {...register('displayOption')}
                          checked={watch('displayOption') === 'N'}
                          id="displayOption2"
                        />
                        <label htmlFor="displayOption2">표시안함</label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
            <div className="my-5 text-center">
              <Button type="submit" size="md" color="blue">
                확인
              </Button>
            </div>
          </TableWrap>
        </form>
      </main>
    </div>
  );
}
