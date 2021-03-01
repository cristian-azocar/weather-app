import { LeafletMouseEvent } from 'leaflet';
import Map from './components/Map';
import { useWeather } from './contexts/WeatherContext';

export default function App(): JSX.Element {
  const { fetchWeather } = useWeather();

  async function handleMapClick(e: LeafletMouseEvent) {
    const { lat, lng } = e.latlng;
    await fetchWeather(lat, lng);
  }

  return (
    <div id="app">
      <Map onClick={handleMapClick} />
    </div>
  );
}
