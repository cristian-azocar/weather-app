import { render, screen } from '@testing-library/react';
import { useEffect } from 'react';
import { useWeather, WeatherContextProvider } from './WeatherContext';
import weatherService from '../../services/WeatherService';

jest.mock('../../services/WeatherService');

test('renders a children', (): void => {
  render(
    <WeatherContextProvider>
      <div>Hello World</div>
    </WeatherContextProvider>
  );
  const textElement: HTMLElement = screen.getByText(/Hello World/i);
  expect(textElement).toBeInTheDocument();
});

test('calls weather service', (): void => {
  function MockComponent(): null {
    const { fetchWeather } = useWeather();

    useEffect(() => {
      async function getWeather(): Promise<void> {
        await fetchWeather(0, 0);
        expect(weatherService.fetchWeather).toHaveBeenCalledTimes(1);
      }

      getWeather();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return null;
  }

  render(
    <WeatherContextProvider>
      <MockComponent />
    </WeatherContextProvider>
  );
});
