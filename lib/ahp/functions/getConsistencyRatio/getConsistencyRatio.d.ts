interface GetConsistencyRatioReturn {
    cr: number;
    calc: string;
}
/**
 * Object containing the return of getConsistencyRatio function
 * @typedef {Object} GetConsistencyRatioReturn
 * @property {number} cr - Consistency ratio value
 * @property {string} calc - The calculations made to get the cr
 */
/**
 * Calculates the Consistency ratio.
 * @param {number} ci - Consistency index value
 * @param {number} totalNumOfAttributes - Number of attributes
 * @returns {GetConsistencyRatioReturn}
 */
declare function getConsistencyRatio(ci: number, totalNumOfAttributes: number): GetConsistencyRatioReturn;
export default getConsistencyRatio;
