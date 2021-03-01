import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { WeatherContextType } from './WeatherContext.types';

const defaultValue: WeatherContextType = {
  fetchWeather: () => {},
};

const WeatherContext = createContext<WeatherContextType>(defaultValue);

export function WeatherContextProvider(
  props: PropsWithChildren<unknown>
): JSX.Element {
  const { children } = props;
  const [state] = useState<WeatherContextType>({ fetchWeather });

  async function fetchWeather(
    latitude: number,
    longitude: number
  ): Promise<void> {
    const response = await fetch('/api/weather');
    const data = await response.json();
  }

  return (
    <WeatherContext.Provider value={state}>{children}</WeatherContext.Provider>
  );
}

export function useWeather(): WeatherContextType {
  return useContext(WeatherContext);
}

export default WeatherContext;
