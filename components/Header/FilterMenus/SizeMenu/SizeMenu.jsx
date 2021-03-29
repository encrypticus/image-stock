import React from 'react';

import {
  Menu, MenuItem, TextField, Button,
} from '@material-ui/core';
import { Close as CloseIcon, Check as CheckIcon } from '@material-ui/icons';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { changeOptions, clearMediaData } from '../../../../redux/reducers/media-data-reducer';
import { getQueryString } from '../../../../utils/query-string';
import { useStyles } from './styles';

export const SizeMenu = ({ anchorElt, open, onClose }) => {
  const styles = useStyles();
  const { mediaDataReducer: { options, mediaType, options: { min_width = 0, min_height = 0 } } } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChangeWidth = (event) => {
    dispatch(changeOptions({ min_width: parseInt(event.target.value, 10) || 0 }));
  };

  const handleChangeHeight = (event) => {
    dispatch(changeOptions({ min_height: parseInt(event.target.value, 10) || 0 }));
  };

  const handleChangeSize = () => {
    dispatch(clearMediaData());

    const settings = {
      options: { ...options, min_width, min_height },
      mediaType,
    };

    const optionsQueryString = getQueryString(settings.options);
    const queryString = `${router.pathname}?mediaType=${settings.mediaType}${optionsQueryString}`;
    router.push(queryString);
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
      <MenuItem>
        <TextField
          onChange={handleChangeWidth}
          classes={{
            root: styles.textField,
          }}
          label="мин. ширина"
          InputLabelProps={{
            shrink: true,
          }}
          type="number"
          variant="outlined"
          size="small"
        />
        <CloseIcon className={styles.closeIcon} fontSize="small" />
        <TextField
          onChange={handleChangeHeight}
          classes={{
            root: styles.textField,
          }}
          label="мин. высота"
          InputLabelProps={{
            shrink: true,
          }}
          type="number"
          variant="outlined"
          size="small"
        />
        <Button
          classes={{
            root: styles.buttonGo,
            label: styles.buttonLabel,
            startIcon: styles.startIcon,
          }}
          variant="contained"
          startIcon={<CheckIcon />}
          onClick={handleChangeSize}
        />
      </MenuItem>
    </Menu>
  );
};

SizeMenu.propTypes = {
  anchorElt: PropTypes.any,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
