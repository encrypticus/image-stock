import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOptions } from 'redux/reducers/media-data-reducer';
import { RootState } from 'redux/store';

export const usePresenter = () => {
  const dispatch = useDispatch();
  const {
    mediaDataReducer: {
      options: { lang },
    },
  } = useSelector((state: RootState) => state);

  const handleChange = ({ target: { value: lang } }: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeOptions({ lang }));
  };

  return {
    lang,
    handleChange,
  };
};
