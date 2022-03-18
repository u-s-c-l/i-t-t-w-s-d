import { screen } from "@testing-library/react";
import CreateNewGame from ".";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("Create new game page", () => {
  xtest("it renders a heading ", async () => {
    await act(async () => renderWithProviders(<CreateNewGame />));
    let getCurrentUser;
    let useAuthContext = () => {
      getCurrentUser = () => {
        username = "hello";
      };
    };
    userEvent.type(
      screen.queryByLabelText("h1"),
      (useAuthContext = useAuthContext())
    );
    const nav = screen.queryByRole("heading");
    console.log(nav);
    expect(nav).toBeInTheDocument();
  });
});
