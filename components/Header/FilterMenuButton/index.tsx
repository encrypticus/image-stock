import React, { FC, MouseEvent } from 'react';
import { Tune as TuneIcon } from '@material-ui/icons';
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
    <ViewStyled bgColor={'red'}>
      <ButtonStyled onClick={filterMenuHandler} variant="text" startIcon={<TuneIcon />}>
        <ButtonTextStyled>Фильтр</ButtonTextStyled>
      </ButtonStyled>
    </ViewStyled>
  );
};
