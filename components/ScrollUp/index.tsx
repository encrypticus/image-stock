import { FC } from 'react';
import ButtonUp from 'react-scroll-up';
import styled from 'styled-components';

export const ScrollUp: FC = () => (
  <ButtonUp showUnder={500}>
    <ScrollUpStyled>🔼</ScrollUpStyled>
  </ButtonUp>
);

const ScrollUpStyled = styled.div`
  font-size: 40px;
  opacity: 0.4;
  transition: opacity 0.5s;
  &:hover {
    opacity: 1;
  }
`;
