'use client';

import React from 'react';

import { cn } from '@/lib/utils';

import { useCarousel } from '../ui/carousel';

import { Indicator } from './Indicator';

type CarouselIndicatorsProps = {
  className?: string;
};

export const CarouselIndicators = ({ className }: CarouselIndicatorsProps) => {
  const { api, selectedSnap } = useCarousel();

  return (
    <div className={cn('flex items-center gap-1 lg:gap-2', className)}>
      {Array.from({ length: api?.slideNodes().length ?? 3 }).map((_, index) => (
        <Indicator key={index} index={index} isActive={selectedSnap === index} />
      ))}
    </div>
  );
};
