/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from 'react';

import { List } from '@material-ui/core';
import Router, { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { MetroSpinner } from 'react-spinners-kit';

import { add, changeOptions } from '../../redux/reducers/media-data-reducer';
import { getQueryString } from '../../utils/query-string';
import { ImageListItem } from './ImageListItem';
import { useStyles } from './styles';

export const ImageList = ({ mediaData }) => {
  const styles = useStyles();
  const listRef = useRef(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { mediaDataReducer: { mediaData: { hits }, mediaType: storeMediaType, options } } = useSelector((state) => state);
  const dispatch = useDispatch();
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  // let msnry;
  // const [masonry, setMasonry] = useState(null);

  useEffect(() => {
    if (mediaData) {
      if (mediaData.error) {
        console.log(mediaData.error);
      } else {
        dispatch(add(mediaData.data));
      }
    }
  }, [mediaData]);

  useEffect(() => {
    dispatch(changeOptions(mediaData.options));
  }, []);

  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);
    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
    };
  }, []);

  const handleScroll = () => {
    const lastMediaItemLoaded = document.querySelector('.grid > .grid-item:last-child');

    if (lastMediaItemLoaded) {
      const lastMediaItemLoadedOffset = lastMediaItemLoaded.offsetTop + lastMediaItemLoaded.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;

      if (pageOffset > lastMediaItemLoadedOffset && !loading) {
        if (mediaData.currentPage < mediaData.maxPage) {
          const nextPage = parseInt(mediaData.currentPage, 10) + 1;

          const settings = {
            options: { page: nextPage, ...options },
            mediaType: storeMediaType,
          };

          const optionsQueryString = getQueryString(settings.options);
          const queryString = `${router.pathname}?mediaType=${settings.mediaType}${optionsQueryString}`;

          router.push(queryString);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const renderImageList = (mediaList) => (
    mediaList.map(({ webformatURL, tags, id }, index) => (
      <ImageListItem
        key={`${id}#${index}`}
        src={webformatURL}
        tags={tags}
      />
    ))
  );

  // useEffect(() => {
  //   if (listRef.current) {
  //     msnry = new Masonry(listRef.current, {
  //       itemSelector: '.grid-item',
  //       gutter: 20,
  //       columnWidth: '.grid-sizer',
  //       percentPosition: true,
  //       transitionDuration: 0,
  //     });
  //     setMasonry(msnry);
  //     imagesLoaded( listRef.current ).on( 'progress', function() {
  //       // layout Masonry after each image loads
  //       msnry.layout();
  //     });
  //   }
  // }, [hits]);
  //
  // useEffect(() => {
  //   if (masonry) {
  //     imagesLoaded(listRef.current).on('progress', function () {
  //       masonry.reloadItems();
  //       masonry.layout();
  //     });
  //   }
  // }, [masonry]);

  return (
    <>
      <List
        className={`${styles.root} grid`}
        ref={listRef}
      >
        {/* <li className='grid-sizer'></li> need for Masonry.js */}
        {renderImageList(hits)}
      </List>
      {
        loading
        && (
        <div className="spinner-container">
          <MetroSpinner color="#83838A" size={60} />
        </div>
        )
      }
    </>
  );
};

ImageList.propTypes = {
  mediaData: PropTypes.object.isRequired,
};
