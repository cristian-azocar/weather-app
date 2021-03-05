import axios from 'axios';
import { IWeather } from 'src/types/interfaces';
import config from '../../config';
import { camelizeKeys } from '../../utils/object-utils';

const exclude = 'minutely,hourly,daily,flags';
const { url, key: apiKey } = config.weatherApi;

export default class WeatherService {
  transformResponse(response: string): unknown {
    const obj: Record<string, unknown> = JSON.parse(response);
    return camelizeKeys(obj);
  }

  async getWeather(latitude: number, longitude: number): Promise<IWeather> {
    const fullUrl = `${url}?lat=${latitude}&lon=${longitude}&exclude=${exclude}&units=metric&appid=${apiKey}`;
    const { data } = await axios.get<IWeather>(fullUrl, {
      transformResponse: this.transformResponse,
    });

    return data;
  }
}
