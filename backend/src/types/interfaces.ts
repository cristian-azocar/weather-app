export interface IConfig {
  port: number;
  redis: {
    host: string;
    port: number;
    url: string;
    keyExpiration: number;
  };
  weatherApi: {
    url: string;
    key: string;
  };
}

export interface IStorage {
  get: (key: string) => Promise<unknown>;
  set: (key: string, value: string) => Promise<void>;
}

export interface IWeather {
  lat: number;
  lon: number;
  timezone: string;
  timezoneOffset: number;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feelsLike: number;
    pressure: number;
    humidity: number;
    dewPoint: number;
    uvi: number;
    clouds: number;
    visibility: number;
    windSpeed: number;
    windDeg: number;
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
  };
}

export interface IHealthInfo {
  nodeVersion: string;
  memory: NodeJS.MemoryUsage;
  pid: number;
  uptime: number;
  environment: string;
}
