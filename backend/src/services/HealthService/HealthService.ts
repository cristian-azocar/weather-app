import { IHealthInfo } from 'src/types/interfaces';

export default class HealthService {
  async getHealthInfo(): Promise<IHealthInfo> {
    return {
      nodeVersion: process.version,
      memory: process.memoryUsage(),
      pid: process.pid,
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
    };
  }
}
