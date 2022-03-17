import { screen } from "@testing-library/react";

import { default as PlayGame } from ".";

describe("PlayGame page", () => {
  test.skip("it renders the question component", () => {
    renderWithProviders(<PlayGame />);
    const questions = screen.getByTestId("the-questions");
    expect(questions).toBeInTheDocument();
  });
});
