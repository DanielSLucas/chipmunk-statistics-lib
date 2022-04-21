"use strict";
exports.__esModule = true;
/**
 * Object containing the return of getConsistency function
 * @typedef {Object} GetConsistencyReturn
 * @property {number[]} consistency - The consistency array
 * @property {number} totalConsistency - The total consistency of the arr and priorities
 * @property {string} calc - The calculations made to get the sums array
 */
/**
 * Calculates the consistency for the given arr and priorities
 * @param {number[][]} arr - An array of numbers.
 * @param {number[]} priorities - Row priorities.
 * @returns {GetConsistencyReturn}
 */
function getConsistency(arr, priorities) {
    var calc = '$';
    var totalConsistency = 0;
    var consistency = arr.map(function (row, i) {
        var total = 0;
        calc += 'frac{';
        row.forEach(function (item, j) {
            calc += "".concat(j === 0 ? '' : '+', "(").concat(item.toFixed(2), "xx").concat(priorities[j].toFixed(2), ")");
            total += item * priorities[j];
        });
        calc += "}{".concat(priorities[i].toFixed(2), "} ").concat(i === arr.length - 1 ? '' : '+$\n$');
        var currCons = total / priorities[i];
        totalConsistency += currCons;
        return currCons;
    });
    calc += "=".concat(totalConsistency.toFixed(2), "$");
    return { consistency: consistency, totalConsistency: totalConsistency, calc: calc };
}
exports["default"] = getConsistency;
