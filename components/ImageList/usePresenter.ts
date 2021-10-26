import Router, { useRouter } from 'next/router';
import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, changeOptions } from 'redux/reducers/media-data-reducer';
import { RootState } from 'redux/store';
import { Colors } from 'types/enums';
import { MediaData } from 'types/index';
import { getQueryString } from 'utils/query-string';

export const usePresenter = (mediaData: MediaData) => {
  const listRef = useRef(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    mediaDataReducer: {
      mediaData: { hits },
      mediaType: storeMediaType,
      options,
    },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    dispatch(add(mediaData.data));
  }, [mediaData]);

  useEffect(() => {
    let {
      options: { safesearch, editors_choice, colors },
    } = mediaData;
    const safesearchFromQueryString = String(safesearch) !== 'false';
    const editorsChoiceFromQueryString = String(editors_choice) === 'true';
    colors && (colors = (colors as string).split(',') as Colors[]);

    dispatch(
      changeOptions({
        ...mediaData.options,
        safesearch: safesearchFromQueryString,
        editors_choice: editorsChoiceFromQueryString,
        colors: colors ?? '',
      }),
    );
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

    if (lastMediaItemLoaded instanceof HTMLElement) {
      const lastMediaItemLoadedOffset: number =
        lastMediaItemLoaded.offsetTop + lastMediaItemLoaded.clientHeight;
      const pageOffset: number = window.pageYOffset + window.innerHeight;

      if (pageOffset > lastMediaItemLoadedOffset && !loading) {
        if (mediaData.currentPage < mediaData.maxPage) {
          const nextPage: number = Number(mediaData.currentPage) + 1;

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

  return {
    listRef,
    hits,
    loading,
  };
};
