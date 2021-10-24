import { ListItem } from '@material-ui/core';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export const ListItemStyled = styled(ListItem)<{
  imageHeight: number;
  component?: ReactNode;
  initial?: string;
  animate?: string;
  variants?: any;
}>`
  ${(props) => css`
    position: relative;
    overflow: hidden;
    width: 23%;
    height: ${props.theme.uiPoint * 40}px;
    max-width: 95%;
    margin-bottom: ${props.theme.uiPoint * 2}px;
    margin-right: ${props.theme.uiPoint * 2}px;
    padding: 0;
    border-radius: ${props.theme.uiPoint + 3}px;
    @media ${props.theme.media.tablet} {
      width: 100%;
      height: ${props.imageHeight}px;
      margin-right: 0;
      overflow: visible;
    }
  `}
`;

export const ImgStyled = styled.img`
  ${(props) => css`
    object-fit: cover;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${props.theme.uiPoint + 3}px;
    @media ${props.theme.media.tablet} {
      width: 100%;
      height: 100%;
    }
  `}
`;
