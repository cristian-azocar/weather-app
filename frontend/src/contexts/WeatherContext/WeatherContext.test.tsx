import { render, screen } from '@testing-library/react';
import { WeatherContextProvider } from './WeatherContext';

test('renders a children', (): void => {
  render(
    <WeatherContextProvider>
      <div>Hello World</div>
    </WeatherContextProvider>
  );
  const textElement: HTMLElement = screen.getByText(/Hello World/i);
  expect(textElement).toBeInTheDocument();
});
