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
var index_1 = require("../index");
/**
 * Object with all the properties returned from ponderation function.
 * @typedef {Object} PonderationResults
 * @property {number[][]} comparisonTable - Table with comparisons between provided options.
 * @property {number[]} sums - The sum total for each column of the comparisonTable.
 * @property {number[]} priorities - The priority from each item (row) in the comparisonTable.
 * @property {number} lambdaMax - The result of the division of the totalConsistency by the number of attributes beeing compared.
 * @property {number[]} consistency - The result of dividing the priority of each row of the 'comparisonTable' by the sum of multiplying each item (of the respective row) by its priority.
 * @property {number} totalConsistency - The sum of all consistencies.
 * @property {number} ci - Consistency index, the result of dividing the lambdaMax minus the number of attributes by the number of attributes minus 1.
 * @property {number} cr - Consistency ratio, the result of dividing the CI by the RI (ramdom index - based in the array order).
 * @property {boolean} isConsistent - Tells if the result is consitent.
 * @property {Object} record - The record of what was made in this function.
 */
/**
 * Do all the math for the given comparison table.
 * @param {number[][]} comparisonTable - Two-dimensional array with the comparison values between options
 * @param {string[]} labels - The identifiers for rows and columns
 * @param {string} title - The title for this calculations record
 * @returns {PonderationResults} Object with all the properties returned from ponderation function.
 */
function ponderation(comparisonTable, labels, title) {
    var totalNumOfAttributes = comparisonTable[0].length;
    var _a = (0, index_1.sumColumns)(comparisonTable), sums = _a.sums, sumCalc = _a.calc;
    var _b = (0, index_1.priorityByItem)(comparisonTable, sums), priorities = _b.priorities, prioritiesCalc = _b.calc;
    var _c = (0, index_1.getConsistency)(comparisonTable, priorities), consistency = _c.consistency, totalConsistency = _c.totalConsistency, consistencyCalc = _c.calc;
    var _d = (0, index_1.getLambdaMax)(totalConsistency, totalNumOfAttributes), lambdaMax = _d.lambdaMax, lambdaMaxCalc = _d.calc;
    var _e = (0, index_1.getConsistencyIndex)(lambdaMax, totalNumOfAttributes), ci = _e.ci, ciCalc = _e.calc;
    var _f = (0, index_1.getConsistencyRatio)(ci, totalNumOfAttributes), cr = _f.cr, crCalc = _f.calc;
    var table = (0, index_1.createTable)(comparisonTable, {
        column: __spreadArray(__spreadArray([''], labels, true), ['V'], false),
        row: labels
    }, priorities, __spreadArray(__spreadArray(['$Sigma$'], sums, true), [''], false));
    var record = {
        title: title,
        table: table,
        calcs: [
            sumCalc,
            prioritiesCalc,
            consistencyCalc,
            lambdaMaxCalc,
            ciCalc,
            crCalc,
        ]
    };
    return {
        comparisonTable: comparisonTable,
        sums: sums,
        priorities: priorities,
        lambdaMax: lambdaMax,
        consistency: consistency,
        totalConsistency: totalConsistency,
        ci: ci,
        cr: cr,
        isConsistent: cr < 0.1,
        record: record
    };
}
exports["default"] = ponderation;
