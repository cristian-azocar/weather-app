import axios from 'axios';
import { mocked } from 'ts-jest/utils';
import { IWeather } from '../../types/interfaces';
import { WeatherService } from './WeatherService';

jest.mock('axios');

const mockedAxios = mocked(axios, true);
const baseUrl = 'https://www.foo.com';
const weatherMock: IWeather = {
  lat: -37,
  lon: -33,
  timezone: 'Etc/GMT+2',
  timezoneOffset: -7200,
  current: {
    dt: 1615839179,
    sunrise: 1615795840,
    sunset: 1615840270,
    temp: 15.52,
    feelsLike: 9.24,
    pressure: 1018,
    humidity: 71,
    dewPoint: 10.29,
    uvi: 0,
    clouds: 81,
    visibility: 10000,
    windSpeed: 9.15,
    windDeg: 155,
    windGust: 9.51,
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
  },
};

test('sets a given URL', (): void => {
  const weatherService: WeatherService = new WeatherService(baseUrl);
  expect(weatherService.baseUrl).toEqual(baseUrl);
});

test('fetches and returns the weather', async (): Promise<void> => {
  mockedAxios.get.mockResolvedValueOnce({ data: weatherMock });

  const weatherService: WeatherService = new WeatherService(baseUrl);
  const weather: IWeather = await weatherService.fetchWeather(0, 0);

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(weather).toEqual(weatherMock);
});
