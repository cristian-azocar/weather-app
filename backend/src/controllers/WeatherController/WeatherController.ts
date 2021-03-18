import { Request, Response } from 'express';
import { IWeather } from 'src/types/interfaces';
import WeatherService from '../../services/WeatherService';
import redisStorage from '../../storage/RedisStorage';

const weatherService: WeatherService = new WeatherService();

export default class WeatherController {
  async getWeather(req: Request, res: Response): Promise<void> {
    const { latitude, longitude } = req.query;
    const [lat, lng] = [+latitude, +longitude];
    const weather: IWeather = await weatherService.getWeather(lat, lng);

    await redisStorage.set(`COORDINATES:${lat},${lng}`, weather);

    res.json(weather);
  }
}
