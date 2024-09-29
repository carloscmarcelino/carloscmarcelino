'use client';

import { useIsScrolled } from '@/hooks';
import { motion } from 'framer-motion';
import React from 'react';
import { HeaderOptions } from './Header';
import Link from 'next/link';

type HeaderWebProps = {
  options: HeaderOptions[];
};

export const HeaderWeb = ({ options }: HeaderWebProps) => {
  const { isScrolled } = useIsScrolled();

  return (
    <header className="hidden lg:block fixed bg-dark2 w-full z-50">
      <motion.div
        initial={{ paddingTop: '3rem', paddingBottom: '3rem' }}
        animate={isScrolled && { paddingTop: '1.5rem', paddingBottom: '1.5rem' }}
        transition={{
          ease: [0.645, 0.045, 0.355, 1],
          duration: 1,
        }}
        className="flex justify-between max-w-[1280px] mx-auto px-20"
      >
        <Link href="/">
          <p className="font-bold text-white text-text1 opacity-70 hover:opacity-100">Home</p>
        </Link>

        <div className="flex gap-10">
          {options.map((option) => (
            <Link href={option.href}>
              <p className="text-white text-text1 opacity-70 hover:opacity-100">{option.label}</p>
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
};
