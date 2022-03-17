import { screen } from "@testing-library/react";

import { default as Edit } from ".";

const onSubmit = jest.fn();

describe("Edit component", () => {
  beforeEach(() => {
    renderWithProviders(<Edit children={<></>} onSubmit={onSubmit} />);
  });

  test("it renders a form to the page", () => {
    const form = screen.getByLabelText("name-status-form");
    expect(form).toBeInTheDocument();
  });

  test("it renders a heading for the card", () => {
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
  });
});
