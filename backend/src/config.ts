import { IConfig } from './types/interfaces';

const defaultWeatherApiUrl = 'https://api.openweathermap.org/data/2.5/onecall';

const config: IConfig = {
  port: +process.env.PORT || 3001,
  redis: {
    host: process.env.REDIS_HOST || '0.0.0.0',
    port: +process.env.REDIS_PORT || 6379,
    url: process.env.REDIS_URL,
    keyExpiration: +process.env.REDIS_KEY_EXPIRATION || 3600,
  },
  weatherApi: {
    url: process.env.WEATHER_API_URL || defaultWeatherApiUrl,
    key: process.env.WEATHER_API_KEY,
  },
};

export default config;
