import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen } from '@testing-library/react';
import App from './App';

const queryClient = new QueryClient();

test('renders App component', (): void => {
  render(<App />, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
  });
  const appElement: HTMLElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
});
