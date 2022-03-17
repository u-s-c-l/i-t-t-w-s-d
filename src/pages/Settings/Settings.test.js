import { screen } from "@testing-library/react";

import { default as Settings } from ".";

describe("Settings page", () => {
  beforeEach(() => {
    renderWithProviders(<Settings />);
  });

  test("it renders 5 link sections", () => {
    const sections = screen.getAllByRole("link");
    expect(sections).toHaveLength(4);
  });

  test("there a section in which you can edit profile", () => {
    const profileSct = screen.getByText(/profile/i);
    expect(profileSct).toBeInTheDocument();
  });

  test("there a section in which you can edit account information", () => {
    const accountSct = screen.getByText(/account/i);
    expect(accountSct).toBeInTheDocument();
  });

  test("there a section in which you can change privacy settings", () => {
    const privacySct = screen.getByText(/privacy/i);
    expect(privacySct).toBeInTheDocument();
  });

  test("there a section in which you can see general features", () => {
    const Sct = screen.getByText(/general/i);
    expect(Sct).toBeInTheDocument();
  });
});
