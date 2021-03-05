import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  dialogTitle: {
    padding: theme.spacing(2),
  },
  dialogPaper: {
    minHeight: 290,
  },
  dialogContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  grid: {
    textAlign: 'center',
  },
  errorIcon: {
    fontSize: 80,
  },
}));
