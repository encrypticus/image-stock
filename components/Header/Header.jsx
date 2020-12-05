import React, { useEffect, useState, useRef } from 'react';

import PropTypes from 'prop-types';

import { Zoom } from '../../lib/animations';
import { Categories } from './Categories';
import { Favorites } from './Favorites';
import { History } from './History';
import { Logo } from './Logo';
import { MainSearch } from './Search/MainSearch';
import { SmallSearch } from './Search/SmallSearch';
import classes from './style.module.scss';
import { useStyles } from './styles';

export const Header = ({ setMarginTop }) => {
  const styles = useStyles();
  const [scroll, scrollTo] = useState('');
  const [yOffset, setYOffset] = useState(0);
  const [searchShown, showSearch] = useState(false);
  const [headerReduced, reduceHeader] = useState(false);
  const headerRef = useRef(null);

  const getMarginTop = (marginTop) => {
    setMarginTop(marginTop);
  };

  const toggleHeader = (reduce) => {
    const { current: header } = headerRef;
    reduce ? header.classList.add(classes.scrolledDown) : header.classList.remove(classes.scrolledDown);
    if (reduce) {
      header.classList.add(classes.scrolledDown);
      getMarginTop(80);
    } else {
      header.classList.remove(classes.scrolledDown);
      setTimeout(() => getMarginTop(header.scrollHeight), 600);
    }
  };

  useEffect(() => {
    toggleHeader(headerReduced);
  }, [headerReduced]);

  useEffect(() => {
    let lastPageYOffset = 0;
    const { current: header, current: { scrollHeight } } = headerRef;
    header.style.maxHeight = `${scrollHeight}px`;
    getMarginTop(scrollHeight);

    const pageScrolledUp = () => lastPageYOffset > pageYOffset;

    const pageScrolledDown = () => lastPageYOffset < pageYOffset;

    window.addEventListener('scroll', () => {
      if (pageScrolledUp()) scrollTo('up');
      if (pageScrolledDown()) scrollTo('down');

      lastPageYOffset = pageYOffset;
      setYOffset(pageYOffset);
    });

    window.addEventListener('resize', () => {
      header.style.maxHeight = `${header.scrollHeight}px`;
      setTimeout(() => getMarginTop(header.scrollHeight), 600);
    });
  }, []);

  useEffect(() => {
    if (scroll === 'down' && yOffset > 200) {
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

Header.propTypes = {
  setMarginTop: PropTypes.func.isRequired,
};
