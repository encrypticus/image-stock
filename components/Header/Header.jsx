import React from 'react';

import { Categories } from './Categories';
import { Favorites } from './Favorites';
import { History } from './History';
import { Logo } from './Logo';
import { MainSearch } from './Search/MainSearch';
import { useStyles } from './styles';

export const Header = () => {
  const styles = useStyles();
  return (
    <header className={styles.root}>
      <div className={`${styles.inner} inner-container`}>
        <Logo />
        <Favorites />
        <History />
      </div>
      <MainSearch />
      <Categories />
    </header>
  );
};
