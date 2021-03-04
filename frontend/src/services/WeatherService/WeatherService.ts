import axios from 'axios';
import { Weather } from '../../models/Weather';

export class WeatherService {
  async fetchWeather(latitude: number, longitude: number): Promise<Weather> {
    const url = `/api/weather?latitude=${latitude}&longitude=${longitude}`;
    const { data } = await axios.get<Weather>(url);

    return data;
  }
}

export default new WeatherService();
