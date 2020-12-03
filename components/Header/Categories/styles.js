import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  item: {

  },
  label: {
    fontFamily: 'inherit',
    fontSize: 18,
  },
  wrapper: {
    position: 'relative',
    width: '62.5%',
    margin: 'auto',
    overflow: 'hidden',
    minHeight: 65,
    transition: 'mask-image 1s',
  },
});
