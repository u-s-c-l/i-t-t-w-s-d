import { screen } from "@testing-library/react";

import { default as Status } from ".";

const onChange = jest.fn();

describe("Status component", () => {
  test("it renders a field for status input", () => {
    renderWithProviders(<Status onChange={onChange} value={"Test status"} />);
    const field = screen.getByLabelText("status-field");
    expect(field).toBeInTheDocument();
  });
});
