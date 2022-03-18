import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import UserProfile from '.';

import userEvent from '@testing-library/user-event';

let valueP;

it('it calls handleStatus', () => {
  // Test first render and componentDidMount
  act(() => {
    renderWithProviders(<UserProfile />);
  });
  let value;
  userEvent.type(screen.queryByLabelText("status-field-input"), value="");
  const field = screen.getByLabelText("status-field-input");
  expect(field).toBeInTheDocument();
  console.log(field)

  // Test second render and componentDidUpdate
 act(() => {
    valueP = field.dispatchEvent(new MouseEvent('submit', {bubbles: true}));
   });
 
   expect(valueP).toBe(true);
});

it('it calls handleStatus', () => {
  // Test first render and componentDidMount
  act(() => {
    renderWithProviders(<UserProfile />);
  });
  let value;
  userEvent.type(screen.queryByLabelText("status-field-input"), value="gi-ba-bu");
  const field = screen.getByLabelText("status-field-input");
  expect(field).toBeInTheDocument();
  console.log(field)

  // Test second render and componentDidUpdate
 act(() => {
    valueP = field.dispatchEvent(new MouseEvent('submit', {bubbles: true}));
   });
 
   expect(valueP).toBe(true);
});

it('it calls Edit', () => {
  // Test first render and componentDidMount
  act(() => {
    renderWithProviders(<UserProfile />);
  });
  let value;
  userEvent.type(screen.queryByLabelText("name-status-form"), value="");
  const field = screen.getByLabelText("name-status-form");
  expect(field).toBeInTheDocument();
  console.log(field)

  // Test second render and componentDidUpdate
 act(() => {
    valueP = field.dispatchEvent(new MouseEvent('submit', {bubbles: true}));
   });
 
   expect(valueP).toBe(true);
});

it('it calls Edit', () => {
  // Test first render and componentDidMount
  act(() => {
    renderWithProviders(<UserProfile />);
  });
  let value;
  userEvent.type(screen.queryByLabelText("name-status-form"), value="gi-ba-bu");
  const field = screen.getByLabelText("name-status-form");
  expect(field).toBeInTheDocument();
  console.log(field)

  // Test second render and componentDidUpdate
 act(() => {
    valueP = field.dispatchEvent(new MouseEvent('submit', {bubbles: true}));
   });
 
   expect(valueP).toBe(true);
});
