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

  test("if scores exist then table is rendered", () => {
    jest.spyOn(React, "useEffect").mockImplementation((f) => f());
    jest.spyOn(axios, "get").mockResolvedValueOnce({ data: [{}] });
    renderWithProviders(<LeaderBoard />);
    // act(() => )
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
});
