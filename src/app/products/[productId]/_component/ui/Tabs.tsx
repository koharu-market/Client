'use client';

import { useState } from 'react';
import { Link } from 'react-scroll';

// const tabs = ['상품정보', '리뷰', '문의', '배송/환불'];

interface Props {
  tabs: string[];
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
  reviewCount: number;
}

export default function Tabs({ tabs, tab, setTab, reviewCount }: Props) {
  return (
    <div className="sticky md:top-24 top-[60px] mt-14 bg-white md:border-b-0 border-b">
      <nav>
        <ul className="flex md:text-xl text-sm font-medium tracking-wider justify-between text-center">
          {tabs.map((item, i) => {
            const index = i + 1;
            return (
              <li key={index} className="flex-1">
                <Link
                  activeClass="active"
                  to={`tab${index}`}
                  spy={true}
                  smooth={true}
                  offset={-180}
                  duration={0}
                  className={`block md:pb-5 pb-3 pt-3 md:border-b-[4px] cursor-pointer ${
                    tab === `tab${index}` ? 'border-black border-b-2' : 'text-gray-400'
                  }`}
                  onSetActive={to => setTab(to)}
                  onClick={() => setTab(`tab${index}`)}
                >
                  {item === '리뷰' ? (
                    <span>
                      리뷰 <span className="font-normal">({reviewCount})</span>
                    </span>
                  ) : item === '문의' ? (
                    <span>
                      문의 <span className="font-normal">(0)</span>
                    </span>
                  ) : (
                    <span>{item}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
