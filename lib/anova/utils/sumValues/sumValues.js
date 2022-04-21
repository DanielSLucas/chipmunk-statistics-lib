"use strict";
exports.__esModule = true;
var index_1 = require("../index");
/**
 * Object containing the return of sumValues function
 * @typedef {Object} SumValuesReturn
 * @property {number} sum - The sum result
 * @property {string} calc - The calculations made to get the sum
 */
/**
 * Sum the values of the array
 * @param {any[]} arr - Uni or multidimensional array
 * @returns {number} The sum result
 */
function sumValues(arr) {
    var sum = 0;
    var calc = '$';
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            var _a = sumValues(arr[i]), currSum = _a.sum, currCalc = _a.calc;
            currCalc = currCalc.replace(/\$|=\d+/g, '');
            sum += currSum;
            calc += "".concat(calc === '$' ? '' : '+').concat((0, index_1.getCalcWithoutResult)(currCalc));
            continue;
        }
        // sum only if it is a number
        if (arr[i] && !Number.isNaN(arr[i])) {
            sum += arr[i];
            calc += "".concat(calc === '$' ? '' : '+').concat(arr[i]);
        }
    }
    calc += "=".concat(sum, "$");
    return { sum: sum, calc: calc };
}
exports["default"] = sumValues;
