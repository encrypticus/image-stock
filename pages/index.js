/* eslint-disable no-console */

import { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';

import { PageHead } from '../components/Head';
import { Header } from '../components/Header';
import { ImageList } from '../components/ImageList';
import { pixabayConnector } from '../utils/pixabay-connector';
import { useStyles } from './styles';

export default function Home({ images }) {
  const styles = useStyles();
  const mainRef = useRef(null);
  const main = mainRef.current;
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    console.log(images);
  }, [images]);

  useEffect(() => {
    main && (main.style.marginTop = `${marginTop}px`);
  }, [marginTop]);

  return (
    <div className="page-container">
      <PageHead title="Главная" />
      <Header
        setMarginTop={setMarginTop}
      />

      <main ref={mainRef}>
        <div className={`inner-container ${styles.homePageContainer}`}>
          <ImageList
            items={images}
          />
        </div>
      </main>

      <footer />
    </div>
  );
}

Home.propTypes = {
  images: PropTypes.object.isRequired,
};

export async function getStaticProps() {
  // const { searchSettings: { perPage: { query: per_page } } } = PixabayConnector;

  const images = await pixabayConnector.searchImages();

  return {
    props: {
      images,
    },
  };
}
