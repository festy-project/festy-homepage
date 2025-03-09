import React, { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';

import styled from '@emotion/styled';

import { throttle } from '../utils/throttle';

const StyledPointer = styled(motion.div)``;

const Pointer = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.body.style.cursor = 'none';
    const handleMouseMove = (event: MouseEvent) => {
      const element = ref.current;
      if (!element) {
        return;
      }
      const y = event.pageY;
      const x = event.pageX;

      const scrollLeft =
        window.pageXOffset !== undefined
          ? window.pageXOffset
          : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
      const scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      element.style.left = x - scrollLeft + 'px';
      element.style.top = y - scrollTop + 'px';

      if (!element || !event.target) {
        return;
      }
      const target = event.target as HTMLElement;
      // get Target Style
      const targetStyle = window.getComputedStyle(target);

      // ts-ignore
      if (targetStyle.cursor === 'pointer') {
        element.classList.add('over');
      } else {
        element.classList.remove('over');
      }
    };
    const debounceMouseMove = throttle((event: MouseEvent) => handleMouseMove(event), 10);

    document.addEventListener('mousemove', debounceMouseMove);
    return () => {
      document.removeEventListener('mousemove', debounceMouseMove);
    };
  }, []);
  return (
    <StyledPointer
      ref={ref}
      className={'pointer'}
      transition={{
        type: 'spring',
      }}
    />
  );
};

export default Pointer;
