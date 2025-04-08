import { describe, test, expect } from "vitest";
import { findSecondMaximum } from "./findSecondMaximum";

describe("Public test", () => {
  test("test 1", () => {
    expect(findSecondMaximum([-2, 9])).toBe(-2);
  });
  test("test 2", () => {
    expect(findSecondMaximum([-2, -3, -5, -7])).toBe(-3);
  });
  test("test 1", () => {
    expect(findSecondMaximum([2, 9, 5, 4, 0])).toBe(5);
  });
  test("test 1", () => {
    expect(findSecondMaximum([4, -2, 5, -2, 5, 6])).toBe(5);
  });
  test("test 1", () => {
    expect(findSecondMaximum([4, 10, 10, 8, 9])).toBe(9);
  });
});
