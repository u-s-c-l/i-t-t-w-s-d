import { screen } from "@testing-library/react";

import { default as Chat } from ".";

describe("Chat component", () => {
  test("it renders a link to the chat room", () => {
    renderWithProviders(<Chat />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });
});
