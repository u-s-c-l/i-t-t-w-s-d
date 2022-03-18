import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import UserProfile from '.';

import userEvent from '@testing-library/user-event';

let valueP;

it('it calls a handleSubmit', () => {
  // Test first render and componentDidMount
  act(() => {
    renderWithProviders(<UserProfile />);
  });
  const button = screen.queryByRole('button');
  expect(button).toBeInTheDocument;
 console.log(button)

  // Test second render and componentDidUpdate
 act(() => {
    valueP = button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
   });
 
   expect(valueP).toBe(true);

});

it('it calls handleName', () => {
  // Test first render and componentDidMount
  act(() => {
    renderWithProviders(<UserProfile />);
  });
  const field = screen.getByLabelText("name-field-input");
  expect(field).toBeInTheDocument();
 console.log(field)

  // Test second render and componentDidUpdate
 act(() => {
    valueP = field.dispatchEvent(new MouseEvent('submit', {bubbles: true, value:"gi-ba-bu"}), "gi-ba-bu");
   });
 
   expect(valueP).toBe(true);

});


it('it calls handleName 2', () => {
  // Test first render and componentDidMount
  act(() => {
    renderWithProviders(<UserProfile />);
  });
  let value;
  userEvent.type(screen.queryByLabelText("name-field-input"), value="gi-ba-bu");
  const field = screen.getByLabelText("name-field-input");
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
   

