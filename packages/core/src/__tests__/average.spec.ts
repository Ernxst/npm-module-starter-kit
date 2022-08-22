import { average } from "@/index";
import { describe, expect, test } from "vitest";

describe("average", () => {
	test("should be a function", () => {
		expect(average).toBeTypeOf("function");
	});

	test("should default to NaN", () => {
		expect(average()).toBe(NaN);
	});

	test("should handle one argument", () => {
		expect(average(5)).toBe(5);
		expect(average(-12)).toBe(-12);
	});

	test("should handle two arguments", () => {
		expect(average(1, 2)).toBe(1.5);
		expect(average(11, 12)).toBe(11.5);

		expect(average(-1, -2)).toBe(-1.5);
		expect(average(-11, -12)).toBe(-11.5);

		expect(average(1, -2)).toBe(-0.5);
		expect(average(-11, 12)).toBe(0.5);
	});

	test("should handle multiple arguments", () => {
		expect(average(0, 0, -1, -2, 4, 9, 10)).toBe(20 / 7);
		expect(average(1, 2, 3, 4, 5, 6)).toBe(21 / 6);
		expect(average(10, 20, 30)).toBe(20);
	});
});
