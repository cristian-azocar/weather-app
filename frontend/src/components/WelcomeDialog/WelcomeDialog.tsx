import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import welcomeImage from '../../assets/images/welcome-image.png';
import useStyles from './styles';

type WelcomeDialogProps = {
  open: boolean;
  onClose?: () => void;
};

const defaultProps: Partial<WelcomeDialogProps> = {
  onClose: undefined,
};

function WelcomeDialog(props: WelcomeDialogProps): JSX.Element {
  const { open, onClose } = props;
  const classes = useStyles();

  return (
    <Dialog open={open} classes={{ paper: classes.dialogPaper }}>
      <DialogContent>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.gridItem}>
            <Box textAlign="center">
              <img
                src={welcomeImage}
                alt="welcome"
                className={classes.welcomeImage}
              />
            </Box>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography variant="h5" align="center">
              <Box fontWeight="bold" marginBottom="20px" marginTop="20px">
                Welcome to Weather App!
              </Box>
            </Typography>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography align="center" className={classes.description}>
              Hello there! This is a simple web application I made for fun. Just
              select a place on the map and see the current temperature. If you
              want to know more, visit the{' '}
              <a
                href="https://github.com/cristian-azocar/weather-app"
                target="_blank"
                rel="noreferrer"
              >
                repository.
              </a>
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button variant="contained" color="primary" onClick={onClose}>
          OK, got it!
        </Button>
      </DialogActions>
    </Dialog>
  );
}

WelcomeDialog.defaultProps = defaultProps;

export default WelcomeDialog;
