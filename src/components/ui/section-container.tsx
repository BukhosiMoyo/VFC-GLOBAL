import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  width?: 'default' | 'narrow' | 'wide' | 'full'; 
}

export function SectionContainer({
  children,
  className,
  width = 'default',
  ...props
}: SectionContainerProps) {
  const widthClasses = {
    default: 'max-w-7xl',
    narrow: 'max-w-3xl',
    wide: 'max-w-[1600px]', // e.g. for hero or mega menu
    full: 'w-full',
  };

  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        widthClasses[width],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
