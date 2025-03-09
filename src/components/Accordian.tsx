'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

interface AccordionProps {
  renderTrigger: (
    isExpanded: boolean,
    setIsExpanded: Dispatch<SetStateAction<boolean>>,
  ) => React.ReactNode;
  children: React.ReactNode;
}

export default function Accordion({ renderTrigger, children }: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <AnimatePresence mode="sync">{isExpanded && children}</AnimatePresence>
      {renderTrigger(isExpanded, setIsExpanded)}
    </>
  );
}
