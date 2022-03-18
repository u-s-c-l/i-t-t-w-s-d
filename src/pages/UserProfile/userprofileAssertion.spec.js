import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import UserProfile from '.';

import userEvent from '@testing-library/user-event';

// let username = {currentUser: "gi-ba-bu"} 
// let useAuthContext = jest.fn(() =>  username );
// let valuef =  useAuthContext()
// it('Given goBack is being tested', () => {
//   expect(valuef.currentUser).toBe("gi-ba-bu")
// });

// global.useAuthContext = useAuthContext;
// let valueGlobal = useAuthContext()
// it('Given goBack is being tested', () => {
//   expect(valueGlobal.currentUser).toBe("gi-ba-bu")
// });


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

it('it calls handleName with given value', () => {

  // Test first render and component did mount
  act(() => { 
    renderWithProviders(<UserProfile />) 
    });

  let value;
  userEvent.type(screen.queryByLabelText("name-field-input"), value="gi-ba-bu");
  const field = screen.getByLabelText("name-field-input");  
  expect(field).toBeInTheDocument();
 
  // Dispatch event with given value
  act(() => {
      field.dispatchEvent(new MouseEvent('submit', {bubbles: true}));
    });
  
  // Test rendered object




    expect(valueP).toBe(true);



});

