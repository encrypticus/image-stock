import React from 'react';

import {
  Menu, MenuItem, Radio, FormControlLabel,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { changeOptions, clearMediaData } from '../../../../redux/reducers/media-data-reducer';
import { getQueryString } from '../../../../utils/query-string';
import { useStyles } from '../styles';

export const SortMenu = ({ anchorElt, open, onClose }) => {
  const styles = useStyles();
  const { mediaDataReducer: { options, mediaType, options: { order = 'popular' } } } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (event) => {
    dispatch(clearMediaData());
    dispatch(changeOptions({ order: event.target.value }));

    const settings = {
      options: { ...options, order: event.target.value },
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
          checked={order === 'popular'}
          onChange={handleChange}
          value="popular"
          control={<Radio />}
          label="популярные"
          name="radio-button-popularity"
        />
      </MenuItem>

      <MenuItem
        className={styles.menuItem}
        onClick={handleClose}
      >
        <FormControlLabel
          className={styles.label}
          checked={order === 'latest'}
          onChange={handleChange}
          value="latest"
          control={<Radio />}
          label="последние"
          name="radio-button-popularity"
        />
      </MenuItem>
    </Menu>
  );
};

SortMenu.propTypes = {
  anchorElt: PropTypes.any,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
