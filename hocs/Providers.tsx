import React, { FC } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { muiTheme } from 'styles/muiTheme';
import { vars } from 'styles/vars';
import { store } from 'redux/store';

export const Providers: FC = ({ children }) => (
  <ThemeProvider theme={vars}>
    <MuiThemeProvider theme={muiTheme}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </MuiThemeProvider>
  </ThemeProvider>
);
