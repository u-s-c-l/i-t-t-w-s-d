import { screen } from '@testing-library/react';
import CreateNewGame from '.';


describe('ChatRoom page', () => {
    
    test('it renders a heading ', () => {
        
        renderWithProviders(<CreateNewRooom/>);
        const nav = screen.queryByRole('heading');
        expect(nav).toBeInTheDocument();
    })
})
