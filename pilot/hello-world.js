/**
 * Calculates the percentage of a value relative to a total.
 * @param {number} value - The value to calculate percentage for.
 * @param {number} total - The total value that represents 100%.
 * @returns {number} The percentage value.
 */
function calculatePercentage(value, total) {
    if (total === 0) {
        throw new Error("Total cannot be zero");
    }
    
    return (value / total) * 100;
}

// Example usage
// const percent = calculatePercentage(25, 100); // Returns 25

//calcuate percentage difference calculator between two numbers
/**
 * Calculates the percentage difference between two numbers.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} The percentage difference between the two numbers.
 */
function calculatePercentageDifference(num1, num2) {
    if (num1 === 0 && num2 === 0) {
        return 0;
    }
    
    const difference = Math.abs(num1 - num2);
    const average = (Math.abs(num1) + Math.abs(num2)) / 2;
    
    return (difference / average) * 100;
}
// Example usage
// const percentDiff = calculatePercentageDifference(100, 80); // Returns 25
// const percentDiff = calculatePercentageDifference(50, 50); // Returns 0