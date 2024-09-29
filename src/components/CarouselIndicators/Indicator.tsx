import React from 'react';

import { cn } from '@/lib/utils';

type IndicatorProps = {
  index: number;
  isActive: boolean;
};

export const Indicator: React.FC<IndicatorProps> = ({ index, isActive }) => (
  <div
    key={index}
    className={cn(
      'h-[0.375rem] w-[0.375rem] lg:h-2 lg:w-2 rounded-full transition-all duration-300',
      isActive ? 'w-5 lg:w-7 bg-white' : 'bg-gray-400',
    )}
  />
);
