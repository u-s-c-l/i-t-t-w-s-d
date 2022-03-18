import { matches } from "./helpers";
import { shuffle } from "./helpers";

describe("helper functions", () => {
  describe("matches", () => {
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

  describe("shuffle", () => {
    test("it should shuffle an array", () => {
      const array = ["item1", "item2", "item3", "item4"];
      const result = shuffle(array);
      expect(typeof result).toBe("object");
      expect(result).toHaveLength(4);
      expect(result).not.toEqual(["item1", "item2", "item3", "item4"]);
    });
  });
});
