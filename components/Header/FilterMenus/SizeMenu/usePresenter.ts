import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeOptions, clearMediaData } from 'redux/reducers/media-data-reducer';
import { RootState } from 'redux/store';
import { getQueryString } from 'utils/query-string';

export const usePresenter = () => {
  const {
    mediaDataReducer: {
      options,
      mediaType,
      options: { min_width, min_height },
    },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChangeWidth = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeOptions({ min_width: parseInt(event.target.value, 10) || 0 }));
  };

  const handleChangeHeight = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeOptions({ min_height: parseInt(event.target.value, 10) || 0 }));
  };

  const handleChangeSize = () => {
    dispatch(clearMediaData());

    const settings = {
      options: { ...options, min_width, min_height },
      mediaType,
    };

    const optionsQueryString = getQueryString(settings.options);
    const queryString = `${router.pathname}?mediaType=${settings.mediaType}${optionsQueryString}`;
    router.push(queryString);
  };

  return {
    handleChangeWidth,
    handleChangeHeight,
    handleChangeSize,
  };
};
