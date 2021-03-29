import React, { useState } from 'react';

import {
  Menu, MenuItem, Radio, FormControlLabel,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { useStyles } from '../styles';

export const VideoTypeMenu = ({ anchorElt, open, onClose }) => {
  const styles = useStyles();
  const [selectedValue, setSelectedValue] = useState('all');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
          checked={selectedValue === 'all'}
          onChange={handleChange}
          value="all"
          control={<Radio />}
          label="все"
          name="radio-button-video"
        />
      </MenuItem>

      <MenuItem
        className={styles.menuItem}
        onClick={handleClose}
      >
        <FormControlLabel
          className={styles.label}
          checked={selectedValue === 'video'}
          onChange={handleChange}
          value="video"
          control={<Radio />}
          label="видео"
          name="radio-button-video"
        />
      </MenuItem>

      <MenuItem
        className={styles.menuItem}
        onClick={handleClose}
      >
        <FormControlLabel
          className={styles.label}
          checked={selectedValue === 'animation'}
          onChange={handleChange}
          value="animation"
          control={<Radio />}
          label="анимация"
          name="radio-button-video"
        />
      </MenuItem>
    </Menu>
  );
};

VideoTypeMenu.propTypes = {
  anchorElt: PropTypes.any,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
