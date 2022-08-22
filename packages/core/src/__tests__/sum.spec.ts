import { sum } from "@/index";
import { describe, expect, test } from "vitest";

describe("sum", () => {
	test("should be a function", () => {
		expect(sum).toBeTypeOf("function");
	});

	test("should default to 0", () => {
		expect(sum()).toBe(0);
	});

	test("should handle one argument", () => {
		expect(sum(5)).toBe(5);
		expect(sum(-12)).toBe(-12);
	});

	test("should handle two arguments", () => {
		expect(sum(1, 2)).toBe(3);
		expect(sum(11, 12)).toBe(23);

		expect(sum(-1, -2)).toBe(-3);
		expect(sum(-11, -12)).toBe(-23);

		expect(sum(1, -2)).toBe(-1);
		expect(sum(-11, 12)).toBe(1);
	});

	test("should handle multiple arguments", () => {
		expect(sum(0, 0, -1, -2, 4, 9, 10)).toBe(20);
		expect(sum(1, 2, 3, 4, 5, 6)).toBe(21);
		expect(sum(10, 20, 30)).toBe(60);
	});
});
