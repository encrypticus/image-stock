import { FormStyled, InputStyled } from 'components/Header/Search/MainSearch/styled';
import { FC } from 'react';

export const MainSearch: FC = () => {
  return (
    <FormStyled>
      <InputStyled placeholder="Поиск" />
    </FormStyled>
  );
};
