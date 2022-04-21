"use strict";
exports.__esModule = true;
var utils_1 = require("../../utils");
/**
 * Return of degreesOfFreedom function
 * @typedef {Object} DegreesOfFreedomReturn
 * @property {number} between degrees of freedom columns/between (DFc)
 * @property {number} within degrees of freedom within/error (DFe)
 */
/**
 * Calculates the degrees of freedom between and within the comlumns
 * @param {(number |  null)[][]} samples Two-dimensional numeric array of samples
 * @returns {DegreesOfFreedomReturn} All the degrees of freedom results
 */
function degreesOfFreedom(samples) {
    var numberOfSamples = samples.length;
    var numberOfValues = (0, utils_1.countNotNullElements)(samples);
    var between = numberOfSamples - 1;
    var within = numberOfValues - numberOfSamples;
    var total = numberOfValues - 1;
    var record = {
        title: "Graus de liberdade",
        calcs: [
            "$GLE=".concat(numberOfSamples, "-1=").concat(between, "$"),
            "$GLD=".concat(numberOfValues, "-").concat(numberOfSamples, "=").concat(within, "$"),
            "$GLT=".concat(numberOfValues, "-1=").concat(total, "$"),
        ]
    };
    return {
        between: between,
        within: within,
        total: total,
        record: record
    };
}
exports["default"] = degreesOfFreedom;
