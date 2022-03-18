import { screen } from "@testing-library/react";
import JoinGame from ".";

describe("Join game page", () => {
  xtest("it renders a form ", () => {
    renderWithProviders(<JoinGame />);
    const nav = screen.queryByRole("form");
    expect(nav).toBeInTheDocument();
  });
});
