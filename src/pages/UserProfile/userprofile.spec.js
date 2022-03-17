import { screen } from '@testing-library/react';
import UserProfile from '.';


describe('User profile page', () => {
    
    test('it renders a form ', () => {
        
        renderWithProviders(<UserProfile />);
        const nav = screen.queryByRole('form');
        expect(nav).toBeInTheDocument();
    })
})
