import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import UserProfile from '.';


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
