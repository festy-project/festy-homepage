import type { FunctionComponent, ReactNode } from 'react';
import React from 'react';
import { isMobile } from 'react-device-detect';

import { AnimatePresence, motion } from 'framer-motion';

import styled from '@emotion/styled';

import Navigation from './Navigation';
import Pointer from './Pointer';

type TemplateProps = {
  children: ReactNode;
  stack: number;
  isScrollingUp: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(var(--vh, 1vh) * 100);
`;

const Layout: FunctionComponent<TemplateProps> = function ({ children, stack, isScrollingUp }) {
  return (
    <>
      <Container>
        <AnimatePresence>
          {(isScrollingUp || stack < 0.5) && (
            <motion.div
              key={'navigation'}
              initial={{
                opacity: 0,
                zIndex: 1000,
                y: '-50px',
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: '-50px',
              }}
            >
              <Navigation />
            </motion.div>
          )}
        </AnimatePresence>
        {children}
        {!isMobile && <Pointer />}
      </Container>
    </>
  );
};

export default Layout;
