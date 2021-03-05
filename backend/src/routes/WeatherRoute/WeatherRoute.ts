import express, { Router } from 'express';
import WeatherController from '../../controllers/WeatherController';
import ValidatorMiddleware, {
  RequestProperty,
} from '../../middlewares/ValidatorMiddleware';
import WeatherCacheMiddleware from '../../middlewares/WeatherCacheMiddleware';
import weatherSchema from '../../schemas/weather';

const router: Router = express.Router();
const weatherController: WeatherController = new WeatherController();
const validatorMiddleware: ValidatorMiddleware = new ValidatorMiddleware();
const cacheMiddleware: WeatherCacheMiddleware = new WeatherCacheMiddleware();

router.get(
  '/weather',
  validatorMiddleware.validate(weatherSchema, RequestProperty.Query),
  cacheMiddleware.cache,
  weatherController.getWeather
);

export default router;
