import React, { useEffect, useState, useRef } from 'react';

import PropTypes from 'prop-types';

import { Zoom } from '../../lib/animations';
import { Categories } from './Categories';
import { Favorites } from './Favorites';
import { FilterMenuButton } from './FilterMenuButton';
import { MainMenu as FilterMenu } from './FilterMenus/MainMenu';
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
  const [anchorElt, setAnchorElt] = useState(null);
  const isFilterMenuOpen = Boolean(anchorElt);
  const headerRef = useRef(null);

  const handleFilterMenuOpen = (event) => {
    setAnchorElt(event.currentTarget);
  };

  const handleFilterMenuClose = () => {
    setAnchorElt(null);
  };

  const renderFilterMenu = () => (
    <FilterMenu
      anchorElt={anchorElt}
      open={isFilterMenuOpen}
      onClose={handleFilterMenuClose}
    />
  );

  const getMarginTop = (marginTop) => {
    setMarginTop(marginTop);
  };

  const toggleHeader = (reduce) => {
    const { current: header } = headerRef;
    if (reduce) {
      header.classList.add(classes.scrolledDown);
      setTimeout(() => getMarginTop(80), 600);
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
        <FilterMenuButton filterMenuHandler={handleFilterMenuOpen} />
        {renderFilterMenu()}
      </div>
      <MainSearch />
      <Categories />
    </header>
  );
};

Header.propTypes = {
  setMarginTop: PropTypes.func.isRequired,
};
