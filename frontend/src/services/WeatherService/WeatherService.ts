import axios from 'axios';
import { IWeather } from '../../types/interfaces';

export class WeatherService {
  private baseUrl: string = process.env.REACT_APP_API_BASE_URL || '';

  async fetchWeather(latitude: number, longitude: number): Promise<IWeather> {
    const url = `${this.baseUrl}/api/weather?latitude=${latitude}&longitude=${longitude}`;
    const { data } = await axios.get<IWeather>(url);

    return data;
  }
}

export default new WeatherService();
