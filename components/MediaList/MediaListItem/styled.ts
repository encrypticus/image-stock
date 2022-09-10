import { ListItem } from '@material-ui/core';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { MediaType } from 'types/enums';

export const ListItemStyled = styled(ListItem)<{
  mediaType: MediaType;
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
    height: ${props.theme.uiPoint * 48 + 5}px;
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

  ${(props) =>
    props.mediaType === MediaType.VIDEO &&
    css`
      @media ${props.theme.media.tablet} {
        height: unset;
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

export const VideoStyled = styled.video`
  ${(props) => css`
    border-radius: ${props.theme.uiPoint + 3}px;
    height: 100%;
    width: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media ${props.theme.media.tablet} {
      position: initial;
      transform: none;
      width: 100%;
    }
  `}
`;

export const ResolutionStyled = styled.div`
  ${(props) => css`
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 2;
  `}
`;
