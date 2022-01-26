import { useState } from 'react';
import Map, { Coordinates } from './components/Map';
import WeatherDialog from './components/WeatherDialog';
import WelcomeDialog from './components/WelcomeDialog';
import useWeather from './hooks/useWeather';
import useLocalStorage from './hooks/useLocalStorage';

export default function App(): JSX.Element {
  const [openWeatherDialog, setOpenWeatherDialog] = useState(false);
  const [selectedCoordinates, setSelectedCoordinates] = useState<Coordinates>();
  const [showWelcomeDialog, setShowWelcomeDialog] = useLocalStorage(
    'showWelcomeDialog',
    true
  );
  const { data, isLoading, isError, refetch } = useWeather(selectedCoordinates);

  function handleMapClick(coordinates: Coordinates): void {
    setSelectedCoordinates(coordinates);
    setOpenWeatherDialog(true);
  }

  function retryWeatherFetch(): void {
    if (!selectedCoordinates) {
      throw new Error('No coordinates have been selected yet');
    }

    refetch();
  }

  function closeWeatherDialog(): void {
    setOpenWeatherDialog(false);
  }

  function closeWelcomeDialog(): void {
    setShowWelcomeDialog(false);
  }

  return (
    <div id="app" data-testid="app">
      <WelcomeDialog open={showWelcomeDialog} onClose={closeWelcomeDialog} />
      <Map onClick={handleMapClick} />
      <WeatherDialog
        open={openWeatherDialog}
        weather={data}
        isLoading={isLoading}
        isError={isError}
        onClose={closeWeatherDialog}
        onRetry={retryWeatherFetch}
      />
    </div>
  );
}
