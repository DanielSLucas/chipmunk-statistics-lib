interface SumColumnsReturn {
    sums: number[];
    calc: string;
}
/**
 * Object containing the return of sumColumns function
 * @typedef {Object} SumColumnsReturn
 * @property {number[]} sums - Array with the sum of each column values
 * @property {string} calc - The calculations made to get the sums array
 */
/**
 * Calculates the sum of each column values
 * @param {number[][]} arr - An array of numbers.
 * @returns {SumColumnsReturn}
 */
declare function sumColumns(arr: number[][]): SumColumnsReturn;
export default sumColumns;
