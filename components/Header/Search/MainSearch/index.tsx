import { FormStyled, InputStyled } from 'components/Header/Search/MainSearch/styled';
import { FC } from 'react';
import { usePresenter } from 'components/Header/Search/MainSearch/usePresenter';

export const MainSearch: FC = () => {
  const { handleSubmit, handleChange, query } = usePresenter();
  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled placeholder={'Поиск'} name={'query'} value={query} onChange={handleChange} />
    </FormStyled>
  );
};
