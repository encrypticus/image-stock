import styled, { css } from 'styled-components';

export const ViewStyled = styled.div`
  ${(props) => css`
    display: flex;
    margin-right: auto;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    @media ${props.theme.media.tablet} {
      font-size: 20px;
    }
  `}
`;

export const LinkStyled = styled.a`
  display: flex;
  align-items: center;
`;

export const ImgStyled = styled.img`
  margin-right: 24px;
`;

export const LogoTextStyled = styled.span`
  ${(props) => css`
    @media ${props.theme.media.mobile} {
      display: none;
    }
  `}
`;
