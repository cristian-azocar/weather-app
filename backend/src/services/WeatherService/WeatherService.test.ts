import axios from 'axios';
import { mocked } from 'ts-jest/utils';
import { IWeather } from 'src/types/interfaces';
import WeatherService from './WeatherService';

jest.mock('axios');

const mockedAxios = mocked(axios, true);
const weatherMock = { lat: 0, lng: 0 };

test('returns the weather of a given location', async (): Promise<void> => {
  mockedAxios.get.mockResolvedValueOnce({ data: weatherMock });

  const weatherService: WeatherService = new WeatherService();
  const weather: IWeather = await weatherService.getWeather(0, 0);

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(weather).toEqual(weatherMock);
});
