declare type Labels = {
    column: string[];
    row: string[];
};
/**
 * Creates the table with the sums and priority vector.
 * @param {number[][]} arr - An array of numbers.
 * @param {string[]} labels - Column labels.
 * @param {number[]} priorities - Row priorities.
 * @param {number[]} lastRow - Last row values.
 * @returns {(string | number)[]} The table with the sums and priority vector
 */
declare function createTable(arr: number[][], labels: Labels, priorities: number[], lastRow: (number | string)[]): (string | number)[][];
export default createTable;
