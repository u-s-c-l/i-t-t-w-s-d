import { screen } from '@testing-library/react';
import About from '.';


describe('About page', () => {
    
    test('it renders a from element ', () => {
        
        renderWithProviders(<About/>);
        const nav = screen.queryByRole('form');
        expect(nav).toBeInTheDocument();
    })
})
