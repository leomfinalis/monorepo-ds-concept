import React, { useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme as PokiTheme, DsGlobalStyle } from '@dealsyte/poki';
import FinalisTheme from './foundations';

export interface ThemeProviderProps {
  withoutGlobalStyles?: boolean;
  theme?: any;
  children: React.ReactChild | undefined;
}

export const ThemeProvider = ({
  children,
  theme = null,
  withoutGlobalStyles,
  ...props
}: ThemeProviderProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const defaultTheme = {
    ...PokiTheme,
    foundations: FinalisTheme(mode),
    utils: {
      setMode,
      mode,
    },
  };
  return (
    <StyledThemeProvider {...props} theme={!theme ? defaultTheme : theme}>
      <>
        {!withoutGlobalStyles && <DsGlobalStyle />}
        {children}
      </>
    </StyledThemeProvider>
  );
};
