"use strict";
exports.__esModule = true;
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
function getConsistencyIndex(lambdaMax, totalNumOfAttributes) {
    var ci = (lambdaMax - totalNumOfAttributes) / (totalNumOfAttributes - 1);
    var calc = "$CI=frac{".concat(lambdaMax.toFixed(2), "-").concat(totalNumOfAttributes.toFixed(2), "}{").concat((totalNumOfAttributes - 1).toFixed(2), "}=").concat(ci.toFixed(2), "$");
    return { ci: ci, calc: calc };
}
exports["default"] = getConsistencyIndex;
