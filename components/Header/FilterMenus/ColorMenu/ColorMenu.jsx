import React from 'react';

import {
  Menu, MenuItem, Checkbox, FormControlLabel,
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { changeOptions, clearMediaData } from '../../../../redux/reducers/media-data-reducer';
import { useStyles } from './styles';
import { getQueryString } from '../../../../utils/query-string';

export const ColorMenu = ({ anchorElt, open, onClose }) => {
  const styles = useStyles();
  let { mediaDataReducer: { options, mediaType, options: { colors = [] } } } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleColorSelection = ({ target: { checked, name: colorName } }) => {
    colors = checked ? [ ...colors, colorName] : colors.filter(color => color !== colorName);
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
      <MenuItem className={styles.menuItem}>
        <div className={styles.checkBoxWrapper}>
          <FormControlLabel
            control={(
              <Checkbox
                className={clsx(styles.greenCheckbox, styles.checked)}
              />
            )}
            label="прозрачные"
          />
        </div>
        <div className={styles.checkBoxWrapper}>
          <FormControlLabel
            control={(
              <Checkbox
                className={clsx(styles.greenCheckbox, styles.checked)}
              />
            )}
            label="чёрно-белые"
          />
        </div>
        <div>
          <Checkbox
            icon={<span className={clsx(styles.icon, styles.red)} />}
            checkedIcon={<span className={clsx(styles.icon, styles.red, styles.checkedIcon)} />}
            name="red"
            checked={colors.includes('red')}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<span className={clsx(styles.icon, styles.orange)} />}
            checkedIcon={<span className={clsx(styles.icon, styles.orange, styles.checkedIcon)} />}
            name="orange"
            checked={colors.includes('orange')}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<span className={clsx(styles.icon, styles.green)} />}
            checkedIcon={<span className={clsx(styles.icon, styles.green, styles.checkedIcon)} />}
            name="green"
            checked={colors.includes('green')}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<span className={clsx(styles.icon, styles.yellow)} />}
            checkedIcon={<span className={clsx(styles.icon, styles.yellow, styles.checkedIcon, styles.borderDark)} />}
            name="yellow"
            checked={colors.includes('yellow')}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<span className={clsx(styles.icon, styles.turquoise)} />}
            checkedIcon={<span
              className={clsx(styles.icon, styles.turquoise, styles.checkedIcon, styles.borderDark)} />}
            name="turquoise"
            checked={colors.includes('turquoise')}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<span className={clsx(styles.icon, styles.blue)} />}
            checkedIcon={<span className={clsx(styles.icon, styles.blue, styles.checkedIcon)} />}
            name="blue"
            checked={colors.includes('blue')}
            onChange={handleColorSelection}
          />
        </div>
        <div>
          <Checkbox
            icon={<span className={clsx(styles.icon, styles.lilac)} />}
            checkedIcon={<span className={clsx(styles.icon, styles.lilac, styles.checkedIcon, styles.borderDark)} />}
            name="lilac"
            checked={colors.includes('lilac')}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<span className={clsx(styles.icon, styles.pink)} />}
            checkedIcon={<span className={clsx(styles.icon, styles.pink, styles.checkedIcon, styles.borderDark)} />}
            name="pink"
            checked={colors.includes('pink')}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<span className={clsx(styles.icon, styles.white)} />}
            checkedIcon={<span className={clsx(styles.icon, styles.white, styles.checkedIcon, styles.borderDark)} />}
            name="white"
            checked={colors.includes('white')}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<span className={clsx(styles.icon, styles.gray)} />}
            checkedIcon={<span className={clsx(styles.icon, styles.gray, styles.checkedIcon)} />}
            name="gray"
            checked={colors.includes('gray')}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<span className={clsx(styles.icon, styles.black)} />}
            checkedIcon={<span className={clsx(styles.icon, styles.black, styles.checkedIcon)} />}
            name="black"
            checked={colors.includes('black')}
            onChange={handleColorSelection}
          />
          <Checkbox
            icon={<span className={clsx(styles.icon, styles.brown)} />}
            checkedIcon={<span className={clsx(styles.icon, styles.brown, styles.checkedIcon)} />}
            name="brown"
            checked={colors.includes('brown')}
            onChange={handleColorSelection}
          />
        </div>
      </MenuItem>
    </Menu>
  );
};

ColorMenu.propTypes = {
  anchorElt: PropTypes.any,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
