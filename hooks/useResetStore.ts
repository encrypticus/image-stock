import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { resetStore, changeMediaType } from 'redux/reducers/media-data-reducer';
import { MediaType } from 'types/enums';

export const useResetStore = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const reset = (mediaType: MediaType) => {
    dispatch(resetStore());
    dispatch(changeMediaType(mediaType));
    const queryString = `${router.pathname}?mediaType=${mediaType}`;
    router.push(queryString);
  };

  return {
    reset,
  };
};
