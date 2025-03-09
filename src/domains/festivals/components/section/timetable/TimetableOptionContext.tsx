'use client';
import { createSafeContext } from '@/utils';
import type { ReactNode } from 'react';
import { useState } from 'react';

type TimetableOption = {
  day: string;
  stage: string;
};

type TimetableOptionContextValue = {
  options: TimetableOption;
  setOptions: React.Dispatch<React.SetStateAction<TimetableOption>>;
};

const [TimetableOptionContext, useTimetableOptionContext] =
  createSafeContext<TimetableOptionContextValue>('TimeTableOptionContext');

export const TimetableOptionProvider = ({
  children,
  defaultOptions,
}: { children: ReactNode } & {
  defaultOptions: TimetableOption;
}) => {
  const [options, setOptions] = useState<TimetableOption>(defaultOptions);
  return (
    <TimetableOptionContext value={{ options, setOptions }}>
      <>{children}</>
    </TimetableOptionContext>
  );
};

export const useTimetableOption = useTimetableOptionContext;
