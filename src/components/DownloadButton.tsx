import styled from '@emotion/styled';

export const Button = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 350px;
  height: 60px;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.textS};
  background: ${({ theme }) => theme.colors.lavender600};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  cursor: pointer;
  @media (max-width: 500px) {
    height: 48px;
    font-size: ${({ theme }) => theme.fontSizes.textM};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    border-radius: 10px;
  }
`;
