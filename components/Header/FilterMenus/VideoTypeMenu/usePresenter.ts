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
      options: { video_type },
    },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = ({ target: { value: video_type } }: ChangeEvent<HTMLInputElement>) => {
    dispatch(clearMediaData());
    dispatch(changeOptions({ video_type }));

    const settings = {
      options: { ...options, video_type },
      mediaType,
    };

    const optionsQueryString = getQueryString(settings.options);
    const queryString = `${router.pathname}?mediaType=${settings.mediaType}${optionsQueryString}`;
    router.push(queryString);
  };

  return {
    handleChange,
    video_type,
  };
};
