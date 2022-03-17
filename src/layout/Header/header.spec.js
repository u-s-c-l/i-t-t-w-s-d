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
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

const useAuthContext = () => useContext(AuthContext);

describe('Header', () => {

    let wrapper;
  beforeEach(() => {
    jest.resetAllMocks();
    wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
  });
    
    test('it renders a nav tag', () => {
        renderHook(() => useAuthContext(), { wrapper });
        render(<AuthProvider> <Header /> </AuthProvider>, { wrapper: MemoryRouter });
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })
})
