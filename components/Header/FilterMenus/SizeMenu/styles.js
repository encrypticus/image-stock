import { makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

export const useStyles = makeStyles({
  textField: {
    maxWidth: 100,
    '& .MuiInputBase-root': {
      color: '#fff',
    },
  },
  closeIcon: {
    marginLeft: 2,
    marginRight: 2,
  },
  buttonGo: {
    minWidth: 'unset',
    marginLeft: 7,
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: green[700],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
  buttonLabel: {
    color: '#fff',
    textTransform: 'none',
    fontSize: 16,
  },
  startIcon: {
    marginLeft: 0,
    marginRight: 0,
  },
});
