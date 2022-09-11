import styled, { css } from 'styled-components';
import { List, ListItem, ListItemText } from '@mui/material';

export const ViewStyled = styled.div`
  ${(props) => css`
    position: relative;
    width: 62.5%;
    margin: auto;
    overflow: hidden;
    min-height: 65px;
    @media ${props.theme.media.mobile} {
      overflow: visible;
    }
    @media ${props.theme.media.tablet} {
      width: 100%;
    }
  `}
`;

export const ListStyled = styled(List)`
  ${(props) => css`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    @media ${props.theme.media.mobile} {
      flex-wrap: wrap;
      justify-content: space-around;
      position: static;
      width: auto;
      margin-left: 0 !important;
    }
  `}
`;

export const ListItemStyled = styled(ListItem)`
  ${(props) => css`
    @media ${props.theme.media.mobile} {
      width: auto;
    }
  `}
`;

export const ListItemTextStyled = styled(ListItemText)`
  .MuiTypography-root {
    font-family: inherit;
    font-size: 18px;
  }
`;
