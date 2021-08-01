import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';

export const ViewStyled = styled('div')<{ bgColor?: string }>`
  display: flex;
  align-items: center;
  margin-left: 20px;
  background: ${({ bgColor }) => (bgColor === 'red' ? 'red' : 'blue')};
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
      font-size: 28px;
      color: #fff;
    }
  `}
`;

export const ButtonTextStyled = styled.span`
  ${(props) => css`
    font-size: 18px;
    color: #fff;
    @media ${props.theme.media.tablet} {
      font-size: 16px;
    }
    @media ${props.theme.media.mobile} {
      display: none;
    }
  `}
`;
