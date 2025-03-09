import Link from 'next/link';

import styled from '@emotion/styled';

export const NavContainer = styled.nav`
  width: 100%;
  height: 70px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;
export const NavContainerInner = styled.div`
  width: 92%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //@media (max-width: 500px) {
  //  justify-content: center;
  //}
`;

export const NavRouteBox = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;
export const NavRouteItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.white};
`;
