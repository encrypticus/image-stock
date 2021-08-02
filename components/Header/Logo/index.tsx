import React, { FC } from 'react';
import Link from 'next/link';
import { ImgStyled, LinkStyled, LogoTextStyled, ViewStyled } from 'components/Header/Logo/styled';

export const Logo: FC = () => {
  return (
    <ViewStyled>
      <Link href="/">
        <LinkStyled href="/">
          <ImgStyled src="/images/logo.png" alt="Image Stock" />
          <LogoTextStyled>imageStock</LogoTextStyled>
        </LinkStyled>
      </Link>
    </ViewStyled>
  );
};
