import { Request, Response } from 'express';
import { mocked } from 'ts-jest/utils';
import WeatherController from './WeatherController';
import redisStorage from '../../storage/RedisStorage';
import WeatherService from '../../services/WeatherService';

jest.mock('../../storage/RedisStorage');
jest.mock('../../services/WeatherService');

const req: Request = ({
  query: { latitude: '100', longitude: '200' },
} as unknown) as Request;
const res: Response = ({ json: jest.fn() } as unknown) as Response;
const mockedWeatherService = mocked(WeatherService, true);

afterEach((): void => {
  jest.clearAllMocks();
});

test('stores the coordinates on redis', async (): Promise<void> => {
  const weatherController: WeatherController = new WeatherController();
  await weatherController.getWeather(req, res);
  expect(redisStorage.set).toHaveBeenCalledTimes(1);
});

test('calls a service', async (): Promise<void> => {
  const weatherController: WeatherController = new WeatherController();
  const serviceInstance = mockedWeatherService.mock.instances[0];

  await weatherController.getWeather(req, res);

  expect(serviceInstance.getWeather).toHaveBeenCalledTimes(1);
  expect(serviceInstance.getWeather).toHaveBeenCalledWith(100, 200);
});

test('sends a JSON response', async (): Promise<void> => {
  const weatherController: WeatherController = new WeatherController();
  await weatherController.getWeather(req, res);
  expect(res.json).toHaveBeenCalledTimes(1);
});
