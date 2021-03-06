import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  dialogPaper: {
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      height: '100%',
      margin: '0px',
      maxWidth: '100%',
      maxHeight: 'none',
      borderRadius: '0px',
    },
  },
  dialogActions: {
    justifyContent: 'center',
  },
  gridContainer: {
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'row',
    },
  },
  gridItem: {
    flexGrow: 1,
  },
}));
