import styled, { css } from 'styled-components';
const func = 'cubic-bezier(0.16, 1, 0.3, 1)'; // cubic-bezier(0.33, 1, 0.68, 1)

export const ViewStyled = styled.header`
  max-height: 315px;
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  background-color: #000;
  padding: 45px 20px;
  overflow: hidden;
  transition: max-height 0.7s ${func}, padding-bottom 0.7s ${func}, padding-top 0.7s ${func};
  ${(props) => css`
    @media ${props.theme.media.mobile} {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  `};
`;

export const ViewInnerStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
