import { Record } from "../types";
interface SumOfSquaresReturn {
    total: number;
    between: number;
    within: number;
    record: Record;
}
/**
 * Return of sumOfSquares function
 * @typedef {Object} SumOfSquaresReturn
 * @property {number} total sum of squares total (SST)
 * @property {number} between sum of squares between/columns (SSB)
 * @property {number} within sum of squares within/error (SSW)
 * @property {Record} record the calculations made
 */
/**
 * Calulates the sum of squares: total (SST), between/columns (SSB), within/error (SSW) for the given samples
 * @param {(number | null)[][]} samples Two-dimensional numeric array of samples
 * @returns {SumOfSquaresReturn} All the sum of squares results
 */
declare function sumOfSquares(samples: (number | null)[][]): SumOfSquaresReturn;
export default sumOfSquares;
