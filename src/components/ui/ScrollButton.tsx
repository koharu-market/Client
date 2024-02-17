'use client';

import { useState, useEffect } from 'react';
import { GoArrowUp } from 'react-icons/go';

export default function ScrollButton() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {scrollY > 200 && (
        <button
          onClick={handleButtonClick}
          className="fixed md:bottom-10 bottom-24 md:right-10 right-4 md:text-3xl text-2xl rounded-full p-2 shadow-[rgba(63,71,77,0.25)0_2px_10px] bg-white z-100"
        >
          <GoArrowUp />
        </button>
      )}
    </div>
  );
}
