import React, { useState } from 'react';

import {
  Menu, MenuItem, Checkbox, FormControlLabel,
} from '@material-ui/core';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { changeOptions, clearMediaData } from '../../../../redux/reducers/media-data-reducer';
import { getQueryString } from '../../../../utils/query-string';
import { ColorMenu } from '../ColorMenu';
import { ImageTypeMenu } from '../ImageTypeMenu';
import { LangMenu } from '../LangMenu';
import { MediaTypeMenu } from '../MediaTypeMenu';
import { OrientMenu } from '../OrientMenu';
import { SizeMenu } from '../SizeMenu';
import { SortMenu } from '../SortMenu';
import { VideoTypeMenu } from '../VideoTypeMenu';
import { useStyles } from './styles';

export const MainMenu = ({ anchorElt, open, onClose }) => {
  const styles = useStyles();
  const { mediaDataReducer: { options, mediaType, options: { safesearch, editors_choice } } } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const [langAnchorElt, setLangAnchorElt] = useState(null);
  const isLangMenuOpen = Boolean(langAnchorElt);
  const handleLangMenuOpen = (event) => {
    setLangAnchorElt(event.currentTarget);
  };
  const handleLangMenuClose = () => {
    setLangAnchorElt(null);
  };

  const [imageTypeAnchorElt, setImageTypeAnchorElt] = useState(null);
  const isImageTypeMenuOpen = Boolean(imageTypeAnchorElt);
  const handleImageTypeMenuOpen = (event) => {
    setImageTypeAnchorElt(event.currentTarget);
  };
  const handleImageTypeMenuClose = () => {
    setImageTypeAnchorElt(null);
  };

  const [videoTypeAnchorElt, setVideoTypeAnchorElt] = useState(null);
  const isVideoTypeMenuOpen = Boolean(videoTypeAnchorElt);
  const handleVideoTypeMenuOpen = (event) => {
    setVideoTypeAnchorElt(event.currentTarget);
  };
  const handleVideoTypeMenuClose = () => {
    setVideoTypeAnchorElt(null);
  };

  const [sizeAnchorElt, setSizeAnchorElt] = useState(null);
  const isSizeMenuOpen = Boolean(sizeAnchorElt);
  const handleSizeMenuOpen = (event) => {
    setSizeAnchorElt(event.currentTarget);
  };
  const handleSizeMenuClose = () => {
    setSizeAnchorElt(null);
  };

  const [colorAnchorElt, setColorAnchorElt] = useState(null);
  const isColorMenuOpen = Boolean(colorAnchorElt);
  const handleColorMenuOpen = (event) => {
    setColorAnchorElt(event.currentTarget);
  };
  const handleColorMenuClose = () => {
    setColorAnchorElt(null);
  };

  const [orientAnchorElt, setOrientAnchorElt] = useState(null);
  const isOrientMenuOpen = Boolean(orientAnchorElt);
  const handleOrientMenuOpen = (event) => {
    setOrientAnchorElt(event.currentTarget);
  };
  const handleOrientMenuClose = () => {
    setOrientAnchorElt(null);
  };

  const [sortAnchorElt, setSortAnchorElt] = useState(null);
  const isSortMenuOpen = Boolean(sortAnchorElt);
  const handleSortMenuOpen = (event) => {
    setSortAnchorElt(event.currentTarget);
  };
  const handleSortMenuClose = () => {
    setSortAnchorElt(null);
  };

  const handleSafeSearchChange = (event) => {
    dispatch(clearMediaData());
    dispatch(changeOptions({ safesearch: event.target.checked }));

    const settings = {
      options: { ...options, safesearch: event.target.checked },
      mediaType,
    };

    const optionsQueryString = getQueryString(settings.options);
    const queryString = `${router.pathname}?mediaType=${settings.mediaType}${optionsQueryString}`;
    router.push(queryString);
  };

  const handleEditorsChoice = (event) => {
    dispatch(clearMediaData());
    dispatch(changeOptions({ editors_choice: event.target.checked }));

    const settings = {
      options: { ...options, editors_choice: event.target.checked },
      mediaType,
    };

    const optionsQueryString = getQueryString(settings.options);
    const queryString = `${router.pathname}?mediaType=${settings.mediaType}${optionsQueryString}`;
    router.push(queryString);
  };

  const renderLangMenu = () => (
    <LangMenu
      anchorElt={langAnchorElt}
      open={isLangMenuOpen}
      onClose={handleLangMenuClose}
    />
  );

  const renderImageTypeMenu = () => (
    <ImageTypeMenu
      anchorElt={imageTypeAnchorElt}
      open={isImageTypeMenuOpen}
      onClose={handleImageTypeMenuClose}
    />
  );

  const renderVideoTypeMenu = () => (
    <VideoTypeMenu
      anchorElt={videoTypeAnchorElt}
      open={isVideoTypeMenuOpen}
      onClose={handleVideoTypeMenuClose}
    />
  );

  const renderSizeMenu = () => (
    <SizeMenu
      anchorElt={sizeAnchorElt}
      open={isSizeMenuOpen}
      onClose={handleSizeMenuClose}
    />
  );

  const renderColorMenu = () => (
    <ColorMenu
      anchorElt={colorAnchorElt}
      open={isColorMenuOpen}
      onClose={handleColorMenuClose}
    />
  );

  const renderOrientMenu = () => (
    <OrientMenu
      anchorElt={orientAnchorElt}
      open={isOrientMenuOpen}
      onClose={handleOrientMenuClose}
    />
  );

  const renderSortMenu = () => (
    <SortMenu
      anchorElt={sortAnchorElt}
      open={isSortMenuOpen}
      onClose={handleSortMenuClose}
    />
  );

  return (
    <Menu
      className={styles.root}
      anchorEl={anchorElt}
      open={open}
      onClose={onClose}
      keepMounted
      getContentAnchorEl={null}
    >
      <MenuItem>
        <MediaTypeMenu />
      </MenuItem>

      <MenuItem onClick={handleLangMenuOpen}>
        Язык поиска
      </MenuItem>
      {renderLangMenu()}

      {
        mediaType === 'image'
          ? (
            <MenuItem onClick={handleImageTypeMenuOpen}>
              Тип изображения
            </MenuItem>
          )
          : (
            <MenuItem onClick={handleVideoTypeMenuOpen}>
              Тип видео
            </MenuItem>
          )
      }
      {renderImageTypeMenu()}
      {renderVideoTypeMenu()}

      <MenuItem onClick={handleSizeMenuOpen}>
        Размер
      </MenuItem>
      {renderSizeMenu()}

      {
        mediaType === 'image' && (
          <MenuItem onClick={handleColorMenuOpen}>
            Цвет
          </MenuItem>
        )
      }
      {renderColorMenu()}

      {
        mediaType === 'image' && (
          <MenuItem onClick={handleOrientMenuOpen}>
            Ориентация
          </MenuItem>
        )
      }
      {renderOrientMenu()}

      <MenuItem onClick={handleSortMenuOpen}>
        Сортировать по
      </MenuItem>
      {renderSortMenu()}

      <MenuItem>
        <FormControlLabel
          control={(
            <Checkbox
              className={clsx(styles.greenCheckbox, styles.checked)}
              checked={safesearch}
              onChange={handleSafeSearchChange}
            />
          )}
          label="Безопасный поиск"
        />
      </MenuItem>

      <MenuItem>
        <FormControlLabel
          control={(
            <Checkbox
              className={clsx(styles.greenCheckbox, styles.checked)}
              checked={editors_choice}
              onChange={handleEditorsChoice}
            />
          )}
          label="Выбор редакции"
        />
      </MenuItem>
    </Menu>
  );
};

MainMenu.propTypes = {
  anchorElt: PropTypes.any,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
