import axios from 'axios';
import { IWeather } from '../../types/interfaces';

export class WeatherService {
  baseUrl: string;

  constructor(baseUrl: string | undefined = '') {
    this.baseUrl = baseUrl;
  }

  async fetchWeather(latitude: number, longitude: number): Promise<IWeather> {
    const url = `${this.baseUrl}/api/weather?latitude=${latitude}&longitude=${longitude}`;
    const { data } = await axios.get<IWeather>(url);

    return data;
  }
}

export default new WeatherService(process.env.REACT_APP_API_BASE_URL);
