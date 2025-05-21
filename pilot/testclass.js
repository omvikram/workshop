/**
 * Calculates the percentage of a number relative to a total
 * @param {number} value - The value to find the percentage of
 * @param {number} total - The total value
 * @returns {number} The percentage value
 */
function calculatePercentage(value, total) {
    if (total === 0) {
        throw new Error("Total cannot be zero");
    }
    
    return (value / total) * 100;
}

// Example usage:
// const result = calculatePercentage(25, 100); // Returns 25
// const result2 = calculatePercentage(50, 200); // Returns 25


// calculate percentage increase between two numbers
function calculatePercentageIncrease(oldValue, newValue) {
    if (oldValue === 0) {
        throw new Error("Old value cannot be zero");
    }

    const increase = newValue - oldValue;
    return (increase / oldValue) * 100;
}

// Example usage:
// const increase = calculatePercentageIncrease(100, 150); // Returns 50

module.exports = { calculatePercentage, calculatePercentageIncrease };

/**
 * Unit tests for percentage calculations
 */
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