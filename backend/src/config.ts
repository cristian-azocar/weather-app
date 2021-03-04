import { IConfig } from './types/interfaces';

const config: IConfig = {
  port: +process.env.PORT || 3001,
  redis: {
    host: process.env.REDIS_HOST || '0.0.0.0',
    port: +process.env.REDIS_PORT || 6379,
    keyExpiration: +process.env.REDIS_KEY_EXPIRATION || 3600,
  },
};

export default config;
