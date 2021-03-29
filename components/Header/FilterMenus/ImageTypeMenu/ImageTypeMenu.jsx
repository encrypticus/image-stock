import React from 'react';

import {
  Menu, MenuItem, Radio, FormControlLabel,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { clearMediaData, changeOptions } from '../../../../redux/reducers/media-data-reducer';
import { getQueryString } from '../../../../utils/query-string';
import { useStyles } from '../styles';

export const ImageTypeMenu = ({ anchorElt, open, onClose }) => {
  const styles = useStyles();
  const { mediaDataReducer: { options, mediaType, options: { image_type = 'all' } } } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (event) => {
    dispatch(clearMediaData());
    dispatch(changeOptions({ image_type: event.target.value }));

    const settings = {
      options: { ...options, image_type: event.target.value },
      mediaType,
    };

    const optionsQueryString = getQueryString(settings.options);
    const queryString = `${router.pathname}?mediaType=${settings.mediaType}${optionsQueryString}`;
    router.push(queryString);
  };

  const handleClose = () => {
    setTimeout(onClose, 100);
  };

  return (
    <Menu
      anchorEl={anchorElt}
      open={open}
      onClose={onClose}
      keepMounted
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem
        className={styles.menuItem}
        onClick={handleClose}
      >
        <FormControlLabel
          className={styles.label}
          checked={image_type === 'all'}
          onChange={handleChange}
          value="all"
          control={<Radio />}
          label="все"
          name="radio-button-image"
        />
      </MenuItem>

      <MenuItem
        className={styles.menuItem}
        onClick={handleClose}
      >
        <FormControlLabel
          className={styles.label}
          checked={image_type === 'photo'}
          onChange={handleChange}
          value="photo"
          control={<Radio />}
          label="фото"
          name="radio-button-image"
        />
      </MenuItem>

      <MenuItem
        className={styles.menuItem}
        onClick={handleClose}
      >
        <FormControlLabel
          className={styles.label}
          checked={image_type === 'illustration'}
          onChange={handleChange}
          value="illustration"
          control={<Radio />}
          label="иллюстрация"
          name="radio-button-image"
        />
      </MenuItem>

      <MenuItem
        className={styles.menuItem}
        onClick={handleClose}
      >
        <FormControlLabel
          className={styles.label}
          checked={image_type === 'vector'}
          onChange={handleChange}
          value="vector"
          control={<Radio />}
          label="вектор"
          name="radio-button-image"
        />
      </MenuItem>
    </Menu>
  );
};

ImageTypeMenu.propTypes = {
  anchorElt: PropTypes.any,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
