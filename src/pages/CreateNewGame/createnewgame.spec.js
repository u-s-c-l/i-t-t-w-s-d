import { screen } from '@testing-library/react';
import CreateNewGame from '.';


describe('Create new game page', () => {
    
    test.skip('it renders a heading ', () => {
        
        renderWithProviders(<CreateNewGame/>);
        const nav = screen.queryByRole('heading');
        expect(nav).toBeInTheDocument();
    })
})
