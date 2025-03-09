import React from 'react';

import { RequiredDot, StyledText } from './Txt.styled';
import type { TextProps } from './Txt.types';

const Txt = ({
  children,
  fontSize = 'textS',
  fontWeight = 'regular',
  color = 'white',
  isRequired,
  ...rest
}: TextProps) => {
  return (
    <StyledText fontSize={fontSize} fontWeight={fontWeight} color={color} {...rest}>
      {children}
      {isRequired && <RequiredDot />}
    </StyledText>
  );
};

export default Txt;
