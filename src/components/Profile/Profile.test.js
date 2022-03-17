import { screen } from "@testing-library/react";

import { default as Profile } from ".";

const onSubmit = jest.fn();

describe("Profile component", () => {
  test("it renders profile form to the DOM", () => {
    renderWithProviders(
      <Profile onSubmit={onSubmit} name={"tester"} status={"test status"} />
    );
    const form = screen.getByLabelText("profile-form");
    expect(form).toBeInTheDocument();
  });
});
