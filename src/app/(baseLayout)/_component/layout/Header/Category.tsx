'use client';

import { category } from '@/data/category';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Category() {
  const pathname = usePathname();

  return (
    <nav className="px-2 md:px-0">
      <ul className="flex items-center justify-between font-semibold overflow-x-auto flex-nowrap no-scroll">
        {category.map((item, index) => (
          <li key={index} className="relative">
            <Link href={item.href} className="block md:py-3 py-1.5 md:px-2 px-3 md:text-lg whitespace-nowrap">
              {item.text}
            </Link>
            {item.href === pathname && (
              <span className="block md:w-full w-[calc(100%-1rem)] mx-auto h-0.5 bg-black mt-3 absolute bottom-0 right-0 left-0"></span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
