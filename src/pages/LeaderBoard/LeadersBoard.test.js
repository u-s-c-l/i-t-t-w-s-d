import { screen } from "@testing-library/react";
import axios from "axios";
import { act } from "react-dom/test-utils";

import { default as LeaderBoard } from ".";

describe("LeadersBoard page", () => {
  test("it renders a heading", () => {
    renderWithProviders(<LeaderBoard />);
    const heading = screen.getByText(/leader board/i);
    expect(heading).toBeInTheDocument();
  });

  test("if scores exist then table is rendered", async () => {
    jest.spyOn(React, "useEffect").mockImplementation((f) => f());
    jest.spyOn(axios, "get").mockResolvedValueOnce({ data: [{}, {}, {}] });
    await act(async () => renderWithProviders(<LeaderBoard />));
    // renderWithProviders(<LeaderBoard />);
    const table = screen.getByTestId("score-table");
    expect(table).toBeInTheDocument();
  });
});
