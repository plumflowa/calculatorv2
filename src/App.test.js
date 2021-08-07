import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";

//checking the word calculator is being rendered somewhere in the app
test('renders learn react link', () => {
  render(<App />);
  const calcElement = screen.getByText(/calculator/i);
  expect(calcElement).toBeInTheDocument();
});

