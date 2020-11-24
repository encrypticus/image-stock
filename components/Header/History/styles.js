import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 20
  },
  icon: {
    marginRight: 7
  },
  button: {
    padding: 0,
    border: 0,
    textTransform: 'none',
    fontWeight: 'normal',
    '& .MuiSvgIcon-root': {
      fontSize: 28
    }
  },
  label: {
    fontSize: 18,
    color: '#fff'
  }
});
