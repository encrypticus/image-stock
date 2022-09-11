import { useRef } from 'react';

import PropTypes from 'prop-types';

import { PageHead } from '../components/Head';
import { Header } from '../components/Header';
import { MediaList } from '../components/MediaList';
import { useStyles } from '../styles/styles';
import { NoResultsMessage } from '../components/NoResultsMessage';

export default function Home({ mediaData }) {
  const styles = useStyles();

  const containerRef = useRef(null);

  return (
    <div className="page-container">
      <PageHead title="Главная" />
      <Header />

      <main style={{ marginTop: 320 }}>
        <div className={`inner-container ${styles.homePageContainer}`} ref={containerRef}>
          <MediaList mediaData={mediaData} />
          {!mediaData.data.totalHits && <NoResultsMessage />}
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
  const { page = 1, per_page = 40 } = query;
  let mediaData = null;

  try {
    const res = await fetch(process.env.URL + '/api/pages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...query, page, per_page }),
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
