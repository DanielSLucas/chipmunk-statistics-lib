import { countNotNullElements, sumValues } from "..";

/**
 * Returns the mean for a given array of values
 * @param {any[]} values Array of numeric values
 * @returns {number} The mean
 */
function mean(values: Array<any>): number {
  const numberOfValues = countNotNullElements(values);

  const sumOfValues = sumValues(values);

  return sumOfValues/numberOfValues;
}

export default mean;