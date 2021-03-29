import { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';

import { PageHead } from '../components/Head';
import { Header } from '../components/Header';
import { ImageList } from '../components/ImageList';
import { useStyles } from '../styles/styles';

export default function Home({ mediaData }) {
  const styles = useStyles();

  const mainRef = useRef(null);
  const main = mainRef.current;
  const containerRef = useRef(null);

  const [marginTop, setMarginTop] = useState(0);

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
        <div
          className={`inner-container ${styles.homePageContainer}`}
          ref={containerRef}
        >
          <ImageList
            mediaData={mediaData}
          />
        </div>
      </main>

      <footer />
    </div>
  );
}

Home.propTypes = {
  mediaData: PropTypes.object.isRequired,
};

export async function getServerSideProps({ query }) {
  const { page = 1 } = query;
  let mediaData = null;

  try {
    const res = await fetch(process.env.URL + '/api/pages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...query, page }),
    });
    if (res.status !== 200) {
      throw new Error('Failed to fetch');
    }
    mediaData = await res.json();
  } catch (e) {
    mediaData = { error: { message: e.message } };
  }

  return { props: { mediaData } };
}
