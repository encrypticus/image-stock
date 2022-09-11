import styled, { css } from 'styled-components';
import { Favorite } from '@mui/icons-material';

export const ViewStyled = styled.div`
  margin-left: 20px;
`;

export const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  font-size: 18px;
  ${(props) => css`
    @media ${props.theme.media.tablet} {
      font-size: 16px;
    }
  `};
`;

export const LinkTextStyled = styled.span`
  ${(props) => css`
    @media ${props.theme.media.mobile} {
      display: none;
    }
  `};
`;

export const FavoriteIconStyled = styled(Favorite)`
  margin-right: 7px;
  width: 28px;
  height: auto;
`;
