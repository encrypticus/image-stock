import React, { FC } from 'react';

import { Zoom } from '../../lib/animations';
import { Categories } from './Categories';
import { Favorites } from 'components/Header/Favorites';
import { FilterMenuButton } from 'components/Header/FilterMenuButton';
import { MainMenu as FilterMenu } from './FilterMenus/MainMenu';
import { History } from './History';
import { Logo } from 'components/Header/Logo';
import { MainSearch } from './Search/MainSearch';
import { SmallSearch } from './Search/SmallSearch';
import { usePresenter } from 'components/Header/usePresenter';
import { ViewStyled, ViewInnerStyled } from './styled';

export const Header: FC = () => {
  const {
    headerRef,
    isFilterMenuOpen,
    handleFilterMenuClose,
    handleFilterMenuOpen,
    setIsHeaderMinified,
    isHeaderMinified,
    isSearchShown,
    anchorElt,
  } = usePresenter();

  return (
    <ViewStyled ref={headerRef}>
      <ViewInnerStyled className={'inner-container'}>
        <Logo />
        <Zoom inProp={isSearchShown}>
          <SmallSearch headerReduced={isHeaderMinified} reduceHeader={setIsHeaderMinified} />
        </Zoom>
        <Favorites />
        <History />
        <FilterMenuButton filterMenuHandler={handleFilterMenuOpen} />
        <FilterMenu anchorElt={anchorElt} open={isFilterMenuOpen} onClose={handleFilterMenuClose} />
      </ViewInnerStyled>
      <MainSearch />
      <Categories />
    </ViewStyled>
  );
};
