import { useRef } from 'react';
import { LatLng, LeafletMouseEvent } from 'leaflet';
import { useWeather } from './contexts/WeatherContext';
import useMergeState from './hooks/useMergeState';
import { Weather } from './models/Weather';
import Map from './components/Map';
import WeatherDialog, { WeatherModalProps } from './components/WeatherDialog';

const initialDialogState: WeatherModalProps = {
  open: false,
  loading: false,
  weather: undefined,
  error: undefined,
};

export default function App(): JSX.Element {
  const [weatherDialog, setWeatherDialog] = useMergeState(initialDialogState);
  const lastCoordinatesRef = useRef<LatLng>();
  const { fetchWeather } = useWeather();

  function handleMapClick(e: LeafletMouseEvent): void {
    const { lat, lng } = e.latlng;
    lastCoordinatesRef.current = e.latlng;
    fetchAndDisplayWeather(lat, lng);
  }

  function retryWeatherFetch() {
    if (lastCoordinatesRef.current) {
      const { lat, lng } = lastCoordinatesRef.current;
      fetchAndDisplayWeather(lat, lng);
      return;
    }

    throw new Error('No coordinates have been selected yet');
  }

  function closeDialog() {
    setWeatherDialog({ open: false });
  }

  async function fetchAndDisplayWeather(
    latitude: number,
    longitude: number
  ): Promise<void> {
    setWeatherDialog({ open: true, loading: true });

    try {
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
