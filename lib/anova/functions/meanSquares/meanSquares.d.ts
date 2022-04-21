import { Record } from "../types";
interface SumOfSquares {
    between: number;
    within: number;
    total: number;
}
interface DegreesOfFreedom {
    between: number;
    within: number;
    total: number;
}
interface MeanSquaresReturn {
    between: number;
    within: number;
    record: Record;
}
/**
 * Return of meanSquare function
 * @typedef {Object} MeanSquaresReturn
 * @property {number} between mean square columns/between (MSC)
 * @property {number} within mean square within/error (MSE)
 */
/**
 * Calculates the mean square for the given params
 * @param {SumOfSquares} sumOfSquares sum of squares of columns/between (SSC) or within/error (SSE)
 * @param {DegreesOfFreedom} degreesOfFreedom degrees of freedom of columns/between (DFc) or within/error (DFe)
 * @returns {MeanSquares} The mean square
 */
declare function meanSquares(squaresSums: SumOfSquares, freedomDegrees: DegreesOfFreedom): MeanSquaresReturn;
export default meanSquares;
