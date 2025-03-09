import { motion } from 'framer-motion';

import styled from '@emotion/styled';

export const TextContainer = styled(motion.div)`
  position: relative;
  top: 0;
  flex: 1;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1040px;
  height: 100%;
  @media (max-width: 876px) {
    margin-bottom: 120px;
  }
`;

export const DescriptionContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  @media (max-width: 876px) {
    max-width: 648px;
    flex-direction: column;
  }
  @media (max-width: 500px) {
    gap: 0;
  }
`;

export const background = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
export const backgroundContainer = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const BackgroundWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  height: fit-content;
  width: 100%;
  @media (max-width: 500px) {
    height: 100vh;
  }
`;
export const MobileWrapper = styled(motion.div)`
  display: flex;
  @media (max-width: 876px) {
    display: none;
  }
`;
export const TabletWrapper = styled(motion.div)`
  display: none;
  width: 100%;
  max-width: 648px;
  height: 368px;
  @media (max-width: 876px) {
    display: flex;
  }
  @media (max-width: 500px) {
    height: 350px;
  }
`;
export const ParallelWrapper = styled(motion.div)`
  position: absolute;
  z-index: 990;
  bottom: 20%;
  left: 0;
  @media (max-width: 876px) {
    top: 8%;
  }
`;
export const Description = styled(motion.div)`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding-top: 74px;
  width: 422px;
  gap: 3px;
  margin: 0 auto;
  z-index: 10;
  @media (max-width: 876px) {
    padding-top: 24px;
    width: 100%;
    justify-content: start;
    height: fit-content;
  }
  @media (max-width: 500px) {
    padding-top: 24px;
    gap: 12px;
  }
`;
