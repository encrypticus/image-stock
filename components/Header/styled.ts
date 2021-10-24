import styled, { css } from 'styled-components';

const func = 'cubic-bezier(0.16, 1, 0.3, 1)'; // cubic-bezier(0.33, 1, 0.68, 1)

export const ViewStyled = styled.header`
  ${(props) => css`
    max-height: ${props.theme.uiPoint * 63}px;
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    background-color: #000;
    padding: ${props.theme.uiPoint * 9}px ${props.theme.uiPoint * 4}px;
    overflow: hidden;
    transition: max-height 0.7s ${func}, padding-bottom 0.7s ${func}, padding-top 0.7s ${func};
    @media ${props.theme.media.mobile} {
      padding-top: ${props.theme.uiPoint * 4}px;
      padding-bottom: ${props.theme.uiPoint * 4}px;
    }
  `};
`;

export const ViewInnerStyled = styled.div`
  ${(props) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${props.theme.uiPoint * 6}px;
  `}
`;
