import { screen } from '@testing-library/react';
import Home from '.';


describe('Create new game page', () => {
    
    test('it renders a heading ', () => {
        
        renderWithProviders(<Home />);
        const nav = screen.queryAllByRole('heading')[0];
        expect(nav).toBeInTheDocument();
    })
})
