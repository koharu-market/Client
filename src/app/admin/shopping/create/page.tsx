'use client';
import ListBox from '@/components/common/ListBox';
import Header from '../../_component/Header';
import styles from './table.module.css';
import { useEffect, useState } from 'react';
import { ListBox as IListBox } from '@/types/ListBox';
import { axiosInstance } from '@/lib/axios';
import Editor from '../_component/Editor';
import FileUpload from '../_component/FileUpload';

export default function CreatePage() {
  const [category, setCategory] = useState<IListBox[]>([]);
  const [categorySelected, setCategorySelected] = useState<IListBox>();

  useEffect(() => {
    const getCategory = async () => {
      const response = await axiosInstance.get('/product/category');
      const data = response.data;
      console.log(data, 'data');
      setCategory(data);
    };
    getCategory();
  }, []);

  useEffect(() => {
    setCategorySelected(category[0]);
  }, [category]);

  return (
    <div>
      <Header>
        <h2 className="admin-h2">상품 등록</h2>
      </Header>
      <main>
        <div className="mb-4 bg-white border">
          <h2 className="p-2 font-semibold">기본 정보</h2>
          <table className={`w-full border-t ${styles.table}`}>
            <tbody>
              <tr>
                <th>상품명</th>
                <td>
                  <input type="text" className="border rounded-sm px-2" />
                </td>
              </tr>
              <tr>
                <th>카테고리 선택</th>
                <td>
                  {categorySelected && (
                    <ListBox
                      data={category}
                      selected={categorySelected}
                      setSelected={setCategorySelected}
                    />
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
                  <div className="h-40">
                    <FileUpload />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
