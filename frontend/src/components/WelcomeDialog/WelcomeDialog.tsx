import Emoji from 'a11y-react-emoji';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import useStyles from './styles';

type WelcomeDialogProps = {
  open: boolean;
  onClose?: () => void;
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
                src="/weather-app/static/images/welcome-image.png"
                alt="welcome"
              />
            </Box>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography variant="h5" align="center">
              <Box fontWeight="bold" marginBottom="20px" marginTop="20px">
                Welcome to Weather App! <Emoji symbol="👋" label="wave-hand" />
              </Box>
            </Typography>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography align="center">
              Hello there! My name is{' '}
              <Link
                href="https://github.com/cristian-azocar"
                target="_blank"
                rel="noreferrer"
                underline="always"
              >
                Cristian Azócar
              </Link>{' '}
              and I made this simple web application for fun. Just select a
              place on the map and see the current temperature. If you want to
              know more, visit the{' '}
              <Link
                href="https://github.com/cristian-azocar/weather-app"
                target="_blank"
                rel="noreferrer"
                underline="always"
              >
                repository.
              </Link>
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

WelcomeDialog.defaultProps = {
  onClose: undefined,
};

export default WelcomeDialog;
