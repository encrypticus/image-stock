import React from 'react';
import Link from 'next/link';
import { FavoriteIconStyled, LinkStyled, LinkTextStyled, ViewStyled } from './styled';

export const Favorites = () => {
  return (
    <ViewStyled>
      <Link href={'favorites'}>
        <LinkStyled href={'favorites'}>
          <FavoriteIconStyled />
          <LinkTextStyled>Избранное</LinkTextStyled>
        </LinkStyled>
      </Link>
    </ViewStyled>
  );
};
