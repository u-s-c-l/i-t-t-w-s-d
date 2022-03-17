import { screen } from '@testing-library/react';
import Header from '.';


describe('Header', () => {
    
    test('it renders a nav tag', () => {
        
        renderWithProviders(<Header/>);
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })
})
