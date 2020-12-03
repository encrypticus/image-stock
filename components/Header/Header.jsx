import React, { useEffect, useState, useRef } from 'react';

import { Categories } from './Categories';
import { Favorites } from './Favorites';
import { History } from './History';
import { Logo } from './Logo';
import { MainSearch } from './Search/MainSearch';
import classes from './style.module.scss';
import { useStyles } from './styles';

export const Header = () => {
  const styles = useStyles();
  const [scroll, scrollTo] = useState('');
  const [yOffset, setYOffset] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    let lastPageYOffset = 0;
    const { current: header } = headerRef;
    const { current: { scrollHeight } } = headerRef;
    header.style.maxHeight = `${scrollHeight}px`;

    const pageScrolledUp = () => lastPageYOffset > pageYOffset;

    const pageScrolledDown = () => lastPageYOffset < pageYOffset;

    window.addEventListener('scroll', () => {
      if (pageScrolledUp()) scrollTo('up');
      if (pageScrolledDown()) scrollTo('down');

      lastPageYOffset = pageYOffset;
      setYOffset(pageYOffset);
    });
  }, []);

  useEffect(() => {
    const header = headerRef.current;

    if (scroll === 'down' && yOffset > 500) header.classList.add(classes.scrolledDown);
    else if (scroll === 'up' && yOffset === 0) header.classList.remove(classes.scrolledDown);
  }, [scroll, yOffset]);

  return (
    <header className={styles.root} ref={headerRef}>
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
