import { screen } from "@testing-library/react";

import { default as SettingsBtn } from ".";

describe("SettingsBtn component", () => {
  test("it renders a button that links to settings page to the DOM", () => {
    renderWithProviders(<SettingsBtn />);
    const button = screen.getByRole("link");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/Settings");
  });
});
