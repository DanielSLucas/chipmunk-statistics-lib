/**
 * Creates the comparison table by comparing the specified attribute of each item
 * and giving it an score based on Saaty scale.
 * @param {Object} serializedItems - Items that will be compared
 * @param {string} attributeName - The name of the attribute of the items that will be compared
 * @param {'greater' | 'lesser'} betterWhen - Tell when the attribute is better
 * @returns {number[][]} Two-dimensional array with the comparison values between options
 */
declare function createComparisonTable(serializedItems: Record<string, number>[], attributeName: string, betterWhen: 'greater' | 'lesser'): number[][];
export default createComparisonTable;
