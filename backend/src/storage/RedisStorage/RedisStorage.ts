import { createNodeRedisClient, WrappedNodeRedisClient } from 'handy-redis';
import { IStorage } from 'src/types/interfaces';
import config from '../../config';

export class RedisStorage implements IStorage {
  private client: WrappedNodeRedisClient;
  private host: string;
  private port: number;
  private url: string;
  private keyExpiration: number;

  constructor() {
    const { host, port, url, keyExpiration } = config.redis;

    this.host = host;
    this.port = port;
    this.url = url;
    this.keyExpiration = keyExpiration;
  }

  connect(): void {
    if (!this.client) {
      this.client = createNodeRedisClient(config.redis);
      this.client.nodeRedis.on('connect', (): void => {
        const hostname: string = this.url
          ? this.url
          : `${this.host}:${this.port}`;

        // eslint-disable-next-line no-console
        console.log(`Connected to Redis server on ${hostname}`);
      });
    }
  }

  async get(key: string): Promise<unknown> {
    const value: string = await this.client.get(key);

    return JSON.parse(value);
  }

  async set(key: string, value: unknown): Promise<void> {
    await this.client.setex(key, this.keyExpiration, JSON.stringify(value));
  }
}

export default new RedisStorage();
