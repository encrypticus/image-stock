import { TextField, Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import styled, { css } from 'styled-components';

export const TextFieldStyled = styled(TextField)`
  ${(props) => css`
    max-width: ${props.theme.uiPoint * 20}px;
    .MuiInputBase-root {
      color: #fff;
    }
  `}
`;

export const CloseIconStyled = styled(Close)`
  ${(props) => css`
    margin-left: ${props.theme.uiPoint - 3}px;
    margin-right: ${props.theme.uiPoint - 3}px;
  `}
`;

export const ButtonStyled = styled(Button)`
  ${(props) => css`
    min-width: unset;
    margin-left: ${props.theme.uiPoint + 2}px;
    padding-left: ${props.theme.uiPoint + 1}px;
    padding-right: ${props.theme.uiPoint + 1}px;
    background-color: ${props.theme.colors.green700};
    &:hover {
      background-color: ${props.theme.colors.green600};
    }
    .MuiButton-label {
      color: #fff;
      font-size: ${props.theme.fonts.size.h4}px;
    }
    .MuiButton-startIcon {
      margin-left: 0;
      margin-right: 0;
    }
  `}
`;
