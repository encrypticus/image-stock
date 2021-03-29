import React from 'react';

import {
  Menu, MenuItem, Radio, FormControlLabel,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { changeOptions } from '../../../../redux/reducers/media-data-reducer';
import { useStyles } from '../styles';

export const LangMenu = ({ anchorElt, open, onClose }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { mediaDataReducer: { options: { lang = 'en' } } } = useSelector((state) => state);

  const handleChange = (event) => {
    dispatch(changeOptions({ lang: event.target.value }));
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
          checked={lang === 'en'}
          onChange={handleChange}
          value="en"
          control={<Radio />}
          label="en"
          name="radio-button-lang"
        />
      </MenuItem>

      <MenuItem
        className={styles.menuItem}
        onClick={handleClose}
      >
        <FormControlLabel
          className={styles.label}
          checked={lang === 'ru'}
          onChange={handleChange}
          value="ru"
          control={<Radio />}
          label="ru"
          name="radio-button-lang"
        />
      </MenuItem>
    </Menu>
  );
};

LangMenu.propTypes = {
  anchorElt: PropTypes.any,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
