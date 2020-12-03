import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#000',
    padding: '90px 20px',
    [theme.breakpoints.down(641)]: {
      paddingTop: 20,
      paddingBottom: 20,
    }
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 30,
  },
}));
