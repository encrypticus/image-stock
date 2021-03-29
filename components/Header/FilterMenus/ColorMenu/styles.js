import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  checkBoxWrapper: {
    width: '100%',
  },
  menuItem: {
    flexDirection: 'column',
  },
  greenCheckbox: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
  icon: {
    display: 'block',
    width: 24,
    height: 24,
    borderRadius: '50%',
  },
  checkedIcon: {
    border: '2px solid #fff',
  },
  borderDark: {
    borderColor: '#000',
  },
  red: {
    backgroundColor: 'red',
  },
  orange: {
    backgroundColor: 'orange',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  green: {
    backgroundColor: 'green',
  },
  turquoise: {
    backgroundColor: 'turquoise',
  },
  blue: {
    backgroundColor: 'blue',
  },
  lilac: {
    backgroundColor: '#c8a2c8',
  },
  pink: {
    backgroundColor: 'pink',
  },
  white: {
    backgroundColor: 'white',
  },
  gray: {
    backgroundColor: 'gray',
  },
  black: {
    backgroundColor: 'black',
  },
  brown: {
    backgroundColor: '#8a2f28',
  },
});
