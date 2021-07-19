import React from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';

export const PageHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

PageHead.propTypes = {
  title: PropTypes.string.isRequired,
};
