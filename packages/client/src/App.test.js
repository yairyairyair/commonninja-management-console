import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app connect link', async () => {
  render(<App />);
  const appElement = await screen.findByText('Connect');
  expect(appElement).toBeInTheDocument();
});
