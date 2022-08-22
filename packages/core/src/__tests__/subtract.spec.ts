import { subtract } from "@/index";
import { describe, expect, test } from "vitest";

describe("subtract", () => {
	test("should be a function", () => {
		expect(subtract).toBeTypeOf("function");
	});

	test("should default to 0", () => {
		expect(subtract()).toBe(0);
	});

	test("should handle one argument", () => {
		expect(subtract(5)).toBe(5);
		expect(subtract(-12)).toBe(-12);
	});

	test("should handle two arguments", () => {
		expect(subtract(1, 2)).toBe(-1);
		expect(subtract(11, 12)).toBe(-1);

		expect(subtract(-1, -2)).toBe(1);
		expect(subtract(-11, -12)).toBe(1);

		expect(subtract(1, -2)).toBe(3);
		expect(subtract(-11, 12)).toBe(-23);
	});

	test("should handle multiple arguments", () => {
		expect(subtract(0, 0, -1, -2, 4, 9, 10)).toBe(-20);
		expect(subtract(1, 2, 3, 4, 5, 6)).toBe(-19);
		expect(subtract(10, 20, 30)).toBe(-40);
	});
});
