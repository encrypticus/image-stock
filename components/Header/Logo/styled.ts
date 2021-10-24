import styled, { css } from 'styled-components';

export const ViewStyled = styled.div`
  ${(props) => css`
    display: flex;
    margin-right: auto;
    align-items: center;
    font-size: ${props.theme.fonts.size.h2}px;
    font-weight: 700;
    @media ${props.theme.media.tablet} {
      font-size: ${props.theme.fonts.size.h3}px;
    }
  `}
`;

export const LinkStyled = styled.a`
  display: flex;
  align-items: center;
`;

export const ImgStyled = styled.img`
  ${(props) => css`
    margin-right: ${props.theme.uiPoint * 5 - 1}px;
  `}
`;

export const LogoTextStyled = styled.span`
  ${(props) => css`
    @media ${props.theme.media.mobile} {
      display: none;
    }
  `}
`;
