import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import { Coordinates } from '../../components/Map';
import { Weather } from './Weather';

const baseUrl = process.env.REACT_APP_API_BASE_URL || '';

async function fetchWeather(
  coordinates: Coordinates | undefined
): Promise<Weather> {
  if (coordinates === undefined) {
    throw new Error('Coordinates object is undefined');
  }

  const { latitude, longitude } = coordinates;
  const url = `${baseUrl}/api/weather?latitude=${latitude}&longitude=${longitude}`;
  const { data } = await axios.get<Weather>(url);

  return data;
}

export default function useWeather(
  coordinates: Coordinates | undefined
): UseQueryResult<Weather> {
  const queryKey = ['weather', coordinates];
  return useQuery(queryKey, () => fetchWeather(coordinates), {
    enabled: Boolean(coordinates),
  });
}
