import { createContext, PropsWithChildren, useContext, useState } from 'react';
import axios from 'axios';
import { Weather } from '../../models/Weather';

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
    const url = `/api/weather?latitude=${latitude}&longitude=${longitude}`;
    const { data } = await axios.get<Weather>(url);

    return data;
  }

  return (
    <WeatherContext.Provider value={state}>{children}</WeatherContext.Provider>
  );
}

export function useWeather(): WeatherContextType {
  return useContext(WeatherContext);
}

export default WeatherContext;
