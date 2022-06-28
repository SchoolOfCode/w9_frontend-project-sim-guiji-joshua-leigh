import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App/index.js';


test('renders quote on LandingPage', () => {
  render(<App />);
  const quote = screen.getByText('Congratulations on making it to the School of Code, you should be really proud of yourself. We are really proud of you - The Restless Team');
  expect(quote).toBeInTheDocument();
});

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/