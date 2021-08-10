import { MouseEvent, useEffect, useRef, useState } from 'react';
import classes from './style.module.scss';
import { mobileWidth } from 'utils/index';

export const usePresenter = () => {
  const [scrollDirection, setScrollDirection] = useState('');
  const [yOffset, setYOffset] = useState(0);
  const [isSearchShown, setIsSearchShown] = useState(false);
  const [isHeaderMinified, setIsHeaderMinified] = useState(false);
  const [anchorElt, setAnchorElt] = useState<null | HTMLElement>(null);
  const isFilterMenuOpen = Boolean(anchorElt);
  const headerRef = useRef<HTMLElement>(null);

  const handleFilterMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElt(event.currentTarget);
  };

  const handleFilterMenuClose = () => {
    setAnchorElt(null);
  };

  const toggleHeaderHeight = (minify: Boolean) => {
    const { current: headerDOM } = headerRef;
    if (minify) {
      headerDOM && headerDOM.classList.add(classes.minified);
    } else {
      headerDOM && headerDOM.classList.remove(classes.minified);
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
      headerDOM &&
        (headerDOM.style.maxHeight = window.innerWidth <= mobileWidth ? '620px' : '315px');
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
