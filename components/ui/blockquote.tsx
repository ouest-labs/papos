import { cn } from '@/lib/cn';
import React from 'react';

type BlockquoteProps = {
  children?: React.ReactNode;
  className?: string;
};

const Blockquote = ({ children, className }: BlockquoteProps) => {
  return (
    <div
      className={cn(
        "flex relative rounded-lg border-l-8 border-l-primary bg-secondary py-5 pl-16 pr-5 font-sans text-lg text-foreground before:absolute before:left-3 before:top-3 before:font-serif before:text-6xl before:text-muted-foreground before:content-['“']",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BlockquoteAuthor = ({ children, className }: BlockquoteProps) => {
  return (
    <p className={cn('flex items-center justify-between flex-row-reverse pb-5 text-sm text-right font-bold not-italic text-muted-foreground', className)}>
      {children}
    </p>
  );
};

export { Blockquote, BlockquoteAuthor };
