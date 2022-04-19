import { countNotNullElements, sumValues, getCalcWithoutResult } from "../index";

interface MeanReturn {
  mean: number;
  calc: string;
}

/**
 * Object containing the return of mean function
 * @typedef {Object} MeanReturn
 * @property {number} mean - The mean result
 * @property {string} calc - The calculations made to get the mean
 */

/**
 * Returns the mean for a given array of values
 * @param {any[]} values Array of numeric values
 * @returns {number} The mean
 */
function mean(values: Array<any>): MeanReturn {
  const numberOfValues = countNotNullElements(values);

  let { sum, calc: sumCalc } = sumValues(values);  

  const mean = sum/numberOfValues;
  const calc = `$frac{${getCalcWithoutResult(sumCalc)}}{${numberOfValues}}=${mean.toFixed(2)}$`;

  return { mean, calc };
}

export default mean;