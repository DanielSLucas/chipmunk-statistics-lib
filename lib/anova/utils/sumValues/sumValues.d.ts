interface SumValuesReturn {
    sum: number;
    calc: string;
}
/**
 * Object containing the return of sumValues function
 * @typedef {Object} SumValuesReturn
 * @property {number} sum - The sum result
 * @property {string} calc - The calculations made to get the sum
 */
/**
 * Sum the values of the array
 * @param {any[]} arr - Uni or multidimensional array
 * @returns {number} The sum result
 */
declare function sumValues(arr: Array<any>): SumValuesReturn;
export default sumValues;
