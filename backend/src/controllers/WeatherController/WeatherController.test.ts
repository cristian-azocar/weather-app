import { Request, Response } from 'express';
import WeatherController from './WeatherController';

jest.mock('../../services/WeatherService');
jest.mock('../../storage/RedisStorage');

test('asd', async (): Promise<void> => {
  const req: Request = { query: { latitude: '1', longitude: '1' } } as any as Request;
  const res: Response = { json: () => {} } as any as Response;
  const weatherController: WeatherController = new WeatherController();

  await weatherController.getWeather(req, res);
});
