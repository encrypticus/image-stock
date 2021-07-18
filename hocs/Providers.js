import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Provider as ReduxProvider } from 'react-redux';
import { muiTheme } from '../styles/muiTheme';
import { store } from '../redux/store';

export const Providers = ({ children }) => (
  <MuiThemeProvider theme={muiTheme}>
    <ReduxProvider store={store}>{children}</ReduxProvider>
  </MuiThemeProvider>
);
