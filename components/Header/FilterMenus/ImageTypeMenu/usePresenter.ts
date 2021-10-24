import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOptions, clearMediaData } from 'redux/reducers/media-data-reducer';
import { RootState } from 'redux/store';
import { getQueryString } from 'utils/query-string';

export const usePresenter = () => {
  const {
    mediaDataReducer: {
      options,
      mediaType,
      options: { image_type },
    },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(clearMediaData());
    dispatch(changeOptions({ image_type: event.target.value }));

    const settings = {
      options: { ...options, image_type: event.target.value },
      mediaType,
    };

    const optionsQueryString = getQueryString(settings.options);
    const queryString = `${router.pathname}?mediaType=${settings.mediaType}${optionsQueryString}`;
    router.push(queryString);
  };

  return {
    image_type,
    handleChange,
  };
};
