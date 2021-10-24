import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeMediaType } from 'redux/reducers/media-data-reducer';
import { RootState } from 'redux/store';

export const usePresenter = () => {
  const dispatch = useDispatch();
  const {
    mediaDataReducer: { mediaType },
  } = useSelector((state: RootState) => state);

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    dispatch(changeMediaType(event.target.value as string));
  };

  return {
    mediaType,
    handleChange,
  };
};
