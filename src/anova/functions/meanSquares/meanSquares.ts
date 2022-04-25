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
function meanSquares(squaresSums: SumOfSquares, freedomDegrees: DegreesOfFreedom): MeanSquaresReturn {
  const between = squaresSums.between/freedomDegrees.between;
  const within =  squaresSums.within/freedomDegrees.within;
  
  const record = {
    title: "Quadrado médio",
    calcs: [
      `$QME=frac{${squaresSums.between.toFixed(2)}}{${freedomDegrees.between.toFixed(2)}}=${between.toFixed(2)}$`,
      `$QMD=frac{${squaresSums.within.toFixed(2)}}{${freedomDegrees.within.toFixed(2)}}=${within.toFixed(2)}$`,
    ]
  }

  return {
    between,
    within,
    record,
  }
}

export default meanSquares;
