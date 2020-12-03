import { makeStyles } from '@material-ui/core/styles';

const func = 'cubic-bezier(0.16, 1, 0.3, 1)'; // cubic-bezier(0.33, 1, 0.68, 1)

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '100%',
    backgroundColor: '#000',
    padding: '90px 20px',
    overflow: 'hidden',
    transition: `max-height .5s ${func}, padding-bottom .5s ${func}, padding-top .5s ${func}`,
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
