import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { IWeather } from '../../types/interfaces';
import weatherService from '../../services/WeatherService';

type WeatherContextType = {
  fetchWeather: (latitude: number, longitude: number) => Promise<IWeather>;
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
  ): Promise<IWeather> {
    const weather: IWeather = await weatherService.fetchWeather(
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
