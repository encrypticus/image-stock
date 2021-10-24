import { Search as SearchIcon } from '@material-ui/icons';
import { ViewStyled, ButtonStyled, LabelStyled } from 'components/Header/Search/SmallSearch/styled';
import { FC } from 'react';

interface Props {
  reduceHeader: (minified: boolean) => void;
  headerReduced: boolean;
}

export const SmallSearch: FC<Props> = ({ reduceHeader, headerReduced }) => (
  <ViewStyled>
    <ButtonStyled
      onClick={() => reduceHeader(!headerReduced)}
      variant={'text'}
      startIcon={<SearchIcon />}
    >
      <LabelStyled>Поиск</LabelStyled>
    </ButtonStyled>
  </ViewStyled>
);
