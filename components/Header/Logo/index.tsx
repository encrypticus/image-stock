import { ImgStyled, LinkStyled, LogoTextStyled, ViewStyled } from 'components/Header/Logo/styled';
import Link from 'next/link';
import React, { FC } from 'react';

export const Logo: FC = () => {
  return (
    <ViewStyled>
      <Link href="/">
        <LinkStyled href="/">
          <ImgStyled src="/images/logo.png" alt="Image Stock" />
          <LogoTextStyled>ImageStock</LogoTextStyled>
        </LinkStyled>
      </Link>
    </ViewStyled>
  );
};
