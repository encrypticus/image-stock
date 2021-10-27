import { FC } from 'react';
import { Button } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { usePresenter } from 'components/Header/ResetFilter/usePresenter';

interface Props {}

export const ResetFilter: FC<Props> = () => {
  const { handleResetFilter } = usePresenter();
  return (
    <ViewStyled>
      <Button onClick={handleResetFilter} variant={'outlined'}>
        Сбросить фильтр
      </Button>
    </ViewStyled>
  );
};

const ViewStyled = styled.div`
  ${(props) => css`
    width: 100%;
    margin-top: ${props.theme.uiPoint * 4}px;
    display: flex;
    justify-content: center;
    .MuiButton-root {
      color: #fff;
      border-color: ${props.theme.colors.green600};
    }
  `}
`;
