import axios from 'axios';
import { IWeather } from '../../types/interfaces';

export class WeatherService {
  async fetchWeather(latitude: number, longitude: number): Promise<IWeather> {
    const url = `/api/weather?latitude=${latitude}&longitude=${longitude}`;
    const { data } = await axios.get<IWeather>(url);

    return data;
  }
}

export default new WeatherService();
