// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for 'car'", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("returns true for mixed case 'RaceCar'", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("returns false for empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws error for non-alphabetic characters", () => {
    expect(() => isPalindrome("abc123")).toThrow("Invalid input");
  });

  it("throws error for non-string input", () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string");
  });
});
