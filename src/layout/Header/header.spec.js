import { screen } from '@testing-library/react';
import ChatRoom from '.';


describe('Header', () => {
    
    test('it renders a nav tag', () => {
        
        renderWithProviders(<ChatRoom/>);
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })
})
