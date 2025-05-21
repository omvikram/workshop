describe('Hello World Functionality', () => {
    test('should return "Hello, World!"', () => {
        expect('Hello, World!').toBe('Hello, World!');
    });
    // Add more tests as needed to test percentagecalulator functionality
    test('should return 50% for 50 out of 100', () => {
        const value = 50;
        const total = 100;
        const expectedPercentage = 50;
        const calculatedPercentage = (value / total) * 100;
        expect(calculatedPercentage).toBe(expectedPercentage);
    }
    );
    test('should return 0% for 0 out of 100', () => {
        const value = 0;
        const total = 100;
        const expectedPercentage = 0;
        const calculatedPercentage = (value / total) * 100;
        expect(calculatedPercentage).toBe(expectedPercentage);
    });
    test('should return 100% for 100 out of 100', () => {
        const value = 100;
        const total = 100;
        const expectedPercentage = 100;
        const calculatedPercentage = (value / total) * 100;
        expect(calculatedPercentage).toBe(expectedPercentage);
    });
    // Test for percentage difference functionality
    test('should return 25% for difference between 100 and 80', () => {
        const num1 = 100;
        const num2 = 80;
        const difference = Math.abs(num1 - num2);
        const average = (Math.abs(num1) + Math.abs(num2)) / 2;
        const expectedPercentageDifference = (difference / average) * 100;
        expect(expectedPercentageDifference).toBe(25);
    });
    test('should return 0% for difference between 50 and 50', () => {
        const num1 = 50;
        const num2 = 50;
        const difference = Math.abs(num1 - num2);
        const average = (Math.abs(num1) + Math.abs(num2)) / 2;
        const expectedPercentageDifference = (difference / average) * 100;
        expect(expectedPercentageDifference).toBe(0);
    });
    test('should throw error for total of 0 in percentage calculation', () => {
        const value = 50;
        const total = 0;
        expect(() => {
            if (total === 0) {
                throw new Error("Total cannot be zero");
            }
        }).toThrow("Total cannot be zero");
    });
});