/**
 * Create the attributes Priotity Table
 * @param {string[]} attributes - Attributes names
 * @param {string[]} rankedAttributes - Attributes ordered by priority
 * @returns {number[][]} - Attributes comparison table
 */
declare function createAttributesPriotityTable(attributes: string[], rankedAttributes: string[]): number[][];
export default createAttributesPriotityTable;
