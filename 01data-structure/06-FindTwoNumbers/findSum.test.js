import { describe, test, expect } from "vitest";
import { findSum } from "./findSum";

describe("Private test", () => {
  test("Test 01:", () => {
    expect(findSum([9, 0], 9)).toEqual([9, 0]);
  });
  test("Test 02:", () => {
    expect(findSum([9, 0], 9)).toEqual([9, 0]);
  });
  test("Test 03:", () => {
    expect(findSum([-10, -20, -30], -60)).toEqual([]);
  });
  test("Test 04:", () => {
    expect(findSum([1, 2, 3, 4, 5, 6, 7, 8], 15)).toEqual([7, 8]);
  });
  test("Test 05:", () => {
    expect(
      findSum(
        [
          -18, -2, 10, -26, -1, -16, -26, 8, -30, -25, -20, 15, 28, 27, 26, -10,
          21, 29,
        ],
        50
      )
    ).toEqual([21, 29]);
  });
});
