const assert = require('assert');
const { functionName } = require('./testclass.js'); // Replace with your actual JavaScript file and function

test('functionName should return expected result', () => {
	assert.strictEqual(functionName(arguments), expectedResult); // Replace with actual arguments and expected result
});// pilot/testclass.test.js

const { calculatePercentage, calculatePercentageIncrease } = require('./testclass');

describe('calculatePercentage', () => {
    test('should calculate the correct percentage', () => {
        expect(calculatePercentage(25, 100)).toBe(25);
        expect(calculatePercentage(50, 200)).toBe(25);
    });

    test('should throw an error when total is zero', () => {
        expect(() => calculatePercentage(25, 0)).toThrow('Total cannot be zero');
    });
});

describe('calculatePercentageIncrease', () => {
    test('should calculate the correct percentage increase', () => {
        expect(calculatePercentageIncrease(100, 150)).toBe(50);
        expect(calculatePercentageIncrease(200, 300)).toBe(50);
    });

    test('should throw an error when old value is zero', () => {
        expect(() => calculatePercentageIncrease(0, 150)).toThrow('Old value cannot be zero');
    });
});

// write exception test cases for percedntage calculator
describe('calculatePercentageDifference', () => {
	test('should calculate the correct percentage difference', () => {
		expect(calculatePercentageDifference(100, 80)).toBe(25);
		expect(calculatePercentageDifference(50, 50)).toBe(0);
	});

	test('should return 0% for both numbers being zero', () => {
		expect(calculatePercentageDifference(0, 0)).toBe(0);
	});
});