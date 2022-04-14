export interface GetConsistencyRatioReturn {
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
 * Calculates de Consistency ratio.
 * @param {number} ci - Consistency index value
 * @param {number} totalNumOfAttributes - Number of attributes
 * @returns {GetConsistencyRatioReturn}
 */
function getConsistencyRatio(ci: number, totalNumOfAttributes: number): GetConsistencyRatioReturn {
  /**
   * Random index based on array order
   */
  const RI = [ 0, 0, 0.58, 0.90, 1.12, 1.24, 1.32, 1.41, 1.45, 1.49, 1.51, 1.48, 1.56, 1.57, 1.59];

  if (totalNumOfAttributes <= 2) {
    return {cr: 0, calc: `$CR=frac{${ci.toFixed(2)}}{${RI[totalNumOfAttributes-1]}}=0$`}
  }

  const cr = ci/RI[totalNumOfAttributes-1];

  const calc=`$CR=frac{${ci.toFixed(2)}}{${RI[totalNumOfAttributes-1]}}=${cr.toFixed(2)}$`;

  return { cr, calc };
}

export default getConsistencyRatio;