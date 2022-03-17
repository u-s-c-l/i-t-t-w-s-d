import { useAuthContext } from "../contexts";

useAuthContext = jest.fn();

useAuthContext.mockReturnValue(true);
