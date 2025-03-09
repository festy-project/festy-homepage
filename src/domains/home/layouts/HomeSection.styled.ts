import { motion } from 'framer-motion';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const LayoutContentBox = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  min-height: calc(var(--vh, 1vh) * 100);
`;
export const LayoutContent = styled(motion.div)`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 30vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    scale: 0.8;
  }
  @media (max-width: 600px) {
    scale: 0.6;
  }
`;
const arrow = keyframes`
    0% {
        transform: translateY(0);
      opacity: 0;
    }
    50% {
        transform: translateY(10px);
        opacity: 1;
    }
    100% {
        transform: translateY(0);
      opacity: 0;
    }
  `;

export const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 4%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${arrow} 1.6s infinite;
`;

export const BackgroundImageWrapper = styled.div`
  width: auto;
  height: 100vh;
  word-break: keep-all;
  white-space: pre-wrap;
  mask: linear-gradient(black, transparent 100%, black);
`;
export const SubTitle = styled.div`
  display: flex;
  padding-bottom: 20px;
`;
export const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
