export interface GetConsistencyIndexReturn {
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
 * Calculates de Consistency index.
 * @param {number} lambdaMax - Lamba máx value
 * @param {number} totalNumOfAttributes - Number of attributes
 * @returns {GetConsistencyIndexReturn}
 */
function getConsistencyIndex(lambdaMax: number, totalNumOfAttributes: number) {
  const ci = (lambdaMax - totalNumOfAttributes)/ (totalNumOfAttributes-1);
  
  const calc=`$CI=frac{${lambdaMax.toFixed(2)}-${totalNumOfAttributes.toFixed(2)}}{${(totalNumOfAttributes-1).toFixed(2)}}=${ci.toFixed(2)}$`;

  return { ci, calc };
}

export default getConsistencyIndex;