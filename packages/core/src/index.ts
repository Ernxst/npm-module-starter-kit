/* eslint-disable no-plusplus */
export function sum(...nums: number[]): number {
	let index = 0;
	let total = 0;
	for (; index < nums.length; index++) total += nums[index];
	return total;
}

export function subtract(...nums: number[]): number {
	let index = 0;
	// eslint-disable-next-line no-bitwise, unicorn/prefer-math-trunc
	let total = nums[index++] | 0;
	for (; index < nums.length; index++) total -= nums[index];
	return total;
}

export function average(...nums: number[]): number {
	let index = 0;
	let total = 0;
	const length_ = nums.length;
	for (; index < length_; index++) total += nums[index];
	return total / length_;
}
