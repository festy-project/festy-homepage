import { motion } from 'framer-motion';

import styled from '@emotion/styled';

export const StackContainer = styled(motion.section)<{ stack: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 100 * ${({ stack }) => stack});
  min-height: calc(var(--vh, 1vh) * 100 * ${({ stack }) => stack});
  width: 100%;
  margin-bottom: calc(var(--vw, 1vw) * 30);
`;
