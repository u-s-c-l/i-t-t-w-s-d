import { screen } from '@testing-library/react';
import ChatRoom from '.';


describe('ChatRoom page', () => {
    
    test('it renders a heading ', () => {
        
        renderWithProviders(<ChatRoom/>);
        const nav = screen.queryByRole('heading');
        expect(nav).toBeInTheDocument();
    })
})
