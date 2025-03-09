import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import styled from '@emotion/styled';

import { fadeMotion } from '../animations/fadeinout/fadeInOut';

import { Button } from './DownloadButton';

const Container = styled(motion.footer)`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  bottom: 0;
  z-index: 100;
  user-select: none;
  pointer-events: auto;
`;

interface Props {
  stack: number;
}
const FestyDownloadFooter = ({ stack }: Props) => {
  return (
    <AnimatePresence>
      {stack > 0.5 && stack < 8 && (
        <Container
          variants={fadeMotion}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          key={'downloadFooter'}
          custom={0.5}
        >
          <Button as={'a'} href={'https://apps.apple.com/kr/app/id1668793166'}>
            페스티 다운로드하기
          </Button>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default FestyDownloadFooter;
