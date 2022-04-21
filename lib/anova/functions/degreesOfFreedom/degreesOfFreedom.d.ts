import { Record } from '../types';
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
declare function degreesOfFreedom(samples: (number | null)[][]): DegreesOfFreedomReturn;
export default degreesOfFreedom;
