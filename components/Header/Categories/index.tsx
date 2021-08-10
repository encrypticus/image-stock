import { FC } from 'react';
import { Box, List, ListItem, ListItemText } from '@material-ui/core';

import classes from './style.module.scss';
import { useStyles } from './styles';
import { usePresenter } from 'components/Header/Categories/usePresenter';

export const Categories: FC = () => {
  const { listRef, wrapperRef, selectCategory, navMenuData } = usePresenter();
  const styles = useStyles();

  return (
    <Box className={`${styles.wrapper} ${classes.masked}`} {...{ ref: wrapperRef }}>
      <List className={styles.root} ref={listRef}>
        {navMenuData.map((item, index) => (
          <ListItem classes={{ root: styles.item }} button key={index}>
            <ListItemText
              primary={item}
              key={index}
              classes={{ primary: styles.label }}
              onClick={() => selectCategory(item)}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
