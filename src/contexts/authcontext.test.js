import { renderHook, act } from "@testing-library/react-hooks";
import "jest-localstorage-mock";

import { AuthProvider, useAuthContext } from ".";

import axios from "axios";
jest.mock("axios");

describe("useAuthContext", () => {
  let wrapper;
  beforeEach(() => {
    jest.resetAllMocks();
    wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
  });

  test("it retrieves the token from local storage", async () => {
    renderHook(() => useAuthContext(), { wrapper });
    expect(localStorage.getItem).toHaveBeenCalledWith("token");
  });

  test("that logout should clear localStorage", async () => {
    const { result } = renderHook(() => useAuthContext(), { wrapper });
    act(() => result.current.logout());
    expect(localStorage.clear).toHaveBeenCalled();
  });

  // test("if no error recieved from axios then login is called", async () => {
  //   const testUser = {
  //     username: "tester",
  //     password: "testword"
  //   };
  //   const { result } = renderHook(() => useAuthContext(), { wrapper });
  //   jest.spyOn(axios, "post").mockResolvedValue({ data: {} });
  //   act(() => result.current.register(testUser));
  //   expect(result.current.login).toHaveBeenCalled();
  // });
});
