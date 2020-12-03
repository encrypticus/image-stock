import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
  },
  form: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      bottom: -8,
      width: '62.5%',
      height: 1,
      backgroundImage: 'url(/images/Line.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      transform: 'translateX(25%)',
      transformOrigin: 'center center',
    },
  },
  input: {
    position: 'relative',
    color: '#fff',
    fontSize: 72,
    fontFamily: 'inherit',
    textAlign: 'center',
    '&::placeholder': {
      color: '#fff',
      opacity: 1,
    },
    [theme.breakpoints.down(801)]: {
      fontSize: 50
    },
    [theme.breakpoints.down(641)]: {
      fontSize: 36
    }
  },
}));
