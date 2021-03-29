import { ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '../redux/store';
import { theme } from '../styles/theme';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
