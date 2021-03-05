import { NextFunction, Request, Response } from 'express';
import redisStorage from '../../storage/RedisStorage';

export default class WeatherCacheMiddleware {
  async cache(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { latitude, longitude } = req.query;
    const cacheKey = `COORDINATES:${latitude},${longitude}`;
    const cacheWeather: unknown = await redisStorage.get(cacheKey);

    if (cacheWeather) {
      res.json(cacheWeather);
      return;
    }

    next();
  }
}
