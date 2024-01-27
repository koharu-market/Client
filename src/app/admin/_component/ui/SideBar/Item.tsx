'use client';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

interface Props {
  icon?: React.ReactNode;
  text: string;
  href: string;
  segment: undefined | string;
}

export default function Item({ icon, text, href, segment }: Props) {
  const segments = useSelectedLayoutSegments();
  return (
    <div className="mx-3 my-1">
      <Link href={href}>
        <div
          className={`relative ${icon ? 'py-2' : 'py-1.5'} ${
            segments[segments[1] ? 1 : 0] === segment
              ? 'bg-sky-100'
              : 'hover:bg-slate-100'
          }  block rounded-md ${
            segments[segments[1] ? 1 : 0] === segment && 'text-blue-500'
          }`}
        >
          <div className="text-base absolute left-3 top-0 bottom-0 flex items-center justify-center">
            {icon}
          </div>
          <div className="ml-10">
            <div className={`text-sm ${!icon && 'leading-4'}`}>{text}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
