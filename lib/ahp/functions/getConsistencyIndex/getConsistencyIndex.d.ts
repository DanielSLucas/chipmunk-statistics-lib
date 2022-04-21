interface GetConsistencyIndexReturn {
    ci: number;
    calc: string;
}
/**
 * Object containing the return of getConsistencyIndex function
 * @typedef {Object} GetConsistencyIndexReturn
 * @property {number} ci - Consistency index value
 * @property {string} calc - The calculations made to get the ci
 */
/**
 * Calculates the Consistency index.
 * @param {number} lambdaMax - Lamba máx value
 * @param {number} totalNumOfAttributes - Number of attributes
 * @returns {GetConsistencyIndexReturn}
 */
declare function getConsistencyIndex(lambdaMax: number, totalNumOfAttributes: number): GetConsistencyIndexReturn;
export default getConsistencyIndex;
