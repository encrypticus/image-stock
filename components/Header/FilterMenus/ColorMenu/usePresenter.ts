import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOptions, clearMediaData } from 'redux/reducers/media-data-reducer';
import { RootState } from 'redux/store';
import { Colors } from 'types/enums';
import { getQueryString } from 'utils/query-string';

export const usePresenter = () => {
  let {
    mediaDataReducer: {
      options,
      mediaType,
      options: { colors = [] },
    },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleColorSelection = ({
    target: { checked, name: colorName },
  }: ChangeEvent<HTMLInputElement>) => {
    colors = checked
      ? ([...colors, colorName] as Colors[])
      : colors.filter((color: string) => color !== colorName);
    dispatch(changeOptions({ colors }));
    dispatch(clearMediaData());

    const settings = {
      options: { ...options, colors: colors.join(',') },
      mediaType,
    };

    const optionsQueryString = getQueryString(settings.options);
    const queryString = `${router.pathname}?mediaType=${settings.mediaType}${optionsQueryString}`;
    router.push(queryString);
  };

  return {
    colors,
    handleColorSelection,
  };
};
