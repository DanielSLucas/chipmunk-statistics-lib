"use strict";
exports.__esModule = true;
var index_1 = require("../index");
/**
 * Object containing the return of mean function
 * @typedef {Object} MeanReturn
 * @property {number} mean - The mean result
 * @property {string} calc - The calculations made to get the mean
 */
/**
 * Returns the mean for a given array of values
 * @param {any[]} values Array of numeric values
 * @returns {number} The mean
 */
function mean(values) {
    var numberOfValues = (0, index_1.countNotNullElements)(values);
    var _a = (0, index_1.sumValues)(values), sum = _a.sum, sumCalc = _a.calc;
    var mean = sum / numberOfValues;
    var calc = "$frac{".concat((0, index_1.getCalcWithoutResult)(sumCalc), "}{").concat(numberOfValues, "}=").concat(mean.toFixed(2), "$");
    return { mean: mean, calc: calc };
}
exports["default"] = mean;
