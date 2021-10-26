import React, { FC } from 'react';
import { MetroSpinner } from 'react-spinners-kit';
import styled from 'styled-components';

interface Props {}

export const Spinner: FC<Props> = () => (
  <ViewStyled>
    <MetroSpinner color="#83838A" size={60} />
  </ViewStyled>
);

const ViewStyled = styled.div`
  display: flex;
  justify-content: center;
`;
