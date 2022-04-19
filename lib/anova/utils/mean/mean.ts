import { countNotNullElements, sumValues } from "..";

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

  sumCalc = sumCalc.replace(/\$|=\d+/g, '');

  const calc = `$frac{${sumCalc}}{${numberOfValues}}$`;
  const mean = sum/numberOfValues;

  return { mean, calc };
}

export default mean;