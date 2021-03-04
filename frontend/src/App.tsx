import { useRef } from 'react';
import Map, { Coordinates } from './components/Map';
import WeatherDialog, { WeatherDialogProps } from './components/WeatherDialog';
import { useWeather } from './contexts/WeatherContext';
import useMergeState from './hooks/useMergeState';
import { Weather } from './models/Weather';

const initialDialogState: WeatherDialogProps = {
  open: false,
  loading: false,
  weather: undefined,
  error: undefined,
};

export default function App(): JSX.Element {
  const [weatherDialog, setWeatherDialog] = useMergeState(initialDialogState);
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

  function closeDialog(): void {
    setWeatherDialog({ open: false });
  }

  async function fetchAndDisplayWeather(
    coordinates: Coordinates
  ): Promise<void> {
    setWeatherDialog({ open: true, loading: true });

    try {
      const { latitude, longitude } = coordinates;
      const weather: Weather = await fetchWeather(latitude, longitude);
      setWeatherDialog({ loading: false, weather });
    } catch (error) {
      setWeatherDialog({ loading: false, error });
    }
  }

  return (
    <div id="app">
      <Map onClick={handleMapClick} />
      <WeatherDialog
        open={weatherDialog.open}
        loading={weatherDialog.loading}
        weather={weatherDialog.weather}
        error={weatherDialog.error}
        onClose={closeDialog}
        onRetry={retryWeatherFetch}
      />
    </div>
  );
}
