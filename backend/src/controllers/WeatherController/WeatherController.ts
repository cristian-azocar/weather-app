import { Request, Response } from 'express';
import WeatherService from '../../services/WeatherService';

const weatherService: WeatherService = new WeatherService();

export default class WeatherController {
  async getWeather(req: Request, res: Response): Promise<void> {
    const { latitude, longitude } = req.query;
    const [lat, lng] = [+latitude, +longitude];
    const weather = await weatherService.getWeather(lat, lng);

    res.json(weather);
  }
}
