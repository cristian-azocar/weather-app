import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WelcomeDialog from './WelcomeDialog';

test('renders a dialog', (): void => {
  render(<WelcomeDialog open />);
  const dialog: HTMLElement = screen.getByRole('dialog');
  expect(dialog).toBeInTheDocument();
});

test('does not renders a dialog', (): void => {
  render(<WelcomeDialog open={false} />);
  const dialog: HTMLElement | null = screen.queryByRole('dialog');
  expect(dialog).not.toBeInTheDocument();
});

test('calls onClose prop when clicking the button', (): void => {
  const handleClose: jest.Mock = jest.fn();
  render(<WelcomeDialog open onClose={handleClose} />);
  const button: HTMLElement = screen.getByRole('button', {
    name: /OK, got it!/i,
  });
  userEvent.click(button);
  expect(handleClose).toHaveBeenCalledTimes(1);
});
