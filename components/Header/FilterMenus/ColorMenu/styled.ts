import { MenuItem } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { Colors } from 'types/enums';

interface IconProps {
  color: Colors;
  checked?: boolean;
  darkBorder?: boolean;
}

export const MenuItemStyled = styled(MenuItem)`
  flex-direction: column;
`;

export const CheckBoxWrapperStyled = styled.div`
  width: 100%;
`;

export const CheckBoxBlockStyled = styled.div<{ disabled: boolean }>`
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.1;
    `}
`;

export const CheckBoxIconStyled = styled.span<IconProps>`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors[props.color]};

  ${(props) =>
    props.checked &&
    css`
      border: 2px solid #fff;
    `}

  ${(props) =>
    props.darkBorder &&
    css`
      border-color: #000;
    `}
`;
