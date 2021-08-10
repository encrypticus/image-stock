import { FC } from 'react';
import { ListItemStyled, ListItemTextStyled, ListStyled, ViewStyled, } from 'components/Header/Categories/styled';
import classes from './style.module.scss';
import { usePresenter } from 'components/Header/Categories/usePresenter';

export const Categories: FC = () => {
  const { listRef, wrapperRef, selectCategory, navMenuData } = usePresenter();

  return (
    <ViewStyled className={classes.masked} ref={wrapperRef}>
      <ListStyled ref={listRef}>
        {navMenuData.map((item, index) => (
          <ListItemStyled button key={index}>
            <ListItemTextStyled primary={item} key={index} onClick={() => selectCategory(item)} />
          </ListItemStyled>
        ))}
      </ListStyled>
    </ViewStyled>
  );
};
