import { useRef, useState } from 'react';
import Map, { Coordinates } from './components/Map';
import WeatherDialog from './components/WeatherDialog';
import WelcomeDialog from './components/WelcomeDialog';
import { useWeather } from './contexts/WeatherContext';
import useMergeState from './hooks/useMergeState';
import { IWeather } from './types/interfaces';
import * as localStorageUtils from './utils/localStorage-utils';

type WeatherDialogState = {
  open: boolean;
  loading?: boolean;
  weather?: IWeather;
  error?: Error;
};

const initialWeatherDialogState: WeatherDialogState = {
  open: false,
  loading: false,
  weather: undefined,
  error: undefined,
};

const initialWelcomeDialogState = {
  open: !localStorageUtils.getItem('welcomeDialogSeen'),
};

export default function App(): JSX.Element {
  const [weatherDialog, setWeatherDialog] = useMergeState(
    initialWeatherDialogState
  );
  const [welcomeDialog, setWelcomeDialog] = useState(initialWelcomeDialogState);
  const lastCoordinatesRef = useRef<Coordinates>();
  const { fetchWeather } = useWeather();

  function handleMapClick(coordinates: Coordinates): void {
    lastCoordinatesRef.current = coordinates;
    fetchAndDisplayWeather(coordinates);
  }

  function retryWeatherFetch(): void {
    if (!lastCoordinatesRef.current) {
      throw new Error('No coordinates have been selected yet');
    }

    fetchAndDisplayWeather(lastCoordinatesRef.current);
  }

  function closeWeatherDialog(): void {
    setWeatherDialog({ open: false });
  }

  function closeWelcomeDialog(): void {
    localStorageUtils.setItem('welcomeDialogSeen', true);
    setWelcomeDialog({ open: false });
  }

  async function fetchAndDisplayWeather(
    coordinates: Coordinates
  ): Promise<void> {
    setWeatherDialog({ open: true, loading: true });

    try {
      const { latitude, longitude } = coordinates;
      const weather: IWeather = await fetchWeather(latitude, longitude);
      setWeatherDialog({ loading: false, weather });
    } catch (error) {
      setWeatherDialog({ loading: false, error });
    }
  }

  return (
    <div id="app">
      <WelcomeDialog open={welcomeDialog.open} onClose={closeWelcomeDialog} />
      <Map onClick={handleMapClick} />
      <WeatherDialog
        open={weatherDialog.open}
        loading={weatherDialog.loading}
        weather={weatherDialog.weather}
        error={weatherDialog.error}
        onClose={closeWeatherDialog}
        onRetry={retryWeatherFetch}
      />
    </div>
  );
}
