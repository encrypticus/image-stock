import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    // width: '32.1621%', // for Masonry.js
    // maxWidth: 476, // for Masonry.js
    width: 'auto',
    maxWidth: '95%',
    marginBottom: 20,
    marginRight: 20,
    padding: 0,
    [theme.breakpoints.down(800)]: {
      width: '100%',
      maxWidth: '100%',
      marginRight: 0,
      marginBottom: 10,
    },
  },
  img: {
    // width: '100%', // for Masonry.js
    // height: 'auto', // for Masonry.js
    width: 'auto',
    height: 300,
    borderRadius: 8,
    [theme.breakpoints.down(800)]: {
      width: '100%',
      height: 'auto',
    },
  },
}));
