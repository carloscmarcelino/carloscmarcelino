import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type SkeletonProps = HTMLAttributes<HTMLDivElement>;

const Skeleton = ({ className, ...props }: SkeletonProps) => (
  <div
    className={cn('animate-pulse rounded-md bg-slate-100 dark:bg-slate-800', className)}
    {...props}
  />
);

export { Skeleton, type SkeletonProps };
