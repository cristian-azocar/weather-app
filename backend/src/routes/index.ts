import express, { Router } from 'express';
import WeatherRoute from './WeatherRoute';
import HealthRoute from './HealthRoute';

const router: Router = express.Router();

router.use([WeatherRoute, HealthRoute]);

export default router;
