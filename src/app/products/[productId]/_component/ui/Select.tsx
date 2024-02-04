'use client';

import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Option } from '../../_types/Option';

interface Props {
  options: Option[];
  onChange: (value: string) => void;
  value: null | string;
}

export default function Select({ options, onChange, value }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative text-left" ref={selectRef}>
      <div>
        <div
          className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-between">
            <div>{options.find(option => option.name === value)?.name || '옵션을 선택하세요.'}</div>
            <IoIosArrowDown className={`text-gray-500 ${isOpen ? 'transform rotate-180' : ''}`} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute w-full right-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map(option => (
              <div
                key={option.name}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick(option.name)}
              >
                {option.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
