import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '../redux/store';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
