import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 20,
  },
  icon: {
    marginRight: 7,
  },
  button: {
    padding: 0,
    border: 0,
    textTransform: 'none',
    fontWeight: 'normal',
    '& .MuiSvgIcon-root': {
      fontSize: 28,
    },
    [theme.breakpoints.down(641)]: {
      minWidth: 'auto',
    },
  },
  label: {
    fontSize: 18,
    color: '#fff',
    [theme.breakpoints.down(801)]: {
      fontSize: 16,
    },
  },
  innerLabel: {
    [theme.breakpoints.down(641)]: {
      display: 'none',
    },
  },
}));
