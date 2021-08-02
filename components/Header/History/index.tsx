import React from 'react';
import { History as HistoryIcon } from '@material-ui/icons';

import { ButtonStyled, ButtonTextStyled, ViewStyled } from 'components/Header/History/styled';

export const History = () => {
  return (
    <ViewStyled>
      <ButtonStyled variant="text" startIcon={<HistoryIcon />}>
        <ButtonTextStyled>История поиска</ButtonTextStyled>
      </ButtonStyled>
    </ViewStyled>
  );
};
