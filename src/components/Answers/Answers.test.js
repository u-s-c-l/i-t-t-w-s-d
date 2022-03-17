import { default as Answers } from ".";

import { screen } from "@testing-library/react";

const handleChange = jest.fn();

describe("Answers component", () => {
  test("it renders a form to the DOM", () => {
    renderWithProviders(
      <Answers
        correct_answer={"test"}
        incorrect_answers={["test1", "test2"]}
        handleChange={handleChange}
      />
    );
    const form = screen.getByLabelText("Answers Form");
    expect(form).toBeInTheDocument();
  });
});
