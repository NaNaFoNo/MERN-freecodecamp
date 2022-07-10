import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import App from '../App';

test('renders learn react link', () => {
  render(<App />, {wrapper: BrowserRouter});
  const linkElement = screen.getByTestId('custom-element');
  expect(linkElement).toBeInTheDocument();
});
