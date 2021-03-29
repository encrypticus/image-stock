import React from 'react';

import { Button } from '@material-ui/core';
import { Tune as TuneIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

export const FilterMenuButton = ({ filterMenuHandler }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Button
        onClick={filterMenuHandler}
        variant="text"
        startIcon={<TuneIcon />}
        classes={{
          root: styles.button,
          label: styles.label,
          startIcon: styles.icon,
        }}
      >
        <span className={styles.innerLabel}>Фильтр</span>
      </Button>
    </div>
  );
};

FilterMenuButton.propTypes = {
  filterMenuHandler: PropTypes.func.isRequired,
};
