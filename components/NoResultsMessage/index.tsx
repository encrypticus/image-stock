import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface Props {}

export const NoResultsMessage: FC<Props> = () => {
  return <NoResultsMessageStyled>По данному запросу нет результатов</NoResultsMessageStyled>;
};

const NoResultsMessageStyled = styled.div`
  ${(props) => css`
    color: #000;
    font-size: ${props.theme.fonts.size.h1}px;
    text-align: center;
    margin-top: ${props.theme.uiPoint * 30}px;
  `}
`;
