import React, { FC, MouseEvent } from 'react';
import { Tune as TuneIcon } from '@mui/icons-material';
import {
  ButtonStyled,
  ButtonTextStyled,
  ViewStyled,
} from 'components/Header/FilterMenuButton/styled';

interface Props {
  filterMenuHandler: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const FilterMenuButton: FC<Props> = ({ filterMenuHandler }) => {
  return (
    <ViewStyled>
      <ButtonStyled onClick={filterMenuHandler} variant="text" startIcon={<TuneIcon />}>
        <ButtonTextStyled>Фильтр</ButtonTextStyled>
      </ButtonStyled>
    </ViewStyled>
  );
};
