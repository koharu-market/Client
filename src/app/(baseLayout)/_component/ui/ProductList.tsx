'use client';

import Card from '@/app/(baseLayout)/_component/ui/Card';
import CardList from '@/app/(baseLayout)/_component/ui/CardList';
import ListBox from '@/components/common/ListBox';
import useCategoryFilter from '@/hooks/useCategoryFilter';
import { sortingOptions } from '@/data/sortingOptions';
import Pagination from './Pagination';
import { Product } from '@/types/Product';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  const { data, categorySelected, setCategorySelected } = useCategoryFilter(products);
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const currentPage = Number(page) || 1;

  const itemsPerPage = 20;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handlePageChange = (pageIndex: number) => {
    router.push(`?page=${pageIndex}`);
  };

  return (
    <main className="container">
      <div className="mb-4 flex justify-end">
        <div className="w-48">
          <ListBox data={sortingOptions} selected={categorySelected} setSelected={setCategorySelected} />
        </div>
      </div>
      <CardList>
        {currentPageData.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </CardList>
      <Pagination handlePageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}
