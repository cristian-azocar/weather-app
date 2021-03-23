import { IHealthInfo } from 'src/types/interfaces';
import pkg from '../../../package.json';

export default class HealthService {
  async getHealthInfo(): Promise<IHealthInfo> {
    return {
      nodeVersion: process.version,
      service: pkg.name,
      memory: process.memoryUsage(),
      pid: process.pid,
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
      package: {
        name: pkg.name,
        version: pkg.version,
      },
    };
  }
}
