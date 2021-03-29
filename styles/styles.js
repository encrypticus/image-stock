import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  homePageContainer: {
    [theme.breakpoints.down(1481)]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
}));
