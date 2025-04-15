import { describe, test, expect } from "vitest";
import { rightRotate } from "./rightRotate";

describe("Public test", () => {
  test("Case 1", () => {
    expect(rightRotate([1, 2, 3, 4, 5, 6], 3)).toEqual([4, 5, 6, 1, 2, 3]);
  });
  test("Case 2", () => {
    expect(rightRotate([1, 2, 3, 4, 5, 6], 6)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("Case 3", () => {
    expect(rightRotate([-1, -2, -3, -4, -5], 0)).toEqual([-1, -2, -3, -4, -5]);
  });
  test("Case 4", () => {
    expect(rightRotate([1], 1)).toEqual([1]);
  });
  test("Case 5", () => {
    expect(rightRotate([10, 12], 1)).toEqual([12, 10]);
  });
});
