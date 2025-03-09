import styled from '@emotion/styled';

import type { TextOptionProps } from './Txt.types';
import { css } from '@emotion/react';

export const StyledText = styled.span<TextOptionProps>`
  display: flex;
  position: relative;
  color: ${({ color, theme }) => color && theme?.colors?.[color]};
  font-size: ${({ fontSize, theme }) => fontSize && theme.fontSizes[fontSize]};
  font-weight: ${({ fontWeight, theme }) => fontWeight && theme.fontWeights[fontWeight]};
  text-transform: ${({ textTransform }) => textTransform};
  text-decoration: ${({ textDecoration }) => textDecoration};
  text-align: ${({ textAlign }) => textAlign};
  text-overflow: ${({ textOverflow }) => textOverflow};
  white-space: ${({ whiteSpace }) => whiteSpace};
  word-break: ${({ wordBreak }) => wordBreak};
  user-select: ${({ userSelect }) => (userSelect ? userSelect : 'none')};
  cursor: ${({ cursor }) => cursor};
  ${({ line }) =>
    line &&
    css`
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: ${line};
      -webkit-box-orient: vertical;
    `};
  transition: all 0.2s ease-in-out;
`;
export const RequiredDot = styled.div`
  display: flex;
  position: absolute;
  right: -10px;
  top: 50%;
  height: 6px;
  width: 6px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.cosmos600};
  transform: translate(50%, -50%);
`;
