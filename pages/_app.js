import PropTypes from 'prop-types';
import { Providers } from '../hocs/Providers';
import '../styles/globals.scss'; // todo переписать на createGlobalStyle из styled components

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
