'use client';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface Props {
  icon: React.ReactNode;
  text: string;
  children: React.ReactNode;
  segment: null | string;
}

export default function List({ icon, text, children, segment }: Props) {
  const selectedSegment = useSelectedLayoutSegment();
  const [isShow, setIsShow] = useState(false);

  const handleOpen = () => {
    setIsShow((prev) => !prev);
  };

  useEffect(() => {
    if (selectedSegment !== segment) {
      setIsShow(false);
    }
  }, [selectedSegment, segment]);
  return (
    <div>
      <div className="mx-3 my-1">
        <button onClick={handleOpen} className="block w-full text-left">
          <div className="relative py-2 hover:bg-slate-100 block rounded-md">
            <div>
              <div className="text-base absolute left-3 top-0 bottom-0 flex items-center justify-center">
                {icon}
              </div>
              <div className="ml-10">
                <div className="text-sm">{text}</div>
              </div>
            </div>
            <div className="absolute text-xs flex items-center right-3 top-0 bottom-0">
              <div className={`${isShow && 'rotate-180'}`}>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </button>
      </div>
      {isShow && <div>{children}</div>}
    </div>
  );
}
