import React from 'react';
import {cn} from '~/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Container({
  children,
  className
}: Props) {
  return (
    <div className={cn("mx-auto max-w-[1440px] px-4 md:px-8", className)}>
      { children }
    </div>
  );
}
