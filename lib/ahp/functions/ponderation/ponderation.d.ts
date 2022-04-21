import { PonderationResults } from "../types";
/**
 * Object with all the properties returned from ponderation function.
 * @typedef {Object} PonderationResults
 * @property {number[][]} comparisonTable - Table with comparisons between provided options.
 * @property {number[]} sums - The sum total for each column of the comparisonTable.
 * @property {number[]} priorities - The priority from each item (row) in the comparisonTable.
 * @property {number} lambdaMax - The result of the division of the totalConsistency by the number of attributes beeing compared.
 * @property {number[]} consistency - The result of dividing the priority of each row of the 'comparisonTable' by the sum of multiplying each item (of the respective row) by its priority.
 * @property {number} totalConsistency - The sum of all consistencies.
 * @property {number} ci - Consistency index, the result of dividing the lambdaMax minus the number of attributes by the number of attributes minus 1.
 * @property {number} cr - Consistency ratio, the result of dividing the CI by the RI (ramdom index - based in the array order).
 * @property {boolean} isConsistent - Tells if the result is consitent.
 * @property {Object} record - The record of what was made in this function.
 */
/**
 * Do all the math for the given comparison table.
 * @param {number[][]} comparisonTable - Two-dimensional array with the comparison values between options
 * @param {string[]} labels - The identifiers for rows and columns
 * @param {string} title - The title for this calculations record
 * @returns {PonderationResults} Object with all the properties returned from ponderation function.
 */
declare function ponderation(comparisonTable: number[][], labels: string[], title: string): PonderationResults;
export default ponderation;
