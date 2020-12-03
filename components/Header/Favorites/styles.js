import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 'auto',
  },
  icon: {
    marginRight: 7,
    width: 28,
    height: 'auto',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 18,
    [theme.breakpoints.down(801)]: {
      fontSize: 16,
    },
  },
  label: {
    [theme.breakpoints.down(641)]: {
      display: 'none'
    }
  }
}));
