import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useResetStore } from 'hooks/useResetStore';

export const usePresenter = () => {
  const {
    mediaDataReducer: { mediaType },
  } = useSelector((state: RootState) => state);
  const { reset } = useResetStore();

  const handleResetFilter = () => reset(mediaType);

  return {
    handleResetFilter,
  };
};
