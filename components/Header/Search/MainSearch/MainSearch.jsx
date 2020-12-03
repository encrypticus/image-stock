import React from 'react';

import { InputBase } from '@material-ui/core';

import { useStyles } from './styles';

export const MainSearch = () => {
  const styles = useStyles();

  return (
    <form className={styles.form}>
      <InputBase
        classes={{
          root: styles.root,
          input: styles.input,
        }}
        placeholder="Поиск"
      />
    </form>
  );
};
