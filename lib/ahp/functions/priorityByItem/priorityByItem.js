"use strict";
exports.__esModule = true;
/**
 * Object containing the return of priorityByItem function
 * @typedef {Object} PriorityByItemReturn
 * @property {number[]} priorities - Array with the priority of each item in the arr
 * @property {string} calc - The calculations made to get the priorities array
 */
/**
 * Calculates the priority for each item in the arr
 * @param {number[][]} arr - An array of numbers.
 * @param {number[]} sums - Array with the sum of each column values.
 * @returns {PriorityByItemReturn}
 */
function priorityByItem(arr, sums) {
    var calc = '$';
    var priorities = arr.map(function (row) {
        var total = 0;
        calc += 'frac{';
        row.forEach(function (item, j) {
            calc += "".concat(j === 0 ? '' : '+', "(").concat(item.toFixed(2), "-:").concat(sums[j].toFixed(2), ")");
            total += item / sums[j];
        });
        calc += "}{".concat(row.length.toFixed(2), "}");
        var result = total / row.length;
        calc += "=".concat(result.toFixed(2), "$\n$");
        return result;
    });
    calc += '$';
    return { priorities: priorities, calc: calc };
}
exports["default"] = priorityByItem;
