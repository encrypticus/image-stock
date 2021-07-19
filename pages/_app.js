import PropTypes from 'prop-types';
import '../styles/globals.scss'; // todo переписать на createGlobalStyle из styled components
import { Providers } from '../hocs/Providers';

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
