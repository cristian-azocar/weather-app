import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall';
const exclude = 'minutely,hourly,daily,flags';
const apiKey = '1a4560cc9acebeb0ad8b72fe64d6cac8';

export default class WeatherService {
  async getWeather(latitude: number, longitude: number): Promise<unknown> {
    const url = `${baseUrl}?lat=${latitude}&lon=${longitude}&exclude=${exclude}&appid=${apiKey}`;
    const { data } = await axios.get(url);

    return data;
  }
}
