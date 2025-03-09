import React, { forwardRef } from 'react';

import Image from 'next/legacy/image';

import * as Styled from './styled';
import Link from 'next/link';

const Navigation = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Styled.NavContainer ref={ref}>
      <Styled.NavContainerInner>
        <Link href={'/apps/web-v2/public'} style={{ cursor: 'pointer', zIndex: '1000' }}>
          <Image alt={'Festy'} src={'/logos/Festy.svg'} width={80} height={120} />
        </Link>
      </Styled.NavContainerInner>
    </Styled.NavContainer>
  );
});

export default Navigation;
