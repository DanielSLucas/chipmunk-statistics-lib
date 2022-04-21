"use strict";
exports.__esModule = true;
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
function getConsistencyRatio(ci, totalNumOfAttributes) {
    /**
     * Random index based on array order
     */
    var RI = [0, 0, 0.58, 0.90, 1.12, 1.24, 1.32, 1.41, 1.45, 1.49, 1.51, 1.48, 1.56, 1.57, 1.59];
    if (totalNumOfAttributes <= 2) {
        return { cr: 0, calc: "$CR=frac{".concat(ci.toFixed(2), "}{").concat(RI[totalNumOfAttributes - 1], "}=0$") };
    }
    var cr = ci / RI[totalNumOfAttributes - 1];
    var calc = "$CR=frac{".concat(ci.toFixed(2), "}{").concat(RI[totalNumOfAttributes - 1], "}=").concat(cr.toFixed(2), "$");
    return { cr: cr, calc: calc };
}
exports["default"] = getConsistencyRatio;
