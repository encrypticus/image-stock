import { SyntheticEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { resetStore, changeMediaType, changeOptions } from 'redux/reducers/media-data-reducer';
import { RootState } from 'redux/store';

export const usePresenter = () => {
  const {
    mediaDataReducer: {
      mediaType,
      options: { query },
    },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      query: { value: string };
    };
    const query = target.query.value.trim();
    if (!query) return;

    dispatch(resetStore());
    dispatch(changeMediaType(mediaType));
    dispatch(changeOptions({ query }));
    const queryString = `${router.pathname}?mediaType=${mediaType}&query=${query}`;
    router.push(queryString);
  };

  const handleChange = ({ target: { value: query } }: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeOptions({ query }));

  return {
    handleSubmit,
    handleChange,
    query,
  };
};
