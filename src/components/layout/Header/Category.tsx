'use client';

import { Categories } from '@/types/Categories';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  categories: Categories[];
}

export default function Category({ categories }: Props) {
  const pathname = usePathname();

  return (
    <nav className="px-2 md:px-0">
      <ul className="flex items-center justify-between font-semibold overflow-x-auto flex-nowrap no-scroll">
        <li className="relative">
          <Link href={`/`} className="block md:py-3 py-1.5 md:px-2 px-3 md:text-lg whitespace-nowrap">
            홈
          </Link>
          {pathname === '/' && (
            <span className="block md:w-full w-[calc(100%-1rem)] mx-auto h-0.5 bg-black mt-3 absolute bottom-0 right-0 left-0"></span>
          )}
        </li>
        {categories &&
          categories.map((item, index) => (
            <li key={index} className="relative">
              <Link
                href={`/categories/${item.id}`}
                className="block md:py-3 py-1.5 md:px-2 px-3 md:text-lg whitespace-nowrap"
              >
                {item.name}
              </Link>
              {pathname === `/categories/${item.id}` && (
                <span className="block md:w-full w-[calc(100%-1rem)] mx-auto h-0.5 bg-black mt-3 absolute bottom-0 right-0 left-0"></span>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
}
