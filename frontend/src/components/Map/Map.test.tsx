import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Map from './Map';

beforeAll(() => {
  window.scrollTo = jest.fn();
});

test('renders component', (): void => {
  const { container } = render(<Map />);
  const map: Element | null = container.querySelector('#map');
  expect(map).toBeInTheDocument();
});

test('calls onClick prop when clicking the map', (): void => {
  const handleClick: jest.Mock = jest.fn();
  const { container } = render(<Map onClick={handleClick} />);
  const map: Element | null = container.querySelector('#map');

  if (map) {
    userEvent.click(map);
  }

  expect(handleClick).toHaveBeenCalledTimes(1);
});
