import { ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { changeMediaType, clearMediaData } from 'redux/reducers/media-data-reducer';
import { RootState } from 'redux/store';

export const usePresenter = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    mediaDataReducer: { mediaType },
  } = useSelector((state: RootState) => state);

  const handleChange = ({ target: { value: mediaType } }: ChangeEvent<{ value: string }>) => {
    dispatch(changeMediaType(mediaType));
    const queryString = `${router.pathname}?mediaType=${mediaType}`;
    dispatch(clearMediaData());
    router.push(queryString);
  };

  return {
    mediaType,
    handleChange,
  };
};
