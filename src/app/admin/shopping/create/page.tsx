'use client';
import ListBox from '@/components/common/ListBox';
import Header from '../../_component/ui/Header';
import { useEffect, useState } from 'react';
import { ListBox as IListBox } from '@/types/ListBox';
import { axiosInstance } from '@/lib/axios';
import Editor from '../_component/Editor';
import FileUpload from '../_component/FileUpload';
import TableWrap from '../../_component/ui/TableWrap';
import AddOption from './_component/AddOption';

export default function CreatePage() {
  const [category, setCategory] = useState<IListBox[]>([]);
  const [categorySelected, setCategorySelected] = useState<IListBox>(category[0]);

  useEffect(() => {
    const getCategory = async () => {
      const response = await axiosInstance.get('/product/category');
      const data = response.data;
      setCategory(data);
      setCategorySelected(data[0]);
    };
    getCategory();
  }, []);

  return (
    <div>
      <Header>
        <h2 className="admin-h2">상품 등록</h2>
      </Header>
      <main>
        <TableWrap>
          <h2 className="p-2 font-semibold">기본 정보</h2>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>상품 유형</th>
                  <td>
                    <div className="input_wrap">
                      <div className="checkbox">
                        <input type="checkbox" id="type1" />
                        <label htmlFor="type1">추천 상품</label>
                      </div>
                      <div className="checkbox">
                        <input type="checkbox" id="type2" />
                        <label htmlFor="type2">신상품</label>
                      </div>
                      <div className="checkbox">
                        <input type="checkbox" id="type3" />
                        <label htmlFor="type3">인기 상품</label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>진열 상태</th>
                  <td>
                    <div className="input_wrap">
                      <div className="radio">
                        <input type="radio" id="displayOption1" />
                        <label htmlFor="displayOption1">진열함</label>
                      </div>
                      <div className="radio">
                        <input type="radio" id="displayOption2" />
                        <label htmlFor="displayOption2">진열안함</label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>상품명</th>
                  <td>
                    <input type="text" required />
                  </td>
                </tr>
                <tr>
                  <th>카테고리 선택</th>
                  <td>
                    {categorySelected && (
                      <div className="w-40">
                        <ListBox data={category} selected={categorySelected} setSelected={setCategorySelected} />
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>상세 설명</th>
                  <td>
                    <Editor />
                  </td>
                </tr>
                <tr>
                  <th>대표 이미지</th>
                  <td>
                    <div>
                      <FileUpload />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </TableWrap>
        <TableWrap>
          <h2>판매 정보</h2>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>할인 여부</th>
                  <td>
                    <div className="checkbox">
                      <input type="checkbox" id="sale_input" />
                      <label htmlFor="sale_input">할인</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>원가</th>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>판매가</th>
                  <td>
                    <input type="text" required />
                  </td>
                </tr>
                <tr>
                  <th>재고</th>
                  <td>
                    <input type="text" required />
                  </td>
                </tr>
                <tr>
                  <th>최소 구매 수량</th>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>최대 구매 수량</th>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>상품 선택 옵션</th>
                  <td>
                    <div className="text-slate-500">
                      <p>옵션항목은 콤마(,) 로 구분하여 여러개를 입력할 수 있습니다.</p>
                      <p>
                        예시) 옷을 예로 들어 [옵션1 : 사이즈 , 옵션1 항목 : XXL,XL,L,M,S] , [옵션2 : 색상 , 옵션2 항목 :
                        빨,파,노]
                      </p>
                    </div>
                    <AddOption />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </TableWrap>
      </main>
    </div>
  );
}
