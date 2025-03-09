import { motion } from 'framer-motion';

import styled from '@emotion/styled';

export const Description = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 auto;
  max-width: 850px;
  width: 850px;
  gap: 30px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    top: 30%;
  }
`;
export const DescriptionContainer = styled(motion.article)`
  position: relative;
  margin: 0 auto;
  max-width: 850px;
  height: 100%;
  gap: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: flex-start;
  }
`;
export const BackgroundImageWrapper = styled.div`
  bottom: 0;
  z-index: -1;
  width: auto;
  height: 100vh;
  word-break: keep-all;
  white-space: pre-wrap;
  mask: linear-gradient(black, transparent 100%, black);
`;

export const LayoutContentContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  min-height: calc(var(--vh, 1vh) * 100);
`;
export const ButtonSection = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;
