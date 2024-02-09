'use client';
import { axiosInstance } from '@/lib/axios';
import Header from '../_component/ui/Header';
import { useEffect, useState } from 'react';
import { User } from '@/types/User';
import dayjs from 'dayjs';

export default function CustomerPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axiosInstance.get('/admin/users');
        const users = response.data;
        setUsers(users);
      } catch (err) {
        console.error(err);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      <Header>
        <h2 className="admin-h2">고객 관리</h2>
      </Header>
      <main>
        <div className="bg-white p-5 shadow-md">
          <div className="mb-5 ml-2">
            <span>전체 사용자 {users.length}명</span>
          </div>
          <table className="w-full">
            <thead className="border-b text-left">
              <tr>
                <th className="font-normal text-slate-400 p-2">닉네임</th>
                <th className="font-normal text-slate-400 p-2">계정</th>
                <th className="font-normal text-slate-400 p-2">가입일</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map(user => (
                  <tr key={user.id} className="text-slate-800">
                    <td className="p-2">{user.name}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">{dayjs(user.createdAt).format('YYYY-MM-DD')}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
