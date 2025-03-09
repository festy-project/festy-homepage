import { motion } from 'framer-motion';

import styled from '@emotion/styled';

export const Container = styled(motion.div)`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 100vh;
`;
export const ContainerInner = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 68px 0;
  width: 100%;
  height: 100%;
`;
export const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes.titleL};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.titleL};
  }
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSizes.titleM};
  }
`;
export const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSizes.textS};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 150%;
  }
`;
