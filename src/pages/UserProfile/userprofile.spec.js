import { screen } from '@testing-library/react';
import UserProfile from '.';
import { act } from 'react-dom/test-utils';

describe('User profile page', () => {
    
    test('it renders a form ', () => {
        
        renderWithProviders(<UserProfile />);
        const nav = screen.queryByRole('form');
        expect(nav).toBeInTheDocument();
    })
})
let valueP;
it('it renders a form with username', () => {
    // Test first render and componentDidMount
    act(() => {
      renderWithProviders(<UserProfile />);
    });
    let currentUser;
    userEvent.type(screen.queryByRole('form'), currentUser={username:"gi-ba-bu"});
    const field = screen.queryByRole('form');
    expect(field).toBeInTheDocument();
    console.log(field)
  
    // Test second render and componentDidUpdate
   act(() => {
      valueP = field.dispatchEvent(new MouseEvent('submit', {bubbles: true}));
     });
   
     expect(valueP).toBe(true);
  });
 