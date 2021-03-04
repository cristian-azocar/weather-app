export interface IConfig {
  port: number;
  redis: {
    host: string;
    port: number;
    keyExpiration: number;
  };
}

export interface IStorage {
  get: (key: string) => Promise<unknown>;
  set: (key: string, value: string) => Promise<void>;
}
