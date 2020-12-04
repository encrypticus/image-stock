import React, { useEffect, useState, useRef } from 'react';

import { Zoom } from '../../lib/animations';
import { Categories } from './Categories';
import { Favorites } from './Favorites';
import { History } from './History';
import { Logo } from './Logo';
import { MainSearch } from './Search/MainSearch';
import { SmallSearch } from './Search/SmallSearch';
import classes from './style.module.scss';
import { useStyles } from './styles';

export const Header = () => {
  const styles = useStyles();
  const [scroll, scrollTo] = useState('');
  const [yOffset, setYOffset] = useState(0);
  const [searchShown, showSearch] = useState(false);
  const [headerReduced, reduceHeader] = useState(false);
  const headerRef = useRef(null);

  const toggleHeader = (reduce) => {
    const { current: header } = headerRef;
    reduce ? header.classList.add(classes.scrolledDown) : header.classList.remove(classes.scrolledDown);
  };

  useEffect(() => {
    toggleHeader(headerReduced);
  }, [headerReduced]);

  useEffect(() => {
    let lastPageYOffset = 0;
    const { current: header, current: { scrollHeight } } = headerRef;
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
    if (scroll === 'down' && yOffset > 500) {
      reduceHeader(true);
      showSearch(true);
    } else if (scroll === 'up' && yOffset === 0) {
      reduceHeader(false);
      showSearch(false);
    }
  }, [scroll, yOffset]);

  return (
    <header className={styles.root} ref={headerRef}>
      <div className={`${styles.inner} inner-container`}>
        <Logo />
        <Zoom inProp={searchShown}>
          <SmallSearch
            headerReduced={headerReduced}
            reduceHeader={reduceHeader}
          />
        </Zoom>
        <Favorites />
        <History />
      </div>
      <MainSearch />
      <Categories />
    </header>
  );
};
