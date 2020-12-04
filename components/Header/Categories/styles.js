import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    [theme.breakpoints.down(376)]: {
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      position: 'static',
      width: 'auto',
      marginLeft: '0px !important',
    },
  },
  item: {
    [theme.breakpoints.down(376)]: {
      width: 'auto',
    },
  },
  label: {
    fontFamily: 'inherit',
    fontSize: 18,
  },
  wrapper: {
    position: 'relative',
    width: '62.5%',
    margin: 'auto',
    overflow: 'hidden',
    minHeight: 65,
    [theme.breakpoints.down(801)]: {
      width: '100%',
    },
    [theme.breakpoints.down(376)]: {
      overflow: 'visible',
    },
  },
}));
