import React from 'react';

import { Favorite as FavoriteIcon } from '@material-ui/icons';
import Link from 'next/link';

import { useStyles } from './styles';

export const Favorites = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Link href="favorites">
        <a className={styles.link} href="favorites">
          <FavoriteIcon className={styles.icon} />
          Избранное
        </a>
      </Link>
    </div>
  );
};
