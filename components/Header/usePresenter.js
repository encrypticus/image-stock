import React, { useEffect, useRef, useState } from 'react';
import classes from './style.module.scss';

export const usePresenter = () => {
  const [scrollDirection, setScrollDirection] = useState('');
  const [yOffset, setYOffset] = useState(0);
  const [isSearchShown, setIsSearchShown] = useState(false);
  const [isHeaderMinified, setIsHeaderMinified] = useState(false);
  const [anchorElt, setAnchorElt] = useState(null);
  const isFilterMenuOpen = Boolean(anchorElt);
  const headerRef = useRef(null);

  const handleFilterMenuOpen = (event) => {
    setAnchorElt(event.currentTarget);
  };

  const handleFilterMenuClose = () => {
    setAnchorElt(null);
  };

  const toggleHeaderHeight = (minify) => {
    const { current: headerDOM } = headerRef;
    if (minify) {
      headerDOM.classList.add(classes.minified);
    } else {
      headerDOM.classList.remove(classes.minified);
    }
  };

  useEffect(() => {
    toggleHeaderHeight(isHeaderMinified);
  }, [isHeaderMinified]);

  useEffect(() => {
    let lastPageYOffset = 0;
    const { current: headerDOM } = headerRef;

    const pageScrolledUp = () => lastPageYOffset > pageYOffset;

    const pageScrolledDown = () => lastPageYOffset < pageYOffset;

    window.addEventListener('scroll', () => {
      if (pageScrolledUp()) setScrollDirection('up');
      if (pageScrolledDown()) setScrollDirection('down');

      lastPageYOffset = pageYOffset;
      setYOffset(pageYOffset);
    });

    window.addEventListener('resize', () => {
      headerDOM.style.maxHeight = `${headerDOM.scrollHeight}px`;
    });
  }, []);

  useEffect(() => {
    if (scrollDirection === 'down' && yOffset > 10) {
      setIsHeaderMinified(true);
      setIsSearchShown(true);
    } else if (scrollDirection === 'up' && yOffset === 0) {
      setIsHeaderMinified(false);
      setIsSearchShown(false);
    }
  }, [scrollDirection, yOffset]);

  return {
    headerRef,
    isSearchShown,
    isHeaderMinified,
    setIsHeaderMinified,
    handleFilterMenuOpen,
    handleFilterMenuClose,
    isFilterMenuOpen,
    anchorElt,
  };
};
