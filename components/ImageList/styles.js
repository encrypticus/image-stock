import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    columnCount: 3,
    columnGap: 27,
    [theme.breakpoints.down(769)]: {
      columnCount: 2,
      columnGap: 10,
    },
    [theme.breakpoints.down(481)]: {
      columnCount: 1,
    },
  },
}));
