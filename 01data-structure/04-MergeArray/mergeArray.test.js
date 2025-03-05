import { describe, test, expect } from "vitest";
import mergeArray from "./mergeArray";

describe("Private Test", () => {
  test("Test 1", () => {
    expect(mergeArray([0], [])).toEqual([0]);
  });
  test("Test 2", () => {
    expect(mergeArray([2], [3])).toEqual([2, 3]);
  });
  test("Test 3", () => {
    expect(mergeArray([-12, 30, 50, 100], [-10, -7, 0, 11, 54])).toEqual([
      -12, -10, -7, 0, 11, 30, 50, 54, 100,
    ]);
  });
  test("Test 4", () => {
    expect(mergeArray([-12, 30, 50, 100], [-10, -7, 0, 11, 54])).toEqual([
      -12, -10, -7, 0, 11, 30, 50, 54, 100,
    ]);
  });
  test("Test 5", () => {
    expect(
      mergeArray([-1000, -842, -660, -100], [110, 330, 550, 1000])
    ).toEqual([-1000, -842, -660, -100, 110, 330, 550, 1000]);
  });
  test("Test 6", () => {
    expect(mergeArray([-240, -200, -100], [-900, 900, 1000])).toEqual([
      -900, -240, -200, -100, 900, 1000,
    ]);
  });
  test("Test 7", () => {
    expect(mergeArray([12, 24, 36, 48], [60, 72])).toEqual([
      12, 24, 36, 48, 60, 72,
    ]);
  });
});
