'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../../_component/common/Button';
import Header from '../../_component/ui/Header';

export default function CategoryPage() {
  const router = useRouter();
  return (
    <div>
      <Header>
        <div className="flex justify-between items-center">
          <h2 className="admin-h2">분류 관리</h2>
          <Button onClick={() => router.push('./category/create')}>분류 추가</Button>
        </div>
      </Header>
      <main>안뇽</main>
    </div>
  );
}
