import { describe, expect, test } from "vitest";
import { removeEven } from "./removeEven";

describe("Private test:", () => {
  test("test 1:", () => {
    expect(removeEven([33, 33, 33, 33])).toEqual([33, 33, 33, 33]);
  });
  test("test 2:", () => {
    expect(removeEven([24, 24, 24, 24, 24])).toEqual([]);
  });
  test("test 3:", () => {
    expect(removeEven([11, 30, 17, 38, 37, 49, 50])).toEqual([11, 17, 37, 49]);
  });
  test("test 4:", () => {
    expect(
      removeEven([
        22, 42, 31, 19, 47, 44, 45, 24, 23, 7, 21, 44, 31, 1, 29, 12, 47, 47,
        46, 39, 43, 29, 47, 19, 44, 39, 1, 8, 37, 50, 2, 26, 28, 34, 20, 42, 47,
        32, 21, 28, 29, 47, 29, 8, 32, 12, 24, 33, 0, 32, 41, 20, 38, 7, 0, 16,
        32, 2, 33, 37, 9, 34, 35, 50, 30, 14, 27, 43, 16, 49, 33, 17, 25, 4, 24,
        7, 18, 33, 14, 6, 10, 15, 35, 50, 43, 44, 36, 13, 33, 23, 10, 27, 11,
        33, 20, 11, 13, 24, 9, 12,
      ])
    ).toEqual([
      31, 19, 47, 45, 23, 7, 21, 31, 1, 29, 47, 47, 39, 43, 29, 47, 19, 39, 1,
      37, 47, 21, 29, 47, 29, 33, 41, 7, 33, 37, 9, 35, 27, 43, 49, 33, 17, 25,
      7, 33, 15, 35, 43, 13, 33, 23, 27, 11, 33, 11, 13, 9,
    ]);
  });
  test("test 6:", () => {
    expect(removeEven([0, 20, 30, 45, 50])).toEqual([45]);
  });
});

describe("Public test case:", () => {
  test("test 1:", () => {
    expect(removeEven([0, 20, 41])).toEqual([41]);
  });
  test("test 2:", () => {
    expect(removeEven([0])).toEqual([]);
  });
  test("test 3:", () => {
    expect(removeEven([2, 4, 6, 8, 10, 13, 15])).toEqual([13, 15]);
  });
  test("test 4:", () => {
    expect(removeEven([1, 3, 5, 7, 9])).toEqual([1, 3, 5, 7, 9]);
  });
  test("test 5:", () => {
    expect(removeEven([1, 22, 45, 33, 19, 32])).toEqual([1, 45, 33, 19]);
  });
});
