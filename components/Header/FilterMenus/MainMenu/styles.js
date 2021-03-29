import { makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors/index';

export const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .7)',
  },
  greenCheckbox: {
    paddingTop: 0,
    paddingBottom: 0,
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
});
