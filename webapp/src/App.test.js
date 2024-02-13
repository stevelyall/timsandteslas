import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TTMapContainer', () => {
  render(<App />);
  const linkElement = screen.queryByText('leaflet');
  expect(linkElement).toBeInTheDocument();
});
