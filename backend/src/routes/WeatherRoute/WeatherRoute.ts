import express, { Router } from 'express';
import WeatherController from '../../controllers/WeatherController';
import ValidatorMiddleware, {
  RequestProperty,
} from '../../middlewares/ValidatorMiddleware';
import weatherSchema from '../../validators/weather';

const router: Router = express.Router();
const weatherController: WeatherController = new WeatherController();
const validatorMiddleware: ValidatorMiddleware = new ValidatorMiddleware();

router.get(
  '/weather',
  validatorMiddleware.validate(weatherSchema, RequestProperty.Query),
  weatherController.getWeather
);

export default router;
