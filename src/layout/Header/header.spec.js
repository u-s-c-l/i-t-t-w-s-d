import { renderHook, act } from "@testing-library/react-hooks";
import "jest-localstorage-mock";

import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '.';

const AuthContext = React.createContext()

const AuthProvider = ({children}) => {
  const login = jest.fn()
  const register = jest.fn()
  const logout = jest.fn()
  const getCurrentUser = jest.fn()
  const currentUser = {username: "tester"}
  const auth = {login, register, logout, getCurrentUser, currentUser}
  return <useAuthContext value={auth}>{children}</useAuthContext>
}

describe('Header', () => {

    
    test('it renders a nav tag', () => {
        
        render(<AuthProvider > <Header /> </AuthProvider>, { wrapper: MemoryRouter });
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })
})
