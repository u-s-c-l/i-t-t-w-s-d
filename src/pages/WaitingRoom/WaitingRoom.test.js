import { screen } from "@testing-library/react";

import { default as WaitingRoom } from ".";

describe("WaitingRoom page", () => {
  test("it renders a heading to the page", () => {
    renderWithProviders(<WaitingRoom />);
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toBeInTheDocument();
  });

  test("it renders CreateWR component if an owner exists", () => {
    const initialState = {
      owner: true
    };
    renderWithProviders(<WaitingRoom />, { initialState });
    const createWR = screen.getByTestId("createWR");
    expect(createWR).toBeInTheDocument();
  });

  test("it renders JoinWR component if no owner exists", () => {
    renderWithProviders(<WaitingRoom />);
    const joinWR = screen.getByTestId("joinWR");
    expect(joinWR).toBeInTheDocument();
  });
});
