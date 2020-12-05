import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: 'inline-block',
    marginBottom: 27,
    padding: 0,
    lineHeight: 0,
    [theme.breakpoints.down(769)]: {
      marginBottom: 10,
    },
  },
  img: {
    width: '100%',
    height: 'auto',
    borderRadius: 8,
  },
}));
