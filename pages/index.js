/* eslint-disable no-console */

import { useEffect } from 'react';

import PropTypes from 'prop-types';

import { PageHead } from '../components/Head';
import { Header } from '../components/Header';
import PixabayConnector, { pixabayConnector } from '../utils/pixabay-connector';

export default function Home({ images }) {
  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <div className="page-container">
      <PageHead title="Главная" />
      <Header />

      <main />

      <footer />
    </div>
  );
}

Home.propTypes = {
  images: PropTypes.object.isRequired,
};

export async function getStaticProps() {
  const { searchSettings: { perPage: { query: per_page } } } = PixabayConnector;

  const images = await pixabayConnector.searchImages({
    query: 'flowers',
    options: { [per_page]: 7 },
  });

  return {
    props: {
      images,
    },
  };
}
