import { motion } from 'framer-motion';

import styled from '@emotion/styled';

export const TimeTableContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const TimeTableWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
`;
export const TimeTableCardSectionContainer = styled(motion.div)`
  position: relative;
  padding: 0 100px;
  width: 1200px;
  height: 632px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const TimeTableCardSection = styled(motion.section)`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 10px;
`;
export const DescriptionContainer = styled(motion.article)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 10;
`;
export const Description = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 auto;
  width: 850px;
  gap: 28px;
  @media (max-width: 500px) {
    height: 100%;
  }
  padding-top: 20px;
`;

export const TimeLineWrapper = styled(motion.div)`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;

  z-index: 100;
  display: flex;
  flex-direction: column;
`;
