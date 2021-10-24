import { useRouter } from 'next/router';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOptions, clearMediaData } from 'redux/reducers/media-data-reducer';
import { RootState } from 'redux/store';
import { getQueryString } from 'utils/query-string';

export const usePresenter = () => {
  const {
    mediaDataReducer: {
      options,
      mediaType,
      options: { safesearch, editors_choice },
    },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const [langAnchorElt, setLangAnchorElt] = useState<HTMLLIElement | null>(null);
  const isLangMenuOpen = Boolean(langAnchorElt);
  const handleLangMenuOpen = (event: MouseEvent<HTMLLIElement>) => {
    setLangAnchorElt(event.currentTarget);
  };
  const handleLangMenuClose = () => {
    setLangAnchorElt(null);
  };

  const [imageTypeAnchorElt, setImageTypeAnchorElt] = useState<HTMLLIElement | null>(null);
  const isImageTypeMenuOpen = Boolean(imageTypeAnchorElt);
  const handleImageTypeMenuOpen = (event: MouseEvent<HTMLLIElement>) => {
    setImageTypeAnchorElt(event.currentTarget);
  };
  const handleImageTypeMenuClose = () => {
    setImageTypeAnchorElt(null);
  };

  const [videoTypeAnchorElt, setVideoTypeAnchorElt] = useState<HTMLLIElement | null>(null);
  const isVideoTypeMenuOpen = Boolean(videoTypeAnchorElt);
  const handleVideoTypeMenuOpen = (event: MouseEvent<HTMLLIElement>) => {
    setVideoTypeAnchorElt(event.currentTarget);
  };
  const handleVideoTypeMenuClose = () => {
    setVideoTypeAnchorElt(null);
  };

  const [sizeAnchorElt, setSizeAnchorElt] = useState<HTMLLIElement | null>(null);
  const isSizeMenuOpen = Boolean(sizeAnchorElt);
  const handleSizeMenuOpen = (event: MouseEvent<HTMLLIElement>) => {
    setSizeAnchorElt(event.currentTarget);
  };
  const handleSizeMenuClose = () => {
    setSizeAnchorElt(null);
  };

  const [colorAnchorElt, setColorAnchorElt] = useState<HTMLLIElement | null>(null);
  const isColorMenuOpen = Boolean(colorAnchorElt);
  const handleColorMenuOpen = (event: MouseEvent<HTMLLIElement>) => {
    setColorAnchorElt(event.currentTarget);
  };
  const handleColorMenuClose = () => {
    setColorAnchorElt(null);
  };

  const [orientAnchorElt, setOrientAnchorElt] = useState<HTMLLIElement | null>(null);
  const isOrientMenuOpen = Boolean(orientAnchorElt);
  const handleOrientMenuOpen = (event: MouseEvent<HTMLLIElement>) => {
    setOrientAnchorElt(event.currentTarget);
  };
  const handleOrientMenuClose = () => {
    setOrientAnchorElt(null);
  };

  const [sortAnchorElt, setSortAnchorElt] = useState<HTMLLIElement | null>(null);
  const isSortMenuOpen = Boolean(sortAnchorElt);
  const handleSortMenuOpen = (event: MouseEvent<HTMLLIElement>) => {
    setSortAnchorElt(event.currentTarget);
  };
  const handleSortMenuClose = () => {
    setSortAnchorElt(null);
  };

  const handleSafeSearchChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    dispatch(clearMediaData());
    dispatch(changeOptions({ safesearch: checked }));

    const settings = {
      options: { ...options, safesearch: event.target.checked },
      mediaType,
    };

    const optionsQueryString = getQueryString(settings.options);
    const queryString = `${router.pathname}?mediaType=${settings.mediaType}${optionsQueryString}`;
    router.push(queryString);
  };

  const handleEditorsChoice = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    dispatch(clearMediaData());
    dispatch(changeOptions({ editors_choice: checked }));

    const settings = {
      options: { ...options, editors_choice: event.target.checked },
      mediaType,
    };

    const optionsQueryString = getQueryString(settings.options);
    const queryString = `${router.pathname}?mediaType=${settings.mediaType}${optionsQueryString}`;
    router.push(queryString);
  };

  return {
    langAnchorElt,
    isLangMenuOpen,
    handleLangMenuClose,
    imageTypeAnchorElt,
    isImageTypeMenuOpen,
    handleImageTypeMenuClose,
    videoTypeAnchorElt,
    isVideoTypeMenuOpen,
    handleVideoTypeMenuClose,
    sizeAnchorElt,
    isSizeMenuOpen,
    handleSizeMenuClose,
    colorAnchorElt,
    isColorMenuOpen,
    handleColorMenuClose,
    orientAnchorElt,
    isOrientMenuOpen,
    handleOrientMenuClose,
    sortAnchorElt,
    isSortMenuOpen,
    handleSortMenuClose,
    handleLangMenuOpen,
    mediaType,
    handleImageTypeMenuOpen,
    handleVideoTypeMenuOpen,
    handleSizeMenuOpen,
    handleColorMenuOpen,
    handleOrientMenuOpen,
    handleSortMenuOpen,
    safesearch,
    handleSafeSearchChange,
    editors_choice,
    handleEditorsChoice,
  };
};
