'use client';
import { Fragment } from 'react';
import { Listbox as HeadlessListBox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { ListBox as IListBox } from '@/types/ListBox';

interface Props {
  data: IListBox[];
  selected: IListBox;
  setSelected: React.Dispatch<React.SetStateAction<IListBox>>;
}

export default function ListBox({ data, selected, setSelected }: Props) {
  return (
    <div className="w-full">
      <HeadlessListBox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <HeadlessListBox.Button className="relative w-full bg-white py-2 pl-3 pr-10 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </HeadlessListBox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <HeadlessListBox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto bg-white py-1 ring-1 ring-black/5 focus:outline-none text-sm">
              {data.map(item => (
                <HeadlessListBox.Option
                  key={item.id}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-3 pr-4 ${active ? 'bg-gray-100' : 'text-gray-900'}`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{item.name}</span>
                      {selected ? (
                        <span className="absolute inset-y-0 right-3 flex items-center pl-3 text-red-500">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </HeadlessListBox.Option>
              ))}
            </HeadlessListBox.Options>
          </Transition>
        </div>
      </HeadlessListBox>
    </div>
  );
}
