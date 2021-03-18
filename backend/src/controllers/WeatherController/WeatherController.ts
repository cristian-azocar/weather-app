import { Request, Response } from 'express';
import { IWeather } from 'src/types/interfaces';
import WeatherService from '../../services/WeatherService';
import redisStorage from '../../storage/RedisStorage';

export default class WeatherController {
  private weatherService: WeatherService = new WeatherService();

  constructor() {
    this.getWeather = this.getWeather.bind(this);
  }

  async getWeather(req: Request, res: Response): Promise<void> {
    const { latitude, longitude } = req.query;
    const [lat, lng] = [+latitude, +longitude];
    const weather: IWeather = await this.weatherService.getWeather(lat, lng);

    await redisStorage.set(`COORDINATES:${lat},${lng}`, weather);

    res.json(weather);
  }
}
