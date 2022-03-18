import { screen } from "@testing-library/react";

import { default as PlayGame } from ".";

describe("PlayGame page", () => {
<<<<<<< HEAD
  test.skip("it renders the question component", () => {
=======
  test("it renders the question component", () => {
    jest.spyOn(React, "useEffect");
>>>>>>> 14368e99ccd1af74512d7ed2c23e069ebac1d6b0
    renderWithProviders(<PlayGame />);
    const questions = screen.getByTestId("the-questions");
    expect(questions).toBeInTheDocument();
  });
});
