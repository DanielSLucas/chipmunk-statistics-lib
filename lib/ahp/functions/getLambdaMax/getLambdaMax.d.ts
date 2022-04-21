interface GetLambdaMaxReturn {
    lambdaMax: number;
    calc: string;
}
/**
 * Object containing the return of getLambdaMax function
 * @typedef {Object} GetLambdaMaxReturn
 * @property {number} lambdaMax - Lamba máx value
 * @property {string} calc - The calculations made to get the lambdaMax
 */
/**
 * Calculates the lamba máx.
 * @param {number} totalConsistency - Total consistency value
 * @param {number} totalNumOfAttributes - Number of attributes
 * @returns {GetLambdaMaxReturn}
 */
declare function getLambdaMax(totalConsistency: number, totalNumOfAttributes: number): GetLambdaMaxReturn;
export default getLambdaMax;
