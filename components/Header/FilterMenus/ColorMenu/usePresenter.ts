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
      ? ([...(colors as Colors[]), colorName] as Colors[])
      : (colors as Colors[]).filter((color: string) => color !== colorName);
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

  const handleTransparentSelection = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    let newColors = [...(colors as Colors[])];
    if (checked) newColors.push(Colors.TRANSPARENT);
    else newColors = newColors.filter((color) => color !== Colors.TRANSPARENT);

    dispatch(changeOptions({ colors: newColors }));
    dispatch(clearMediaData());

    const settings = {
      options: { ...options, colors: newColors.join(',') },
      mediaType,
    };

    const optionsQueryString = getQueryString(settings.options);
    const queryString = `${router.pathname}?mediaType=${settings.mediaType}${optionsQueryString}`;
    router.push(queryString);
  };

  const handleGrayScaleSelection = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    let newColors = [...(colors as Colors[])];
    if (checked) newColors.push(Colors.GRAYSCALE);
    else newColors = newColors.filter((color) => color !== Colors.GRAYSCALE);

    dispatch(changeOptions({ colors: newColors }));
    dispatch(clearMediaData());

    const settings = {
      options: { ...options, colors: newColors.join(',') },
      mediaType,
    };

    const optionsQueryString = getQueryString(settings.options);
    const queryString = `${router.pathname}?mediaType=${settings.mediaType}${optionsQueryString}`;
    router.push(queryString);
  };

  return {
    colors,
    handleColorSelection,
    handleTransparentSelection,
    handleGrayScaleSelection,
  };
};
