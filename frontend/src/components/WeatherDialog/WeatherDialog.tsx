import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import { Button } from '@material-ui/core';
import { IWeather } from '../../types/interfaces';
import useStyles from './styles';

type WeatherDialogProps = {
  open: boolean;
  loading?: boolean;
  weather?: IWeather;
  error?: Error;
  onClose?: () => void;
  onRetry?: () => void;
};

const defaultProps: Partial<WeatherDialogProps> = {
  loading: false,
  weather: undefined,
  error: undefined,
  onClose: undefined,
  onRetry: undefined,
};

function WeatherDialog(props: WeatherDialogProps): JSX.Element {
  const { open, loading, weather, error, onClose, onRetry } = props;
  const classes = useStyles();

  function renderContent(): JSX.Element {
    if (loading) {
      return <CircularProgress size={80} />;
    }

    if (error) {
      return (
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <ErrorOutline color="error" className={classes.errorIcon} />
          </Grid>
          <Grid item>
            <Typography variant="h5">Oops! Something went wrong</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={onRetry}>
              Retry
            </Button>
          </Grid>
        </Grid>
      );
    }

    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.grid}
      >
        <Grid item>
          <Typography variant="h4">{weather?.current.temp}&deg;</Typography>
        </Grid>
        <Grid item>
          <img
            alt="icon"
            src={`http://openweathermap.org/img/wn/${weather?.current.weather[0].icon}@2x.png`}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6">{weather?.timezone}</Typography>
          <Typography variant="h5">
            {weather?.current.weather[0].description}
          </Typography>
        </Grid>
      </Grid>
    );
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      classes={{ paper: classes.dialogPaper }}
    >
      <DialogTitle disableTypography className={classes.dialogTitle}>
        <Typography variant="h6">Current Weather</Typography>
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
}

WeatherDialog.defaultProps = defaultProps;

export default WeatherDialog;
