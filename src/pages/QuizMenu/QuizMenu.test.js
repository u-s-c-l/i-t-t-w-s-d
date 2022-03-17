import { screen } from "@testing-library/react";

import { default as QuizMenu } from ".";

describe("QuizMenu Page", () => {
  beforeEach(() => {
    renderWithProviders(<QuizMenu />);
  });

  test("it renders a heading", () => {
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toBeInTheDocument();
  });

  test("it renders the QuizLanding component", () => {
    const landing = screen.getByTestId("landing-component");
    expect(landing).toBeInTheDocument();
  });
});
