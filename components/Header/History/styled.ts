import { Button } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const ViewStyled = styled.div`
  ${(props) => css`
    display: flex;
    align-items: center;
    margin-left: ${props.theme.uiPoint * 4}px;
  `}
`;

export const ButtonStyled = styled(Button)`
  ${(props) => css`
    padding: 0;
    border: 0;
    text-transform: none;
    font-weight: normal;
    @media ${props.theme.media.mobile} {
      min-width: auto;
    }

    .MuiSvgIcon-root {
      font-size: ${props.theme.uiPoint * 5 - 1}px;
      color: #fff;
    }
  `}
`;

export const ButtonTextStyled = styled.span`
  ${(props) => css`
    font-size: ${props.theme.uiPoint * 3 + 3}px;
    color: #fff;
    @media ${props.theme.media.tablet} {
      font-size: ${props.theme.fonts.size.h4}px;
    }
    @media ${props.theme.media.mobile} {
      display: none;
    }
  `}
`;
