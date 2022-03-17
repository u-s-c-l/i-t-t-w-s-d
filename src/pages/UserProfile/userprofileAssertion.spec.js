import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import UserProfile from '.';
//import { useAuthContext } from '../../contexts';

// let container; 

// beforeEach(() => {
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   document.body.removeChild(container);
//   container = null;
// });

let value;

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
    value = button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
   });
 
   expect(value).toBe(true);

});

// it('it calls a handleName', () => {
//     // Test first render and componentDidMount
//     act(() => {
//       renderWithProviders(<UserProfile />);
//     });
//     const button = screen.queryByRole('name');
//     expect(button).toBeInTheDocument;
//    console.log(button)
  
//     // Test second render and componentDidUpdate
//    act(() => {
//       value = button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
//      });
   
//      expect(value).toBe(true);
  
//   });
  
