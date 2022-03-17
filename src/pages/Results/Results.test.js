import { screen } from "@testing-library/react";

import { default as Results } from ".";

describe("Results page", () => {
  test("it renders the results component", () => {
    renderWithProviders(<Results />);
    const results = screen.getByTestId("results-component");
    expect(results).toBeInTheDocument();
  });
});
