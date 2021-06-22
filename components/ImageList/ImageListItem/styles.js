import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    // width: '32.1621%', // for Masonry.js
    // maxWidth: 476, // for Masonry.js
    position: 'relative',
    overflow: 'hidden',
    width: '23%',
    height: 200,
    maxWidth: '95%',
    marginBottom: 10,
    marginRight: 10,
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
    objectFit: 'cover',
    width: '100%',
    // height: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 8,
    [theme.breakpoints.down(800)]: {
      width: '100%',
      height: 'auto',
    },
  },
}));
