import { makeStyles } from '@material-ui/core/styles';

const func = 'cubic-bezier(0.16, 1, 0.3, 1)'; // cubic-bezier(0.33, 1, 0.68, 1)

export const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 315,
    position: 'fixed',
    zIndex: 99,
    left: 0,
    right: 0,
    backgroundColor: '#000',
    padding: '45px 20px',
    overflow: 'hidden',
    transition: `max-height .7s ${func}, padding-bottom .7s ${func}, padding-top .7s ${func}`,
    [theme.breakpoints.down(641)]: {
      paddingTop: 20,
      paddingBottom: 20,
    },
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 30,
  },
}));
