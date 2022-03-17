import { screen } from "@testing-library/react";

import { default as Board } from ".";

describe("Board component", () => {
  test("it renders a table containing username, category, and score", () => {
    renderWithProviders(
      <Board
        data={{
          cat: "test_cat",
          username: "tester",
          score: 20
        }}
      />
    );
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
});
