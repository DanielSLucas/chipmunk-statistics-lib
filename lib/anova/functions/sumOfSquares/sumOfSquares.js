"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var utils_1 = require("../../utils");
/**
 * Return of sumOfSquares function
 * @typedef {Object} SumOfSquaresReturn
 * @property {number} total sum of squares total (SST)
 * @property {number} between sum of squares between/columns (SSB)
 * @property {number} within sum of squares within/error (SSW)
 * @property {Record} record the calculations made
 */
/**
 * Calulates the sum of squares: total (SST), between/columns (SSB), within/error (SSW) for the given samples
 * @param {(number | null)[][]} samples Two-dimensional numeric array of samples
 * @returns {SumOfSquaresReturn} All the sum of squares results
 */
function sumOfSquares(samples) {
    var _a = (0, utils_1.mean)(samples), overallMean = _a.mean, overallMeanCalc = _a.calc;
    var ssb = 0;
    var ssw = 0;
    var meansCalcs = ["$m\u00E9dia geral=$".concat(overallMeanCalc)];
    var sswCalcs = '$SSD=';
    var ssbCalcs = '$SSE=';
    samples.forEach(function (sample, i) {
        var _a = (0, utils_1.mean)(sample), sampleMean = _a.mean, sampleMeanCalc = _a.calc;
        meansCalcs.push("$m\u00E9dia amostras #".concat(i + 1, "=$").concat(sampleMeanCalc));
        var diffToOverallMean = sampleMean - overallMean;
        ssw += Math.pow(diffToOverallMean, 2) * (0, utils_1.countNotNullElements)(sample);
        sswCalcs += "".concat(sswCalcs === '$SSD=' ? '' : '+', "(").concat(sampleMean.toFixed(2), "-").concat(overallMean.toFixed(2), ")^2xx").concat((0, utils_1.countNotNullElements)(sample));
        sample.forEach(function (value) {
            if (value && !Number.isNaN(value)) {
                var diffToSamplelMean = value - sampleMean;
                ssb += Math.pow(diffToSamplelMean, 2);
                ssbCalcs += "".concat(ssbCalcs === '$SSE=' ? '' : '+', "(").concat(value.toFixed(2), "-").concat(sampleMean.toFixed(2), ")^2");
            }
        });
    });
    sswCalcs += "=".concat(ssw.toFixed(2), "$");
    ssbCalcs += "=".concat(ssb.toFixed(2), "$");
    var sst = ssw + ssb;
    var sstCalc = "$total=".concat(ssw.toFixed(2), "+").concat(ssb.toFixed(2), "=").concat(sst.toFixed(2), "$");
    var record = {
        title: "Soma de quadrados",
        calcs: __spreadArray(__spreadArray([], meansCalcs, true), [
            ssbCalcs,
            sswCalcs,
            sstCalc,
        ], false)
    };
    return {
        between: ssw,
        within: ssb,
        total: sst,
        record: record
    };
}
exports["default"] = sumOfSquares;
