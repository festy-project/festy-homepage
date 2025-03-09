import React from 'react';



import { motion, transform } from 'framer-motion';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { timeTableData } from '../mocks/timeTableData';
import { Txt } from '@/components/Txt';
import type {ColorToken} from '@/styles';



export const CardContainer = styled(motion.div)<{
  width: number;
  height: number;
  type: 'SOLID' | 'LINE';
  background: ColorToken;
  marginTop: string;
}>`
  z-index: 2;
  border-radius: 15px;
  padding: 20px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin-top: ${({ marginTop }) => marginTop};
  ${({ type, background, theme }) =>
    type === 'SOLID' &&
    css`
      background: ${theme.colors[background]};
    `};
  ${({ type, background, theme }) =>
    type === 'LINE' &&
    css`
      box-shadow: 0px 0px 0px 1px ${theme.colors[background]};
      background: ${theme.colors.grey900};
    `};
  @media (max-width: 768px) {
    width: ${({ width }) => width * 0.6}px;
    height: ${({ height }) => height * 0.8}px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

interface TimeTableCardProps {
  title: string;
  content: string;

  background?: ColorToken;
  width: number;
  height: number;
  index: number;
  type?: 'SOLID' | 'LINE';
  marginTop?: string;
  percentage: number;
}
const TimeTableCard = ({
  title,
  content,
  width,
  height,
  index,
  percentage,
  background = 'lavender500',
  type = 'SOLID',
  marginTop = '0px',
}: TimeTableCardProps) => {
  const totalItems = timeTableData.reduce((acc, group) => acc + group.length, 0);
  const animationThreshold = 1 / (totalItems + 1);

  const cardRange = (index: number) => {
    const start = (index + 1) * animationThreshold;
    const end = (index + 2) * animationThreshold;
    return [start, end];
  };
  const yTransformer = transform(cardRange(index), [50, 0]);
  const opacityTransformer = transform(cardRange(index), [0, 1]);
  const yProgress = yTransformer(percentage);
  const opacityProgress = opacityTransformer(percentage);

  return (
    <CardContainer
      width={width}
      height={height}
      background={background}
      type={type}
      marginTop={marginTop}
      animate={{
        opacity: opacityProgress,
        y: yProgress,
      }}
      transition={{
        type: 'tween',
      }}
    >
      <TextWrapper>
        <Txt fontSize={'textS'} fontWeight={'semiBold'} color={'white'}>
          {title}
        </Txt>
        <Txt fontSize={'labelM'} fontWeight={'regular'} color={'grey400'}>
          {content}
        </Txt>
      </TextWrapper>
    </CardContainer>
  );
};

export default TimeTableCard;
