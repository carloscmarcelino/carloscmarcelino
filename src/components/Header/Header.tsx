'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { useIsScrolled } from '@/hooks';

export const Header = () => {
  const { isScrolled } = useIsScrolled();

  return (
    <header className="fixed bg-dark2 w-full z-50">
      <motion.div
        initial={{ paddingTop: '3rem', paddingBottom: '3rem' }}
        animate={isScrolled && { paddingTop: '1.5rem', paddingBottom: '1.5rem' }}
        transition={{
          ease: [0.645, 0.045, 0.355, 1],
          duration: 1,
        }}
        className="flex justify-between max-w-[1280px] mx-auto px-20"
      >
        <div>
          <p className="font-bold text-white text-text1 opacity-70 hover:opacity-100">Home</p>
        </div>

        <div className="flex gap-10">
          <p className="text-white text-text1 opacity-70 hover:opacity-100">Sobre</p>
          <p className="text-white text-text1 opacity-70 hover:opacity-100">Experiências</p>
          <p className="text-white text-text1 opacity-70 hover:opacity-100">Projetos</p>
          <p className="text-white text-text1 opacity-70 hover:opacity-100">Contato</p>
        </div>
      </motion.div>
    </header>
  );
};
