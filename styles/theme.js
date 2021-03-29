import { createMuiTheme } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  overrides: {
    MuiMenu: {
      list: {
        backgroundColor: '#404040',
      },
    },

    MuiMenuItem: {
      root: {
        color: '#fff',
      },
    },

    MuiRadio: {
      root: {
        color: green[400],
        '&$checked': {
          color: `${green[600]}!important`,
        }
      },
    },

    MuiFormControlLabel: {
      root: {
        width: '100%',
      },
    },

    MuiInputLabel: {
      root: {
        color: '#fff',
        '&$focused': {
          color: `${green[600]}!important`,
        },
      },
    },

    MuiSelect: {
      root: {
        color: '#fff',
      },
      icon: {
        color: '#fff',
      },
    },

    MuiOutlinedInput: {
      root: {
        '& fieldset': {
          borderColor: '#fff!important',
        },
        '&$focused': {
          '& fieldset': {
            borderColor: `${green[600]}!important`,
          },
        },
      },
    },
  },
});
