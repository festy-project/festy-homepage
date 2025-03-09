import { motion } from 'framer-motion';

import styled from '@emotion/styled';

export const LayoutContainer = styled(motion.main)`
  height: calc(var(--vh, 1vh) * 100 - 70);
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  overflow-x: hidden;
  & > section:nth-child(4) {
    margin-bottom: 0;
  }
`;
