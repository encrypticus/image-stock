import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 700,
    [theme.breakpoints.down(801)]: {
      fontSize: 20,
    },
  },
  icon: {
    marginRight: 24,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    [theme.breakpoints.down(641)]: {
      display: 'none',
    },
  },
}));
