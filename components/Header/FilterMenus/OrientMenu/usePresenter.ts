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
      options: { orientation },
    },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = ({ target: { value: orientation } }: ChangeEvent<HTMLInputElement>) => {
    dispatch(clearMediaData());
    dispatch(changeOptions({ orientation }));

    const settings = {
      options: { ...options, orientation },
      mediaType,
    };

    const optionsQueryString = getQueryString(settings.options);
    const queryString = `${router.pathname}?mediaType=${settings.mediaType}${optionsQueryString}`;
    router.push(queryString);
  };

  return {
    orientation,
    handleChange,
  };
};
