import { screen } from "@testing-library/react";

import { default as PlayGame } from ".";

describe("PlayGame page", () => {
  test("it renders the question component", () => {
    jest.spyOn(React, "useEffect");
    renderWithProviders(<PlayGame />);
    const questions = screen.getByTestId("the-questions");
    expect(questions).toBeInTheDocument();
  });
});
