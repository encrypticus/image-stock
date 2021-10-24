import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearMediaData, changeOptions } from 'redux/reducers/media-data-reducer';
import { RootState } from 'redux/store';
import { getQueryString } from 'utils/query-string';

export const usePresenter = () => {
  const {
    mediaDataReducer: {
      options,
      mediaType,
      options: { order },
    },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(clearMediaData());
    dispatch(changeOptions({ order: event.target.value }));

    const settings = {
      options: { ...options, order: event.target.value },
      mediaType,
    };

    const optionsQueryString = getQueryString(settings.options);
    const queryString = `${router.pathname}?mediaType=${settings.mediaType}${optionsQueryString}`;
    router.push(queryString);
  };

  return {
    order,
    handleChange,
  };
};
