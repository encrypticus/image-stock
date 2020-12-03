import React from 'react';

import { Button } from '@material-ui/core';
import { History as HistoryIcon } from '@material-ui/icons';

import { useStyles } from './styles';

export const History = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Button
        variant="text"
        startIcon={<HistoryIcon />}
        classes={{
          root: styles.button,
          label: styles.label,
          startIcon: styles.icon,
        }}
      >
        История поиска
      </Button>
    </div>
  );
};
