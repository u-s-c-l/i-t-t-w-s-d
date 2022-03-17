import { screen } from "@testing-library/react";

import { default as Name } from ".";

const onChange = jest.fn();

describe("Name component", () => {
  test("it renders an input to the page", () => {
    renderWithProviders(<Name onChange={onChange} value={"tester"} />);
    const field = screen.getByLabelText("name-field");
    expect(field).toBeInTheDocument();
  });
});
