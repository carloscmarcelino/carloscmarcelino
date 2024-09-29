import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { useDisclosure } from '@/hooks';
import { cn } from '@/lib/utils';
import { HeaderOptions } from './Header';
import { HeaderWeb } from './HeaderWeb';

type HeaderMobileProps = {
  options: HeaderOptions[];
};

export const HeaderMobile = ({ options }: HeaderMobileProps) => {
  const { onToggle, open: isOpen } = useDisclosure();

  return (
    <header
      className={cn(
        'lg:hidden flex justify-between px-6 py-[1.375rem] bg-dark2 fixed w-screen transition-all duration-300 overflow-hidden z-[100]',
        isOpen ? 'h-[40vh]' : 'h-[8vh]',
      )}
    >
      <Link href="/">
        <p className="font-bold text-white text-text1 opacity-70 hover:opacity-100">Home</p>
      </Link>

      <button
        onClick={onToggle}
        className={cn(
          'relative w-5 h-4.5 text-white cursor-pointer transition-transform duration-300',
        )}
      >
        <div
          className={cn(
            'absolute top-0 left-0 w-5 h-0.5 bg-white transition-transform duration-300 transform',
            isOpen ? 'rotate-45 translate-y-2' : '',
          )}
        />
        <div
          className={cn(
            'absolute top-2 left-0 w-5 h-0.5 bg-white transition-opacity duration-300',
            isOpen ? 'opacity-0' : '',
          )}
        />
        <div
          className={cn(
            'absolute top-4 left-0 w-5 h-0.5 bg-white transition-transform duration-300 transform',
            isOpen ? '-rotate-45 -translate-y-2' : '',
          )}
        />
      </button>

      <div className="absolute top-[8vh] left-0 flex flex-col items-center justify-between w-screen h-[92vh] pt-6">
        <div className="flex flex-col items-center">
          <ul className="flex flex-col text-center opacity-70 text-[16.19px] leading-[19.68px] gap-[2.1875rem] mb-10 text-white">
            {options?.map((option) => (
              <Link
                key={option.label}
                href={option.href}
                onClick={() => {
                  if (isOpen) {
                    onToggle();
                  }
                }}
              >
                <li>{option.label}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
