'use client';

import { responsive } from '@/data/responsive';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { IoChevronBack } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';

export default function MobileHeaderNavbar() {
  const router = useRouter();
  const isTablet = useMediaQuery({ maxWidth: responsive.tablet });
  const [tablet, setTablet] = useState(false);

  useEffect(() => {
    setTablet(isTablet);
  }, [isTablet]);

  if (!tablet) return null;
  return (
    <div className="sticky z-50 md:h-24 h-[60px]">
      <div className="fixed md:container w-full left-0 right-0">
        <div className="flex justify-between md:pb-6 md:pt-8 pb-3 pt-4 items-center px-4 md:px-0 bg-white h-[60px]">
          <button onClick={() => router.back()} className="text-2xl">
            <IoChevronBack />
          </button>
          <div>
            <div className="flex md:gap-5 gap-4 items-center">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
