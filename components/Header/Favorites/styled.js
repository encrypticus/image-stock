import styled from 'styled-components';
import { Favorite } from '@material-ui/icons';

export const ViewStyled = styled.div`
  margin-left: 20px;
`;

export const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  font-size: 18px;
  @media (max-width: 801px) {
    font-size: 16px;
  }
`;

export const LinkTextStyled = styled.span`
  @media (max-width: 641px) {
    display: none;
  }
`;

export const FavoriteIconStyled = styled(Favorite)`
  margin-right: 7px;
  width: 28px;
  height: auto;
`;
