import React from 'react';

import styled from '@emotion/styled';

const TableContainer = styled.div`
  opacity: 0.4;
  //background: #ffffff;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey600};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const TabletMock = () => {
  return <TableContainer />;
};

export default TabletMock;
