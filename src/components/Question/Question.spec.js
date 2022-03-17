import { screen } from "@testing-library/react";

import { default as Question } from ".";

describe("Question component", () => {
  test("it renders a question to the DOM", () => {
    renderWithProviders(<Question question={"who did all the testing?"} />);
    const question = screen.getByTestId("question-element");
    expect(question).toBeInTheDocument();
  });
});
