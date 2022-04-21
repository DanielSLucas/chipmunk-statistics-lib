import { Record } from '../types';
import { countNotNullElements } from "../../utils";

interface DegreesOfFreedomReturn {
  between: number;
  within: number;
  total: number;
  record: Record;
}

/**
 * Return of degreesOfFreedom function
 * @typedef {Object} DegreesOfFreedomReturn
 * @property {number} between degrees of freedom columns/between (DFc)
 * @property {number} within degrees of freedom within/error (DFe)
 */

/**
 * Calculates the degrees of freedom between and within the comlumns
 * @param {(number |  null)[][]} samples Two-dimensional numeric array of samples
 * @returns {DegreesOfFreedomReturn} All the degrees of freedom results
 */
function degreesOfFreedom(samples: (number | null)[][]): DegreesOfFreedomReturn {
  const numberOfSamples = samples.length;
  const numberOfValues = countNotNullElements(samples);

  const between = numberOfSamples - 1;
  const within = numberOfValues - numberOfSamples;
  const total = numberOfValues - 1;

  const record = {
    title: "Graus de liberdade",    
    calcs: [
      `$GLE=${numberOfSamples}-1=${between}$`,
      `$GLD=${numberOfValues}-${numberOfSamples}=${within}$`,
      `$GLT=${numberOfValues}-1=${total}$`,
    ],
  };

  return {
    between,
    within,
    total,
    record,
  };
}

export default degreesOfFreedom;
