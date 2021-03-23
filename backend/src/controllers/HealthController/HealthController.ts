import { Request, Response } from 'express';
import { IHealthInfo } from 'src/types/interfaces';
import HealthService from '../../services/HealthService';

export default class HealthController {
  private healthService: HealthService = new HealthService();

  constructor() {
    this.getHealthInfo = this.getHealthInfo.bind(this);
  }

  async getHealthInfo(req: Request, res: Response): Promise<void> {
    const healthInfo: IHealthInfo = await this.healthService.getHealthInfo();

    res.json(healthInfo);
  }
}
