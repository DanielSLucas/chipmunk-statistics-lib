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
 * Calculates de lamba máx.
 * @param {number} totalConsistency - Total consistency value
 * @param {number} totalNumOfAttributes - Number of attributes
 * @returns {GetLambdaMaxReturn}
 */
function getLambdaMax(totalConsistency: number, totalNumOfAttributes: number): GetLambdaMaxReturn {
  const lambdaMax = totalConsistency/totalNumOfAttributes;

  const calc=`$lambda=frac{${totalConsistency.toFixed(2)}}{${totalNumOfAttributes.toFixed(2)}}=${lambdaMax.toFixed(2)}$`;

  return { lambdaMax, calc };
}

export default getLambdaMax;