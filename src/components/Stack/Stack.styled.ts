import styled from '@emotion/styled';
import type { StackOptionProps } from './Stack';

export const StyledStack = styled.div<StackOptionProps>`
  display: flex;
  width: ${({ width, direction }) =>
    direction === 'column' && width === 'initial' ? '100%' : width};
  min-width: ${({ minWidth }) => minWidth ?? 'initial'};
  height: ${({ height, direction }) =>
    direction === 'row' && height === 'initial' ? '100%' : height};
  min-height: ${({ minHeight }) => minHeight ?? 'initial'};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ spacing }) => spacing && spacing}px;
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex: ${({ flex }) => flex};
  background: ${({ background, theme }) => (background ? theme.colors[background] : 'transparent')};
  border-radius: ${({ radius }) => radius && radius}px;
  box-sizing: border-box;
  animation: 0.2s all ease-in-out;
`;
