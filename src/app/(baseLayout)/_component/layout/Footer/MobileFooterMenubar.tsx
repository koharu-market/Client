'use client';

import { BsPerson, BsPersonFill, BsGrid, BsGridFill } from 'react-icons/bs';
import { IoMdHeartEmpty, IoMdHeart, IoMdSearch } from 'react-icons/io';
import { IoHomeOutline, IoHomeSharp } from 'react-icons/io5';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';

export default function MobileFooterMenubar() {
  const segment = useSelectedLayoutSegment();
  const router = useRouter();
  return (
    <div className="fixed bottom-0 block w-full md:hidden">
      <nav>
        <ul className="flex justify-around bg-primary-200 items-center pt-2.5 pb-1.5">
          <li>
            <button type="button" className="flex flex-col gap-1 items-center justify-center text-xl">
              <IoMdSearch />
              <span className="text-xs text-neutral-500">검색</span>
            </button>
          </li>
          <li>
            <button type="button" className="flex flex-col gap-1 items-center justify-center text-xl">
              {segment === 'category' ? <BsGridFill /> : <BsGrid />}
              <span className="text-xs text-neutral-500">카테고리</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => router.push('/')}
              className="flex flex-col gap-1 items-center justify-center text-xl"
            >
              {segment === null ? <IoHomeSharp /> : <IoHomeOutline />}
              <span className="text-xs text-neutral-500">홈</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => router.push('/favor')}
              className="flex flex-col gap-1 items-center justify-center text-xl"
            >
              {segment === 'favor' ? <IoMdHeart /> : <IoMdHeartEmpty />}
              <span className="text-xs text-neutral-500">찜</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => router.push('/mypage')}
              className="flex flex-col gap-1 items-center justify-center text-xl"
            >
              {segment === 'mypage' ? <BsPersonFill /> : <BsPerson />}
              <span className="text-xs text-neutral-500">마이</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
