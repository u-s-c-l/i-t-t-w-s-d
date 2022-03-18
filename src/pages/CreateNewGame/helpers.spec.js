import { default as matches } from "./helpers";

describe("matches function", () => {
  test("it returns input string if contains no special characters", () => {
    const testStr = "test string";
    const result = matches(testStr);
    expect(result).toEqual(testStr);
  });

  test("it replaces encoded values with special characters in a string", () => {
    const testStr = "test&#x27; string&#x3E;";
    const result = matches(testStr);
    expect(result).toEqual("test' string>");
  });
});
