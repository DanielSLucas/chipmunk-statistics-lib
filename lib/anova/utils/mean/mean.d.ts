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
declare function mean(values: Array<any>): MeanReturn;
export default mean;
