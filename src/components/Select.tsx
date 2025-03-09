import React from 'react';
import Caret from '@/assets/icons/Caret';
import { twMerge } from 'tailwind-merge';

type SelectProps = {
  children?: React.ReactNode;
  className?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ children, className, ...rest }: SelectProps) => {
  return (
    <div
      className={twMerge(
        'border-grey-500 y-1 relative flex w-full cursor-pointer flex-row items-center gap-1 rounded-[50px] border px-3',
        className,
      )}
    >
      <select
        className="body5-medium-14 relative z-10 block h-[32px] w-fit cursor-pointer appearance-none border-none bg-transparent text-white outline-none"
        {...rest}
      >
        {children}
      </select>
      <Caret />
    </div>
  );
};

export default Select;
