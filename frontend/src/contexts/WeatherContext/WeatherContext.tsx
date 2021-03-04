import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Weather } from '../../models/Weather';
import weatherService from '../../services/WeatherService';

type WeatherContextType = {
  fetchWeather: (latitude: number, longitude: number) => Promise<Weather>;
};

const WeatherContext = createContext({} as WeatherContextType);

export function WeatherContextProvider(
  props: PropsWithChildren<unknown>
): JSX.Element {
  const { children } = props;
  const [state] = useState<WeatherContextType>({ fetchWeather });

  async function fetchWeather(
    latitude: number,
    longitude: number
  ): Promise<Weather> {
    const weather: Weather = await weatherService.fetchWeather(
      latitude,
      longitude
    );

    return weather;
  }

  return (
    <WeatherContext.Provider value={state}>{children}</WeatherContext.Provider>
  );
}

export function useWeather(): WeatherContextType {
  return useContext(WeatherContext);
}

export default WeatherContext;
