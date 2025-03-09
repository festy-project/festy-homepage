import React from 'react';

import { ThemeProvider } from '@emotion/react';

import { GlobalStyles, theme } from './index';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: any;
}

const FestyTheme = ({ children, theme: initialTheme }: ThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme ?? initialTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default FestyTheme;
