'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { HeaderWeb } from './HeaderWeb';
import { HeaderMobile } from './HeaderMobile';

export type HeaderOptions = { label: string; href: string };

const options = [
  {
    label: 'Sobre',
    href: '',
  },
  {
    label: 'Experiências',
    href: '',
  },
  {
    label: 'Projetos',
    href: '',
  },
  {
    label: 'Contato',
    href: '',
  },
];

export const Header = () => {
  return (
    <>
      <HeaderWeb options={options} />
      <HeaderMobile options={options} />
    </>
  );
};
