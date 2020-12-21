import React from 'react';

import Head from 'next/head';
import PropTypes from 'prop-types';

export const PageHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
    <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
    <script src="https://unpkg.com/infinite-scroll@3/dist/infinite-scroll.pkgd.min.js"></script>
  </Head>
);

PageHead.propTypes = {
  title: PropTypes.string.isRequired,
};
