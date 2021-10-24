import { InputBase } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const FormStyled = styled.form`
  ${(props) => css`
    position: relative;
    display: flex;
    justify-content: center;
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: -${props.theme.uiPoint + 3}px;
      width: 62.5%;
      height: 1px;
      background-image: url(/images/line.png);
      background-repeat: no-repeat;
      background-size: contain;
      transform: translateX(25%);
      transform-origin: center center;
    }
  `}
`;

export const InputStyled = styled(InputBase)`
  ${(props) => css`
    input {
      position: relative;
      color: #fff;
      font-size: ${props.theme.uiPoint * 14 + 2}px;
      font-family: inherit;
      text-align: center;
      &::placeholder {
        color: #fff;
        opacity: 1;
      }
      @media ${props.theme.media.tablet} {
        font-size: ${props.theme.uiPoint * 10}px;
      }
      @media ${props.theme.media.mobile} {
        font-size: ${props.theme.uiPoint * 7 + 1}px;
      }
    }
  `}
`;
