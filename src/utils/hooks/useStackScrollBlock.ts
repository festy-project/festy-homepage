'use client';
import { useEffect } from 'react';

export const useStackScrollBlock = (block: boolean) => {
  useEffect(() => {
    const stack = document.getElementsByClassName(
      '_1dlf434j dhthxq4 dhthxq0 dhthxq1 dhthxq2 dhthxq3 _1dlf4347 _1dlf4348 _1dlf434k dhthxqg',
    );

    if (stack && block) {
      (stack.item(stack.length - 1) as HTMLDivElement).style.overflow = 'hidden';
    } else {
      (stack.item(stack.length - 1) as HTMLDivElement).style.overflow = 'auto';
    }
  }, [block]);
};
