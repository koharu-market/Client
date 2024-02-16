'use client';

import { useInput } from '@/hooks/useInput';
import { FormEventHandler } from 'react';
import { IoMdSearch } from 'react-icons/io';

export default function Search() {
  const [value, onChange] = useInput('');

  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    if (value.trim() === '') return alert('검색어를 입력해주세요');
  };

  return (
    <form onSubmit={onSubmit} className="md:block hidden">
      <div className="border-b-2 border-black h-10 flex pb-1 items-center w-72">
        <input type="text" className="outline-none flex-1 px-1" value={value} onChange={onChange} />
        <button type="submit" className="text-3xl">
          <IoMdSearch />
        </button>
      </div>
    </form>
  );
}
