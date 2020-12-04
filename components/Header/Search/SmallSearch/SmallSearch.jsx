import React from 'react';

import { Button } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

export const SmallSearch = ({ reduceHeader, headerReduced }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Button
        onClick={() => reduceHeader(!headerReduced)}
        variant="text"
        startIcon={<SearchIcon />}
        classes={{
          root: styles.button,
          label: styles.label,
          startIcon: styles.icon,
        }}
      >
        <span className={styles.innerLabel}>Поиск</span>
      </Button>
    </div>
  );
};

SmallSearch.propTypes = {
  reduceHeader: PropTypes.func.isRequired,
  headerReduced: PropTypes.bool.isRequired,
};
