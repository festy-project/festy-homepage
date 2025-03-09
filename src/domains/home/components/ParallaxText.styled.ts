import { motion } from 'framer-motion';

import styled from '@emotion/styled';

export const ParallaxBox = styled.div`
  margin: 0;
  display: flex;
  width: 100%;
`;
export const ParallaxScrollBox = styled(motion.div)`
  font-weight: 600;
  width: 100%;
  font-size: 64px;
  gap: 10px;
  display: flex;
  background: ${({ theme }) => theme.colors.grey900};
`;
