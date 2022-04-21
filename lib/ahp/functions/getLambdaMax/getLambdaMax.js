"use strict";
exports.__esModule = true;
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
function getLambdaMax(totalConsistency, totalNumOfAttributes) {
    var lambdaMax = totalConsistency / totalNumOfAttributes;
    var calc = "$lambda=frac{".concat(totalConsistency.toFixed(2), "}{").concat(totalNumOfAttributes.toFixed(2), "}=").concat(lambdaMax.toFixed(2), "$");
    return { lambdaMax: lambdaMax, calc: calc };
}
exports["default"] = getLambdaMax;
