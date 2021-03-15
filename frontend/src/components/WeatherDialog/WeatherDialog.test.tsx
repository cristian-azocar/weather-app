import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IWeather } from '../../types/interfaces';
import WeatherDialog from './WeatherDialog';

const weatherMock: IWeather = {
  lat: -37,
  lon: -33,
  timezone: 'Etc/GMT+2',
  timezoneOffset: -7200,
  current: {
    dt: 1615839179,
    sunrise: 1615795840,
    sunset: 1615840270,
    temp: 15.52,
    feelsLike: 9.24,
    pressure: 1018,
    humidity: 71,
    dewPoint: 10.29,
    uvi: 0,
    clouds: 81,
    visibility: 10000,
    windSpeed: 9.15,
    windDeg: 155,
    windGust: 9.51,
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
  },
};

test('renders a dialog', (): void => {
  render(<WeatherDialog open />);
  const dialog: HTMLElement = screen.getByRole('dialog');
  expect(dialog).toBeInTheDocument();
});

test('does not renders a dialog', (): void => {
  render(<WeatherDialog open={false} />);
  const dialog: HTMLElement | null = screen.queryByRole('dialog');
  expect(dialog).not.toBeInTheDocument();
});

test('renders a loading indicator', (): void => {
  render(<WeatherDialog open loading />);
  const loadingElement: HTMLElement = screen.getByRole('progressbar');
  expect(loadingElement).toBeInTheDocument();
});

test('renders an error message', (): void => {
  const error: Error = new Error('Some error message');
  render(<WeatherDialog open loading={false} error={error} />);
  const errorElement: HTMLElement = screen.getByRole('alert');
  expect(errorElement).toBeInTheDocument();
});

test('renders the weather temperature', (): void => {
  render(<WeatherDialog open weather={weatherMock} />);
  const temperatureElement: HTMLElement = screen.getByText(
    `${weatherMock.current.temp}°`
  );
  expect(temperatureElement).toBeInTheDocument();
});

test('renders the weather description', (): void => {
  render(<WeatherDialog open weather={weatherMock} />);
  const descriptionElement: HTMLElement = screen.getByText(
    weatherMock.current.weather[0].description
  );
  expect(descriptionElement).toBeInTheDocument();
});

test('renders the weather icon', (): void => {
  render(<WeatherDialog open weather={weatherMock} />);
  const iconElement: HTMLElement = screen.getByRole('img', { name: 'icon' });
  expect(iconElement).toBeInTheDocument();
});

test('calls onClose prop when clicking the close button', (): void => {
  const handleClose: jest.Mock = jest.fn();
  render(<WeatherDialog open onClose={handleClose} />);
  const button: HTMLElement = screen.getByRole('button', {
    name: /close/i,
  });
  userEvent.click(button);
  expect(handleClose).toHaveBeenCalledTimes(1);
});

test('calls onRetry prop when clicking on the retry button', (): void => {
  const handleRetry: jest.Mock = jest.fn();
  const error: Error = new Error('Some error message');
  render(<WeatherDialog open error={error} onRetry={handleRetry} />);
  const retryButton: HTMLElement = screen.getByRole('button', {
    name: /Retry/i,
  });
  userEvent.click(retryButton);

  expect(handleRetry).toHaveBeenCalledTimes(1);
});
