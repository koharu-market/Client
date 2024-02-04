'use client';
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { Rubik_Bubbles } from 'next/font/google';
import { BsCart2, BsPerson } from 'react-icons/bs';
import { IoMdHeartEmpty, IoMdSearch } from 'react-icons/io';
import Search from './Search';
import { useRouter } from 'next/navigation';

const rubikBubbles = Rubik_Bubbles({
  subsets: ['latin'],
  weight: '400',
});

export default function HeaderNavbar() {
  const router = useRouter();

  return (
    <div className="sticky z-50 md:h-24 h-[60px]">
      <div className="fixed md:container w-full left-0 right-0">
        <div className="flex justify-between md:pb-6 md:pt-8 pb-3 pt-4 items-center px-4 md:px-0 bg-white">
          <h1>
            <Link href="/" className="flex items-center md:gap-4 gap-2">
              <span className="block md:w-10 w-8 md:h-10 h-8">
                <img src="/logo.png" alt="로고" className="w-full h-full" />
              </span>
              <span
                className={`${rubikBubbles.className} md:text-4xl text-2xl text-primary-400 md:tracking-wider tracking-wide`}
              >
                koharu
              </span>
            </Link>
          </h1>
          <Search />
          <div>
            <div className="flex md:gap-5 gap-4 items-center">
              <div className="md:hidden">
                <button type="button" className="text-2xl justify-center items-center flex pt-1">
                  <IoMdSearch />
                </button>
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => router.push('/cart')}
                  className="md:text-3xl text-2xl flex justify-center items-center"
                >
                  <BsCart2 />
                </button>
                <div className="flex items-center justify-center bg-[#ef7014] px-1 min-w-[16px] h-4 absolute rounded-full -top-1 -right-1 z-10 text-white">
                  <span className="text-xs font-light">0</span>
                </div>
              </div>
              <div className="hidden md:block">
                <button
                  type="button"
                  onClick={() => router.push('/favor')}
                  className="text-3xl justify-center items-center flex"
                >
                  <IoMdHeartEmpty />
                </button>
              </div>
              <div className="hidden md:block">
                <button
                  type="button"
                  onClick={() => router.push('/mypage')}
                  className="text-3xl justify-center items-center flex"
                >
                  <BsPerson />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
