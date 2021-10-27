import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useResetStore } from 'hooks/useResetStore';
import { MediaType } from 'types/enums';

export const usePresenter = () => {
  const {
    mediaDataReducer: { mediaType },
  } = useSelector((state: RootState) => state);
  const { reset } = useResetStore();

  const handleChange = ({ target: { value: mediaType } }: ChangeEvent<{ value: unknown }>) =>
    reset(mediaType as MediaType);

  return {
    mediaType,
    handleChange,
  };
};
