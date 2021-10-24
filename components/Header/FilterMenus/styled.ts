import { Checkbox, FormControlLabel, MenuItem } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const MenuItemStyled = styled(MenuItem)`
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
`;

export const LabelStyled = styled(FormControlLabel)`
  ${(props) => css`
    margin-right: 0;
    padding-right: ${props.theme.uiPoint * 3 + 1}px;
  `}
`;

export const GreenCheckboxStyled = styled(Checkbox)`
  color: ${(props) => props.theme.colors.green400};
  &.Mui-checked {
    color: ${(props) => props.theme.colors.green600};
  }
`;
