import { Button } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const ViewStyled = styled.div`
  display: flex;
  align-items: center;
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
      font-size: ${props.theme.uiPoint * 5 + 3}px;
    }
    .MuiButton-startIcon {
      margin-right: ${props.theme.uiPoint + 2}px;
    }
    .MuiButton-label {
      font-size: ${props.theme.uiPoint * 3 + 3}px;
      color: #fff;
      @media ${props.theme.media.tablet} {
        font-size: ${props.theme.fonts.size.h4}px;
      }
    }
  `}
`;

export const LabelStyled = styled.span`
  ${(props) => css`
    @media ${props.theme.media.mobile} {
      display: none;
    }
  `}
`;
