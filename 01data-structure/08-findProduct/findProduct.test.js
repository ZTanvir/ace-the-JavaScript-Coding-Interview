import { describe, test, expect } from "vitest";
import { findProduct } from "./findProduct";

describe("Private test", () => {
  test("Test 01:", () => {
    expect(findProduct([-11, -12, -2, -3, -4, -9])).toEqual([
      -2592, -2376, -14256, -9504, -7128, -3168,
    ]);
  });
  test("Test 02:", () => {
    expect(findProduct([15, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 0]);
  });
  test("Test 03:", () => {
    expect(findProduct([0, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 0]);
  });
  test("Test 04:", () => {
    expect(findProduct([10, 20, 3, 0])).toEqual([0, 0, 0, 600]);
  });
  test("Test 05:", () => {
    expect(findProduct([-2, -2, -2, -2, -2])).toEqual([16, 16, 16, 16, 16]);
  });
  test("Test 06:", () => {
    expect(findProduct([1, 0, 3, 5, 2])).toEqual([0, 30, 0, 0, 0]);
  });
  test("Test 07:", () => {
    expect(findProduct([12, 10, 7, 2, 1, 15])).toEqual([
      2100, 2520, 3600, 12600, 25200, 1680,
    ]);
  });
});
