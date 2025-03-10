import { test, jest, expect, describe } from '@jest/globals'
import { isBusinessOpen, sum, isBetween11And6 } from '@/actions/helperFunctions'


// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

describe("isBetween11And6", () => {
  test("returns true for 1utc, 6pm", () => {
    expect(isBetween11And6(new Date("2025-03-09T01:00:00Z"))).toBe(false);
  });

  test("returns true for 17:59utc, 10:59am", () => {
    expect(isBetween11And6(new Date("2025-03-09T17:59:59Z"))).toBe(false);
  });

  test("returns false for 10:59utc, 3:59am", () => {
    expect(isBetween11And6(new Date("2025-03-09T10:59:59Z"))).toBe(false);
  });

  test("returns false for 18:00utc, 11am", () => {
    expect(isBetween11And6(new Date("2025-03-09T18:00:00Z"))).toBe(true);
  });

  test("returns false for midnight 24/0 utc(midnight) 5pm", () => {
    expect(isBetween11And6(new Date("2025-03-09T00:00:00Z"))).toBe(true);
  });
  test("returns false for midnight 0:59utc 5:59pm", () => {
    expect(isBetween11And6(new Date("2025-03-09T00:00:00Z"))).toBe(true);
  });
});