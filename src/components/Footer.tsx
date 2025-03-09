import React from 'react';

import styled from '@emotion/styled';

import Email from '../assets/icons/Email';
import Instagram from '../assets/icons/Instagram';

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.grey800};
`;
export const FooterContentBox = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  padding: 20px 50px;
  @media (max-width: 500px) {
    padding: 20px 10px;
  }
`;

export const CopyRight = styled.p`
  display: flex;
  align-items: flex-end;
  font-size: ${({ theme }) => theme.fontSizes.labelM};
  color: ${({ theme }) => theme.colors.white};
`;
export const IconButtonBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  width: 32px;
  min-height: 32px;
  height: 32px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.grey500};
  padding: 0;
  border: none;
  cursor: pointer;
`;

const Footer = () => {
  const date = new Date();
  return (
    <StyledFooter>
      <FooterContentBox>
        <IconButtonBox>
          {/*@ts-ignore*/}
          <IconButton as={'a'} aria-label={'mail'} href="mailto:festy.dev@gmail.com">
            <Email />
          </IconButton>
          <IconButton
            as={'a'}
            aria-label={'instagram'}
            onClick={() => window.open('https://www.instagram.com/festy.app/', '_blank')}
          >
            <Instagram />
          </IconButton>
        </IconButtonBox>
        <CopyRight>
          Copyright &#169; {date.getFullYear() ?? '2023'} Festy. All rights reserved
        </CopyRight>
      </FooterContentBox>
    </StyledFooter>
  );
};

export default Footer;
